import { db } from '@/lib/firebase-app'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { setFiles, setFilteredFiles } from '@/store/filesSlice'
import { FilesLoader } from './FilesLoader'
import { nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import getSize from '@/lib/getSize'
import { setProgress, setSize, setSizeInBytes } from '@/store/settingsSlice'

// Interface for the file object
interface FileItem {
	name: string
	path: string
	size: number
	id: string
	timestamp: number
}

const Files = () => {
	// Get the user data from the store
	const userData = JSON.parse(
		useAppSelector((state) => state.user.user) as string
	)
	// Gets firestore reference which has the id of the user
	const dbRef = collection(db, userData.uid)
	const [loading, setLoading] = useState<boolean>(false) // State to indicate if the files are loading

	const dispatch = useAppDispatch() // Dispatch function from the store
	const { files } = useAppSelector((state) => state.files) // Gets the files from the store
	const { layoutType } = useAppSelector((state) => state.settings) // Gets the layout type from the store
	const { filteredFiles } = useAppSelector((state) => state.files) // Gets the filtered files from the store

	// Tailwind classes according to the layout
	const layoutClasses = {
		grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
		list: 'grid grid-cols-1 gap-4',
	}

	// Helper function to get time in string from epoch timestamp
	const getTime = (timestamp: number) => {
		const date = new Date(timestamp)

		// Extract date, hour, and minute components
		const year = date.getFullYear()
		const month = ('0' + (date.getMonth() + 1)).slice(-2)
		const day = ('0' + date.getDate()).slice(-2)

		const formattedDateTime = `Modified • ${day}-${month}-${year}`

		return formattedDateTime
	}

	/**
	 * Deletes a file with the given id from the database and updates the state accordingly.
	 *
	 * @param {string} id - The id of the file to be deleted
	 * @return {void}
	 */
	const deleteFile = async (id: string) => {
		try {
			await deleteDoc(doc(dbRef, id))

			const newFiles = files.filter((file) => file.id !== id)
			// Remove the file from the state
			dispatch(setFiles(newFiles))

			// Remove the file from the filtered state
			dispatch(
				setFilteredFiles(filteredFiles.filter((file) => file.id !== id))
			)
			dispatch(setSizeInBytes(getTotalSize(newFiles))) // Updates the size in bytes
			dispatch(setSize(getSize(getTotalSize(newFiles)))) // Updates the size
			dispatch(setProgress(getTotalSize(newFiles) / 1000000)) // Updates the progress

			toast.success('File deleted successfully!')
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Calculate the total size of the files.
	 *
	 * @param {Array<FileItem>} files - an array of FileItem objects
	 * @return {number} the total size of the files
	 */
	const getTotalSize = (files: Array<FileItem>) => {
		return files.reduce((total, file) => total + file.size, 0)
	}

	/**
	 * A function to asynchronously retrieve files and update the state with the result.
	 *
	 * @return {void}
	 */
	const getFiles = async () => {
		setLoading(true)

		try {
			const files: Array<FileItem> = []
			const querySnapshot = await getDocs(dbRef)

			querySnapshot.forEach((doc) => {
				const fileData = doc.data()
				const fileItem: FileItem = {
					name: fileData.name,
					path: fileData.path,
					size: fileData.size,
					id: fileData.id,
					timestamp: fileData.timestamp,
				}
				files.push(fileItem)
			})

			// Updates the states
			dispatch(setFiles(files)) // Updates the files state
			dispatch(setFilteredFiles(files)) // Updates the filtered files state
			dispatch(setSizeInBytes(getTotalSize(files))) // Updates the size in bytes
			dispatch(setSize(getSize(getTotalSize(files)))) // Updates the size
			dispatch(setProgress(getTotalSize(files) / 1000000)) // Updates the progress
		} catch (error) {
			toast.error('Something went wrong, please try again!')
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getFiles()
	}, [])

	return (
		<div
			className={
				filteredFiles.length > 0
					? layoutClasses[layoutType]
					: 'flex items-center justify-center h-full'
			}
		>
			<div className={`${layoutClasses[layoutType]}`}>
				{loading &&
					Array(8)
						.fill(true)
						.map(() => <FilesLoader key={nanoid()} />)}
			</div>
			{!loading && filteredFiles.length === 0 && (
				<div className='grid items-center w-full h-full gap-2 mt-16 text-center'>
					<img
						src='no-files.svg'
						alt='No files!'
						className='w-48 mx-auto sm:w-56 md:w-64 lg:w-72'
					/>
					<h2 className='text-xl font-normal text-zinc-700'>
						Welcome to Drive, the home for all your files
					</h2>
					<p className='text-zinc-600'>Use the “New” button to upload</p>
				</div>
			)}
			{!loading &&
				filteredFiles.map((file) => {
					const extension = file.name.split('.').pop()

					return (
						<ContextMenu key={file.id}>
							<ContextMenuTrigger>
								<a href={file.path} target='_blank' rel='noreferrer'>
									<div
										className={`${
											layoutType === 'list' &&
											'flex flex-col sm:flex-row justify-between items-center gap-2'
										} p-4 duration-150 rounded-xl bg-file-bg hover:bg-blue-100 dark:hover:bg-blue-950 dark:bg-slate-800 overflow-hidden`}
									>
										<h2
											className={`flex justify-between ${
												layoutType === 'grid' && 'mb-2'
											} ${
												layoutType === 'grid'
													? 'text-sm'
													: 'text-base sm:w-1/2'
											} font-medium text-zinc-700 dark:text-slate-400`}
										>
											{file.name}
										</h2>
										<div
											className={`${
												layoutType === 'grid' ? 'flex' : 'hidden'
											} items-center justify-center h-24 ${
												layoutType === 'grid' && 'mb-1'
											} bg-white dark:bg-slate-700 rounded-lg lg:h-32`}
										>
											<h3 className='text-3xl font-bold uppercase text-zinc-500 dark:text-slate-400'>
												{extension}
											</h3>
										</div>
										<p
											className={`text-sm text-zinc-500 dark:text-slate-500 ${
												layoutType === 'grid' && 'mt-2'
											}`}
										>
											{getSize(file.size)}
										</p>
										<p
											className={`text-sm text-zinc-500 dark:text-slate-500 ${
												layoutType === 'grid' && 'mt-1'
											}`}
										>
											{getTime(file.timestamp)}
										</p>
									</div>
								</a>
							</ContextMenuTrigger>
							<ContextMenuContent>
								<ContextMenuLabel>Actions</ContextMenuLabel>
								<ContextMenuItem
									onClick={() =>
										navigator.clipboard.writeText(file.path)
									}
								>
									Copy link
								</ContextMenuItem>
								<ContextMenuItem
									className='text-red-600'
									onClick={() => deleteFile(file.id)}
								>
									Delete
								</ContextMenuItem>
							</ContextMenuContent>
						</ContextMenu>
					)
				})}
		</div>
	)
}

export default Files

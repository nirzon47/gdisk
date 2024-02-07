import { db } from '@/lib/firebase-app'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { setFiles } from '@/store/filesSlice'
import { FilesLoader } from './FilesLoader'
import { nanoid } from '@reduxjs/toolkit'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { toast } from 'react-toastify'
import { MoreVertical } from 'lucide-react'

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
	// const [fileList, setFileList] = useState<Array<FileItem>>([]) // State to store the files
	const [loading, setLoading] = useState<boolean>(false) // State to indicate if the files are loading

	const dispatch = useAppDispatch() // Dispatch function from the store
	const { files } = useAppSelector((state) => state.files) // Gets the files from the store
	const { layoutType } = useAppSelector((state) => state.settings)
	const layoutClasses = {
		grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
		list: 'grid grid-cols-1 gap-4',
	}

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
			// Remove the file from the state
			dispatch(setFiles(files.filter((file) => file.id !== id)))

			toast.success('File deleted successfully!')
		} catch (error) {
			console.error(error)
		}
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
				files.push(doc.data())
			})

			dispatch(setFiles(files))
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getFiles()
	}, [])

	return (
		<TransitionGroup>
			<CSSTransition
				timeout={300}
				classNames='animate-fade-left animate-once animate-duration-300'
			>
				<div className={layoutClasses[layoutType]}>
					{loading &&
						Array(8)
							.fill(true)
							.map(() => <FilesLoader key={nanoid()} />)}
					{!loading &&
						files.map((file) => {
							const extension = file.name.split('.').pop()

							return (
								<ContextMenu key={file.id}>
									<ContextMenuTrigger>
										<a
											href={file.path}
											target='_blank'
											rel='noreferrer'
										>
											<div
												className={`${
													layoutType === 'list' &&
													'flex flex-row justify-between'
												} p-4 duration-150 rounded-xl bg-file-bg hover:bg-blue-100 dark:bg-slate-800`}
											>
												<h2
													className={`flex justify-between ${
														layoutType === 'grid' && 'mb-2'
													} ${
														layoutType === 'grid'
															? 'text-sm'
															: 'text-base'
													} font-medium text-zinc-700 dark:text-slate-400`}
												>
													{file.name}
												</h2>
												<div
													className={`${
														layoutType === 'grid'
															? 'flex'
															: 'hidden'
													} items-center justify-center h-24 ${
														layoutType === 'grid' && 'mb-1'
													} bg-white dark:bg-slate-700 rounded-lg lg:h-32`}
												>
													<h3 className='text-3xl font-bold uppercase text-zinc-500 dark:text-slate-400'>
														{extension}
													</h3>
												</div>
												<p className='mt-2 text-sm text-zinc-500 dark:text-slate-500'>
													{getTime(file.timestamp)}
												</p>
											</div>
										</a>
									</ContextMenuTrigger>
									<ContextMenuContent>
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
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Files

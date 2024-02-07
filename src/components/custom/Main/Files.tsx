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

// Interface for the file object
interface FileItem {
	name: string
	path: string
	size: number
	id: string
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

	const deleteFile = async (id: string) => {
		try {
			await deleteDoc(doc(dbRef, id))
			dispatch(setFiles(files.filter((file) => file.id !== id)))
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
				<div className='grid grid-cols-4 gap-4'>
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
											<div className='p-4 duration-150 rounded-xl bg-file-bg hover:bg-blue-100'>
												<h2 className='mb-2 text-sm font-medium text-zinc-700'>
													{file.name}
												</h2>
												<div className='flex items-center justify-center py-12 mb-1 bg-white rounded-lg'>
													<h3 className='text-3xl font-bold uppercase text-zinc-500'>
														{extension}
													</h3>
												</div>
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

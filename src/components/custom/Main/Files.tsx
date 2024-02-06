import { db } from '@/lib/firebase-app'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { setFiles } from '@/store/filesSlice'

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
	// const [changes, setChanges] = useState<number>(0) // State to keep track of changes
	const dispatch = useAppDispatch() // Dispatch function from the store
	const [fileList, setFileList] = useState<Array<FileItem>>([]) // State to store the files
	const [loading, setLoading] = useState<boolean>(false) // State to indicate if the files are loading

	useEffect(() => {
		const getFiles = async () => {
			setLoading(true)
			try {
				const files: Array<FileItem> = []
				const querySnapshot = await getDocs(dbRef)

				querySnapshot.forEach((doc) => {
					files.push(doc.data())
				})

				dispatch(setFiles(files))
				setFileList(files)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		getFiles()
	}, [])

	return (
		<div className='grid grid-cols-4 gap-4'>
			{!loading &&
				fileList.map((file) => {
					const extension = file.name.split('.').pop()

					return (
						<ContextMenu key={file.id}>
							<ContextMenuTrigger>
								<a href={file.path} target='_blank' rel='noreferrer'>
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
								<ContextMenuItem>Rename</ContextMenuItem>
								<ContextMenuItem>Delete</ContextMenuItem>
							</ContextMenuContent>
						</ContextMenu>
					)
				})}
		</div>
	)
}

export default Files

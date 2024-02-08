import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { db, storage } from '@/lib/firebase-app'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { collection, doc, setDoc } from 'firebase/firestore'
import { nanoid } from '@reduxjs/toolkit'
import { setFiles, setFilteredFiles } from '@/store/filesSlice'
import { setProgress, setSize } from '@/store/settingsSlice'
import getSize from '@/lib/getSize'
import { toast } from 'react-toastify'

const AddFileButton = () => {
	// Get the user data from the store
	const userData = JSON.parse(
		useAppSelector((state) => state.user.user) as string
	)
	const storageRef = ref(storage) // Storage reference
	const dbRef = collection(db, userData.uid) // Database reference

	const [file, setFile] = useState<File | null>(null) // State to store the file
	const [uploading, setUploading] = useState<boolean>(false) // State to indicate if the file is being uploaded
	const [openDialog, setOpenDialog] = useState<boolean>(false) // State to indicate if the dialog is open

	const dispatch = useAppDispatch() // Dispatch function from the store
	const { files } = useAppSelector((state) => state.files) // Gets the files from the store
	const { sizeInBytes } = useAppSelector((state) => state.settings) // Gets the size (numeric) from the store

	const uploadFile = async () => {
		if (!file) return

		setUploading(true)

		try {
			// Uploads the file in root path of the storage as its file name
			const id = nanoid() // Generates a unique ID
			let downloadURLStored // Variable to store the download URL
			const remainingSpace = 100000000 - sizeInBytes // Calculates the remaining space

			// Checks if the file size exceeds the remaining space
			if (file.size > remainingSpace) {
				toast.error('File size exceeding the remaining space')
				setUploading(false)
				setFile(null)
				return
			}

			await uploadBytes(ref(storageRef, '/' + file.name), file).then(
				(snapshot) => {
					// Gets the download URL of the uploaded file
					getDownloadURL(snapshot.ref).then((downloadURL) => {
						downloadURLStored = downloadURL

						// Makes a new document in the db under the user's ID
						setDoc(doc(dbRef, id), {
							name: file.name,
							path: downloadURL,
							size: file.size,
							timestamp: Date.now(),
							id: id,
						})

						// Have to do it separately because of the async nature
						// Adds the file to the state
						dispatch(
							setFiles([
								...files,
								{
									name: file.name,
									path: downloadURLStored,
									size: file.size,
									id: id,
									timestamp: Date.now(),
								},
							])
						)

						// Adds the file to the filtered files
						dispatch(
							setFilteredFiles([
								...files,
								{
									name: file.name,
									path: downloadURLStored,
									size: file.size,
									id: id,
									timestamp: Date.now(),
								},
							])
						)

						// Updates the size and progress
						dispatch(setSize(getSize(sizeInBytes + file.size)))
						dispatch(setProgress((sizeInBytes + file.size) / 1000000))
					})
				}
			)

			// Removes the file from the state
			setFile(null)
		} catch (error) {
			toast.error('Something went wrong, please try again!')
			console.error(error)
		} finally {
			setUploading(false)
			setOpenDialog(false)
		}
	}

	// Handles file change
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return

		// Sets the file state
		setFile(e.target.files[0])
	}

	return (
		<Dialog open={openDialog} onOpenChange={setOpenDialog}>
			<DialogTrigger>
				<span className='inline-block p-4 pt-2'>
					<span className='flex items-center gap-3 py-4 pl-4 pr-5 duration-300 bg-white shadow-md dark:bg-slate-800 rounded-2xl hover:bg-opacity-10 hover:bg-blue-300 dark:hover:bg-slate-900 dark:text-slate-300'>
						<Plus />
						<span className='text-sm font-medium'>New</span>
					</span>
				</span>
			</DialogTrigger>
			<DialogContent className=''>
				<DialogHeader>
					<DialogTitle className='mb-4 dark:text-icons-color-dark'>
						Upload File
					</DialogTitle>
					<DialogDescription>
						<Input
							type='file'
							className='mb-2 dark:text-icons-color-dark dark:file:text-icons-color-dark'
							onChange={handleFileChange}
						/>
						<Button
							type='submit'
							onClick={uploadFile}
							disabled={uploading}
						>
							{uploading ? 'Uploading...' : 'Upload'}
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddFileButton

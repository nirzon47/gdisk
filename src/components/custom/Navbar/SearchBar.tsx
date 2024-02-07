import { setFilteredFiles } from '@/store/filesSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const dispatch = useAppDispatch()
	const { files } = useAppSelector((state) => state.files)

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		console.log(e.target.value)

		// If the search term is empty, show all files
		if (e.target.value === '') {
			dispatch(setFilteredFiles(files))
			return
		}

		// Filters the files based on the search term
		dispatch(
			setFilteredFiles(
				files.filter((file) => {
					{
						// Splitting off the file extension
						const fileNameArr = file.name.split('.')
						fileNameArr.pop()
						const fileName = fileNameArr.join('.').toLowerCase()

						return fileName.includes(e.target.value.toLowerCase())
					}
				})
			)
		)
	}

	return (
		<div className='hidden bg-search-bg dark:bg-search-bg-dark py-3 px-4 rounded-full text-icons-color-light w-[720px] min-w-12 items-center md:flex dark:text-icons-color-dark'>
			<Search className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<input
				type='text'
				placeholder='Search in Disk'
				className='pl-4 bg-transparent outline-none w-96 placeholder-zinc-500 dark:placeholder-blue-50 dark:placeholder-opacity-60'
				value={searchTerm}
				onInput={handleSearchInput}
			/>
			<SlidersHorizontal className='p-1 ml-auto duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
		</div>
	)
}

export default SearchBar

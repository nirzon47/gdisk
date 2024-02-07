import { setFilteredFiles } from '@/store/filesSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const dispatch = useAppDispatch()
	const { files } = useAppSelector((state) => state.files)

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		// Filters the files based on the search term
		dispatch(
			setFilteredFiles(
				files.filter((file) =>
					file.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
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
				onChange={handleSearchChange}
			/>
			<SlidersHorizontal className='p-1 ml-auto duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
		</div>
	)
}

export default SearchBar

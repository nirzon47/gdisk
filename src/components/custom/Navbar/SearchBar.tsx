import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { setFilteredFiles } from '@/store/filesSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const dispatch = useAppDispatch()
	const { files } = useAppSelector((state) => state.files)
	const { filteredFiles } = useAppSelector((state) => state.files)

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

	/**
	 * Sorts the files based on the given type and updates the filtered files.
	 *
	 * @param {string} type - the type of sorting to apply
	 * @return {void}
	 */
	const sort = (type: string) => {
		switch (type) {
			case 'name-asc': {
				const sortedFiles = [...filteredFiles].sort((a, b) => {
					return a.name.localeCompare(b.name)
				})

				dispatch(setFilteredFiles(sortedFiles))
				break
			}
			case 'name-desc': {
				const sortedFiles = [...filteredFiles].sort((a, b) => {
					return b.name.localeCompare(a.name)
				})

				dispatch(setFilteredFiles(sortedFiles))
				break
			}
			case 'date-asc': {
				const sortedFiles = [...filteredFiles].sort((a, b) => {
					return a.timestamp - b.timestamp
				})

				dispatch(setFilteredFiles(sortedFiles))
				break
			}
			case 'date-desc': {
				const sortedFiles = [...filteredFiles].sort((a, b) => {
					return b.timestamp - a.timestamp
				})

				dispatch(setFilteredFiles(sortedFiles))
				break
			}

			default:
				dispatch(setFilteredFiles(files))
		}

		// Resets the search term
		setSearchTerm('')
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
			<DropdownMenu>
				<DropdownMenuTrigger className='ml-auto'>
					<SlidersHorizontal className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Sort By</DropdownMenuLabel>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => sort('name-asc')}
					>
						Name Ascending
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => sort('name-desc')}
					>
						Name Descending
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => sort('date-asc')}
					>
						Date Modified Ascending
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => sort('date-desc')}
					>
						Date Modified Descending
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default SearchBar

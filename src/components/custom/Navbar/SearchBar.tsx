import { Search, SlidersHorizontal } from 'lucide-react'

const SearchBar = () => {
	return (
		<div className='hidden bg-search-bg dark:bg-search-bg-dark py-3 px-4 rounded-full text-icons-color-light w-[720px] min-w-12 items-center md:flex dark:text-icons-color-dark'>
			<Search className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<input
				type='text'
				placeholder='Search in Disk'
				className='pl-4 bg-transparent outline-none w-96 placeholder-zinc-500 dark:placeholder-blue-50 dark:placeholder-opacity-60'
			/>
			<SlidersHorizontal className='p-1 ml-auto duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
		</div>
	)
}

export default SearchBar

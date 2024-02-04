import { Search, SlidersHorizontal } from 'lucide-react'

const SearchBar = () => {
	return (
		<div className='hidden bg-search-bg py-3 px-4 rounded-full text-icons-color-light w-[640px] min-w-12 items-center md:flex'>
			<Search className='hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1 cursor-pointer' />
			<input
				type='text'
				placeholder='Search in Disk'
				className='w-96 bg-transparent outline-none pl-4 placeholder-zinc-500'
			/>
			<SlidersHorizontal className='ml-auto hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1 cursor-pointer' />
		</div>
	)
}

export default SearchBar

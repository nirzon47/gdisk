import { Search, SlidersHorizontal } from 'lucide-react'

const SearchBar = () => {
	return (
		<div className='flex bg-search-bg py-3 px-4 rounded-full text-icons-color-light w-[640px] min-w-96 items-center'>
			<Search className='hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1' />
			<input
				type='text'
				placeholder='Search in Disk'
				className='w-96 bg-transparent outline-none pl-4'
			/>
			<SlidersHorizontal className='ml-auto hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1' />
		</div>
	)
}

export default SearchBar

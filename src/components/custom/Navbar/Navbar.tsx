import IconGroup from './IconGroup'
import SearchBar from './SearchBar'

const Navbar = () => {
	return (
		<nav className='flex items-center justify-end w-full h-16 gap-2 p-3 md:justify-between'>
			<SearchBar />
			<IconGroup />
		</nav>
	)
}

export default Navbar

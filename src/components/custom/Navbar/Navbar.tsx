import IconGroup from './IconGroup'
import SearchBar from './SearchBar'

const Navbar = () => {
	return (
		<nav className='h-16 p-3 flex w-full items-center gap-2 justify-end md:justify-between'>
			<SearchBar />
			<IconGroup />
		</nav>
	)
}

export default Navbar

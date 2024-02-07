import AddFileButton from '../Sidebar/AddFileButton'
import Logo from '../Sidebar/Logo'
import IconGroup from './IconGroup'
import SearchBar from './SearchBar'

const Navbar = () => {
	return (
		<>
			<nav className='flex items-center justify-between w-full gap-2 p-3 md:h-16'>
				<div className='md:hidden'>
					<Logo />
				</div>
				<SearchBar />
				<IconGroup />
			</nav>
			<div className='md:hidden'>
				<AddFileButton />
			</div>
		</>
	)
}

export default Navbar

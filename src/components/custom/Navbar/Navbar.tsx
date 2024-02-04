import IconGroup from './IconGroup'
import SearchBar from './SearchBar'

const Navbar = () => {
	return (
		<nav className='h-16 p-3 flex items-center'>
			{/* Logo Div */}
			<div className='flex items-center gap-2 pl-3 w-64'>
				<img src='logo.png' alt='logo' className='h-9' />
				<h2 className='text-[24px] text-zinc-600'>Disk</h2>
			</div>

			<SearchBar />

			<IconGroup />
		</nav>
	)
}

export default Navbar

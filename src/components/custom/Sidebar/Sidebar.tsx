import AddFileButton from './AddFileButton'
import Logo from './Logo'
import SidebarIconGroup from './SidebarIconGroup'
import Size from './Size'

const Sidebar = () => {
	return (
		<div className='hidden w-48 h-screen md:inline-block lg:w-64'>
			<Logo />
			<AddFileButton />
			<SidebarIconGroup />
			<Size />
		</div>
	)
}

export default Sidebar

import AddFileButton from './AddFileButton'
import Logo from './Logo'

const Sidebar = () => {
	return (
		<div className='hidden w-48 h-screen md:inline-block lg:w-64'>
			<Logo />
			<AddFileButton />
		</div>
	)
}

export default Sidebar

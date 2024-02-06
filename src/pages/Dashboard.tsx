import Main from '@/components/custom/Main/Main'
import Sidebar from '@/components/custom/Sidebar/Sidebar'
import { useAppSelector } from '@/store/store'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
	// Gets the user data from store
	const userData = useAppSelector((state) => state.user.user)

	// If the user data is null, it redirects to the authentication page
	return userData ? (
		<div className='flex min-h-screen font-medium dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 font-geist'>
			<Sidebar />
			<Main />
		</div>
	) : (
		<Navigate to='/auth' />
	)
}

export default Dashboard

import Logo from '@/components/custom/Sidebar/Logo'
import LandingSplash from '@/components/custom/Authentication/LandingSplash'
import LandingLoginButton from '@/components/custom/Authentication/LandingLoginButton'
import { useAppSelector } from '@/store/store'
import { Navigate } from 'react-router-dom'

const Authentication = () => {
	// Gets the user data from store
	const userData = useAppSelector((state) => state.user.user)
	console.log(userData)

	// If the user data is not null, it redirects to the dashboard
	return userData === 'null' || !userData ? (
		<div className='w-screen h-screen overflow-hidden font-geist'>
			<div className='flex items-center justify-between py-2 md:px-8'>
				<Logo />
				<LandingLoginButton />
			</div>
			<LandingSplash />
		</div>
	) : (
		<Navigate to='/' />
	)
}

export default Authentication

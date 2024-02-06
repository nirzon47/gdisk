import Logo from '@/components/custom/Sidebar/Logo'
import LandingSplash from '@/components/custom/Authentication/LandingSplash'
import LandingLoginButton from '@/components/custom/Authentication/LandingLoginButton'

const Authentication = () => {
	return (
		<div className='w-screen h-screen overflow-hidden font-geist'>
			<div className='flex items-center justify-between py-2 md:px-8'>
				<Logo />
				<LandingLoginButton />
			</div>
			<LandingSplash />
		</div>
	)
}

export default Authentication

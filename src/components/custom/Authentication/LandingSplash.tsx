import LandingLoginButton from './LandingLoginButton'

const LandingSplash = () => {
	return (
		<div className='h-[calc(100vh-4rem)] flex items-center'>
			<div className='flex flex-col gap-8 p-16 md:gap-12 md:w-1/2'>
				<h1 className='text-3xl leading-tight md:text-5xl lg:text-6xl'>
					Easy and secure access to your content
				</h1>
				<p className='text-lg md:text-xl lg:text-2xl text-zinc-500'>
					Store, share, and collaborate on files and folders from your
					mobile device, tablet, or computer
				</p>
				<LandingLoginButton />
			</div>
			<img
				src='landing-splash.jpg'
				alt='Landing'
				className='hidden w-1/2 md:inline-block'
			/>
		</div>
	)
}

export default LandingSplash

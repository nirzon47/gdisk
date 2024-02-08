import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { HelpCircle, Settings, User } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { setUser } from '@/store/userSlice'
import { auth } from '@/lib/firebase-app'
import { useTheme } from '@/components/theme-provider'

const IconGroup = () => {
	const { setTheme } = useTheme() // Gets the theme from the theme provider
	// Get the user data from the store
	const userData = JSON.parse(
		useAppSelector((state) => state.user.user) as string
	)

	// Gets the dispatch functions from the store
	const dispatch = useAppDispatch()

	/**
	 * This function handles the logout process by removing the user information from local storage, dispatching a setUser action with 'null', and signing out of the authentication service.
	 */
	const handleLogout = () => {
		// Remove the user information from local storage
		localStorage.removeItem('user')
		// Set the theme to 'light'
		setTheme('light')
		// Dispatch a setUser action with 'null'
		dispatch(setUser(null))

		// Sign out of the authentication service
		auth.signOut()
	}

	return (
		<div className='flex items-center gap-4 text-icons-color-light dark:text-icons-color-dark'>
			<Dialog>
				<DialogTrigger>
					<HelpCircle className='p-1 duration-150 scale-150 rounded-full cursor-pointer dark:hover:bg-blue-50 hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10' />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='dark:text-slate-400'>
							App Guide
						</DialogTitle>
						<DialogDescription className='p-8'>
							<Carousel>
								<CarouselContent>
									<CarouselItem>
										<img
											src='/guide/upload-file.jpeg'
											alt='Upload File'
										/>
										<p className='mt-4'>
											Upload File using this button
										</p>
									</CarouselItem>
									<CarouselItem>
										<img
											src='/guide/search-files.jpeg'
											alt='Search your Files'
										/>
										<p className='mt-4'>
											Search your Files using this input
										</p>
									</CarouselItem>
									<CarouselItem>
										<img
											src='/guide/sort-files.jpeg'
											alt='Sort your Files'
										/>
										<p className='mt-4'>
											Sort your Files using this button
										</p>
									</CarouselItem>
									<CarouselItem>
										<img
											src='/guide/change-theme.jpeg'
											alt='Change Theme'
										/>
										<p className='mt-4'>
											Change your app theme using this button
										</p>
									</CarouselItem>
									<CarouselItem>
										<img
											src='/guide/context-menu.jpeg'
											alt='Context'
										/>
										<p className='mt-4'>
											Open the context menu by right clicking on the
											file or long press (in phone) to get sharable
											link or delete the file
										</p>
									</CarouselItem>
									<CarouselItem>
										<img
											src='/guide/change-layout.jpeg'
											alt='Change Layout'
										/>
										<p className='mt-4'>
											Change app layout using this toggle
										</p>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Settings className='p-1 duration-150 scale-150 rounded-full cursor-pointer dark:hover:bg-blue-50 hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10'>
						<span className='sr-only'>Toggle theme</span>
					</Settings>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Theme</DropdownMenuLabel>
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			{/* Dropdown Menu for user options */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className='p-0.5 rounded-full border-2 border-red-300 cursor-pointer'>
						<Avatar>
							<AvatarImage src={userData?.photoURL} />
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={handleLogout}
						className='text-red-500 cursor-pointer'
					>
						Log out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default IconGroup

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Grip, HelpCircle, Settings, User } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { setUser } from '@/store/userSlice'
import { auth } from '@/lib/firebase-app'

const IconGroup = () => {
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
		// Dispatch a setUser action with 'null'
		dispatch(setUser(null))

		// Sign out of the authentication service
		auth.signOut()
	}

	return (
		<div className='flex items-center gap-4 text-icons-color-light'>
			<HelpCircle className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<Settings className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<Grip className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />

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

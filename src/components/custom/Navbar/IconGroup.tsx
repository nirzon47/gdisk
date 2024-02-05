import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Grip, HelpCircle, Settings, User } from 'lucide-react'

const IconGroup = () => {
	return (
		<div className='flex items-center gap-4 text-icons-color-light'>
			<HelpCircle className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<Settings className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<Grip className='p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10' />
			<div className='p-0.5 rounded-full border-2 border-red-300 cursor-pointer'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
			</div>
		</div>
	)
}

export default IconGroup

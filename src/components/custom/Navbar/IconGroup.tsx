import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Grip, HelpCircle, Settings, User } from 'lucide-react'

const IconGroup = () => {
	return (
		<div className='ml-auto text-icons-color-light flex items-center gap-4'>
			<HelpCircle className='hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1 cursor-pointer' />
			<Settings className='hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1 cursor-pointer' />
			<Grip className='hover:bg-black hover:bg-opacity-10 rounded-full duration-150 scale-150 p-1 cursor-pointer' />
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

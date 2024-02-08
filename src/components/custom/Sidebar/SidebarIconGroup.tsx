import {
	AlertOctagon,
	Clock,
	Cloud,
	HardDrive,
	Home,
	Laptop,
	Star,
	Trash2,
	Users,
} from 'lucide-react'

const SidebarIconGroup = () => {
	return (
		<div className='grid gap-4 p-2 ml-1 text-sm'>
			<div>
				<div className='flex items-center gap-2 px-4 py-2 duration-150 bg-blue-100 rounded-full dark:bg-blue-950'>
					<Home className='w-6 h-6' />
					<p>Home</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<HardDrive className='w-6 h-6' />
					<p>My Drive</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Laptop className='w-6 h-6' />
					<p>Computers</p>
				</div>
			</div>
			<div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Users className='w-6 h-6' />
					<p>Shared with me</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Clock className='w-6 h-6' />
					<p>Recent</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Star className='w-6 h-6' />
					<p>Starred</p>
				</div>
			</div>
			<div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<AlertOctagon className='w-6 h-6' />
					<p>Spam</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Trash2 className='w-6 h-6' />
					<p>Trash</p>
				</div>
				<div className='flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200'>
					<Cloud className='w-6 h-6' />
					<p>Storage</p>
				</div>
			</div>
		</div>
	)
}

export default SidebarIconGroup

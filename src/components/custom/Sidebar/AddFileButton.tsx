import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

const AddFileButton = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className='p-4 pt-2'>
					<button className='flex items-center gap-3 py-4 pl-4 pr-5 bg-white rounded-2xl shadow-md hover:bg-opacity-10 duration-300 hover:bg-blue-300'>
						<Plus />
						<span className='text-sm font-medium'>New</span>
					</button>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddFileButton

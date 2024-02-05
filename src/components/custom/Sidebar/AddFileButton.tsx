import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Plus } from 'lucide-react'

const AddFileButton = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className='p-4 pt-2'>
					<div className='flex items-center gap-3 py-4 pl-4 pr-5 bg-white rounded-2xl shadow-md hover:bg-opacity-10 duration-300 hover:bg-blue-300'>
						<Plus />
						<span className='text-sm font-medium'>New</span>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-4'>Upload File</DialogTitle>
					<DialogDescription>
						{/* TODO: Make it dynamic */}
						<Progress className='mb-4' value={80} />
						<Input type='file' className='mb-2' />
						<Button>Upload</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddFileButton

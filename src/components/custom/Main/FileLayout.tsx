import { AlignJustify, LayoutGrid } from 'lucide-react'

const FileLayout = () => (
	<div className='flex items-center justify-center w-32 overflow-hidden border rounded-full cursor-pointer border-zinc-500'>
		<span className='w-full h-full bg-blue-200 bg-opacity-40'>
			<AlignJustify className='h-full mx-auto scale-75' />
		</span>
		<div className='bg-zinc-500 w-[0.5px] h-full cursor-default'></div>
		<span className='w-full h-full'>
			<LayoutGrid className='h-full mx-auto scale-75' />
		</span>
	</div>
)

export default FileLayout

import { useAppSelector } from '@/store/store'
import FileLayout from './FileLayout'

const StickyHeader = () => {
	const { layoutType } = useAppSelector((state) => state.settings)
	return (
		<div className='sticky top-0 z-10 pt-4 pb-2 mb-2 bg-white dark:bg-dashboard-dark'>
			<div className='flex justify-between'>
				<h1 className='text-2xl'>Home</h1>
				<FileLayout />
			</div>
			{layoutType === 'list' && (
				<div className='justify-between hidden px-4 mt-8 text-sm sm:flex'>
					<p className='w-1/2'>File Name</p>
					<p className='w-24'>Size</p>
					<p>Last Modified</p>
				</div>
			)}
		</div>
	)
}

export default StickyHeader

import FileLayout from './FileLayout'

const StickyHeader = () => {
	return (
		<div className='sticky top-0 z-10 pt-4 pb-2 mb-2 bg-white dark:bg-dashboard-dark'>
			<div className='flex justify-between'>
				<h1 className='text-2xl'>Home</h1>
				<FileLayout />
			</div>
		</div>
	)
}

export default StickyHeader

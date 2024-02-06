import { setLayoutType } from '@/store/settingsSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { AlignJustify, LayoutGrid } from 'lucide-react'

const FileLayout = () => {
	// Getting the layout type from the store
	const layoutSetting = useAppSelector((state) => state.settings.layoutType)
	// Getting the dispatch function from the store
	const dispatch = useAppDispatch()

	return (
		<div className='flex items-center justify-center w-32 overflow-hidden border rounded-full cursor-pointer border-zinc-500'>
			<span
				className={`w-full h-full bg-blue-200 ${
					layoutSetting === 'list' ? 'bg-opacity-40' : 'bg-opacity-0'
				}`}
				onClick={() => dispatch(setLayoutType('list'))}
			>
				<AlignJustify className='h-full mx-auto scale-75' />
			</span>
			<div className='bg-zinc-500 w-[0.5px] h-full cursor-default'></div>
			<span
				className={`w-full h-full bg-blue-200 ${
					layoutSetting === 'grid' ? 'bg-opacity-40' : 'bg-opacity-0'
				}`}
				onClick={() => dispatch(setLayoutType('grid'))}
			>
				<LayoutGrid className='h-full mx-auto scale-75' />
			</span>
		</div>
	)
}

export default FileLayout

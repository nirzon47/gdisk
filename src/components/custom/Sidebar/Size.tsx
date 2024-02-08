import { useAppSelector } from '@/store/store'
import { Progress } from '@/components/ui/progress'

const Size = () => {
	const { size, progress } = useAppSelector((state) => state.settings)

	return (
		<div className='w-10/12 mx-auto mt-4'>
			<Progress value={progress} className='mb-2'></Progress>
			<div className='text-sm'>{size} of 100MB</div>
		</div>
	)
}

export default Size

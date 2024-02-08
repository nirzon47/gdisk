import { Skeleton } from '@/components/ui/skeleton'

export const FilesLoader = () => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<Skeleton className='h-[125px] md:w-[150px] lg:w-[200px] lg:h-[150px] xl:w-[250px] w-[250px] rounded-xl' />
			<div className='flex flex-col gap-2'>
				<Skeleton className='h-4 w-[250px] md:w-[150px] lg:w-[200px] xl:w-[250px]' />
				<Skeleton className='h-4 w-[150px] md:w-[150px] lg:w-[200px] xl:w-[250px]' />
			</div>
		</div>
	)
}

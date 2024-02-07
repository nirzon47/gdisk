import { Skeleton } from '@/components/ui/skeleton'
import { CSSTransition } from 'react-transition-group'

export const FilesLoader = () => {
	return (
		<CSSTransition
			timeout={300}
			classNames='animate-fade-left animate-once animate-duration-300'
		>
			<div className='flex flex-col space-y-3'>
				<Skeleton className='h-[125px] w-[250px] rounded-xl' />
				<div className='space-y-2'>
					<Skeleton className='h-4 w-[250px]' />
					<Skeleton className='h-4 w-[200px]' />
				</div>
			</div>
		</CSSTransition>
	)
}
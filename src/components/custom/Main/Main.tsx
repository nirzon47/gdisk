import Navbar from '../Navbar/Navbar'
// @ts-expect-error: Importing custom scrollbar component which is made with js
import { Scrollbars } from 'react-custom-scrollbars'
import StickyHeader from './StickyHeader'
import Files from './Files'

const Main = () => {
	return (
		<div className='w-[calc(100vw-16rem)]'>
			<Navbar />
			<div className='px-4 pt-2 pb-4'>
				<Scrollbars
					autoHide={true}
					autoHideTimeout={1000}
					autoHideDuration={200}
					style={{
						width: '100%',
						height: 'calc(100vh - 5.5rem)',
						borderRadius: '1rem',
						backgroundColor: 'white',
						padding: '1rem',
					}}
				>
					<div className='relative p-4 pt-0'>
						<StickyHeader />
						<Files />
					</div>
				</Scrollbars>
			</div>
		</div>
	)
}

export default Main

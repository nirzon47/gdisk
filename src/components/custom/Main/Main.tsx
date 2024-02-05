import Navbar from '../Navbar/Navbar'
// @ts-expect-error: Importing custom scrollbar component which is made with js
import { Scrollbars } from 'react-custom-scrollbars'

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
					<div className='p-4'></div>
				</Scrollbars>
			</div>
		</div>
	)
}

export default Main

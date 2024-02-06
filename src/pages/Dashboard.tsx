import Main from '@/components/custom/Main/Main'
import Sidebar from '@/components/custom/Sidebar/Sidebar'

const Dashboard = () => {
	return (
		<div className='flex min-h-screen font-medium dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 font-geist'>
			<Sidebar />
			<Main />
		</div>
	)
}

export default Dashboard

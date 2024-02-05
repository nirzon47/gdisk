import { ThemeProvider } from '@/components/theme-provider'
import './lib/firebase-app.ts'
import Sidebar from './components/custom/Sidebar/Sidebar.tsx'
import Main from './components/custom/Main/Main.tsx'
// import { Scrollbars } from 'react-custom-scrollbars'

const App = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='flex min-h-screen font-medium dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 font-open-sans'>
				<Sidebar />
				<Main />
			</div>
		</ThemeProvider>
	)
}

export default App

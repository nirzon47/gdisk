import { ThemeProvider } from '@/components/theme-provider'
import './lib/firebase-app.ts'
import Sidebar from './components/custom/Sidebar/Sidebar.tsx'
import Main from './components/custom/Main/Main.tsx'

const App = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 min-h-screen font-open-sans font-medium flex'>
				<Sidebar />
				<Main />
			</div>
		</ThemeProvider>
	)
}

export default App

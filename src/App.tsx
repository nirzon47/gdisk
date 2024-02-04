import { ThemeProvider } from '@/components/theme-provider'
import './lib/firebase-app.ts'
import Navbar from './components/custom/Navbar/Navbar.tsx'
import Sidebar from './components/custom/Sidebar/Sidebar.tsx'

const App = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<div className='dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 min-h-screen font-open-sans font-medium'>
				<Navbar />
				<div>
					<Sidebar />
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App

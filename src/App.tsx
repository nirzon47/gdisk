import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import './lib/firebase-app.ts'

const App = () => {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div className='dark:bg-zinc-900 dark:text-white min-h-screen'>
				App
				<ModeToggle />
			</div>
		</ThemeProvider>
	)
}

export default App

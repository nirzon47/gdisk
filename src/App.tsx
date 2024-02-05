import { ThemeProvider } from '@/components/theme-provider'
import './lib/firebase-app.ts'
import Sidebar from './components/custom/Sidebar/Sidebar.tsx'
import Main from './components/custom/Main/Main.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
				<div className='flex min-h-screen font-medium dark:bg-zinc-900 dark:text-white bg-content-bg text-zinc-950 font-open-sans'>
					<Sidebar />
					<Main />
				</div>
			</ThemeProvider>
		</Provider>
	)
}

export default App

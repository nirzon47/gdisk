import './lib/firebase-app.ts'
import { ThemeProvider } from '@/components/theme-provider'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Authentication from './pages/Authentication.tsx'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/auth',
		element: <Authentication />,
	},
	{
		path: '*',
		element: <Authentication />,
	},
])

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
				<RouterProvider router={routes} />
			</ThemeProvider>
		</Provider>
	)
}

export default App

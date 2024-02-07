import './lib/firebase-app.ts'
import { ThemeProvider, useTheme } from '@/components/theme-provider'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Authentication from './pages/Authentication.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/login',
		element: <Authentication />,
	},
	{
		path: '*',
		element: <Authentication />,
	},
])

const App = () => {
	const { theme } = useTheme()

	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
				<RouterProvider router={routes} />
			</ThemeProvider>
			<ToastContainer
				position='top-right'
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme}
			/>
		</Provider>
	)
}

export default App

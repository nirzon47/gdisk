import './lib/firebase-app.ts'
import { ThemeProvider, useTheme } from '@/components/theme-provider'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Authentication from './pages/Authentication.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Routes for react router dom CSR
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/signIn',
		element: <Authentication />,
	},
	{
		path: '/*',
		element: <Authentication />,
	},
])

const App = () => {
	const { theme } = useTheme()

	return (
		// Redux Provider
		<Provider store={store}>
			{/* Theme Context Provider */}
			<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
				{/* React Router Provider */}
				<RouterProvider router={routes} />
			</ThemeProvider>
			<ToastContainer
				autoClose={2000}
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

import { Button } from '@/components/ui/button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase-app'
import { useState } from 'react'
import { useAppDispatch } from '@/store/store'
import { setUser } from '@/store/userSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const provider = new GoogleAuthProvider()

const LandingLoginButton = () => {
	const [loading, setLoading] = useState<boolean>(false) // Loading state
	const dispatch = useAppDispatch() // Dispatch function from the store
	const navigate = useNavigate() // Navigate hook from react-router-dom

	const handleLogin = async () => {
		setLoading(true) // Set loading state to true

		// Sign in with Google
		try {
			// Add scopes to the provider
			provider.addScope('profile')
			provider.addScope('email')
			const result = await signInWithPopup(auth, provider)

			const user = result.user

			// Set the user in the store
			dispatch(setUser(JSON.stringify(user)))
			// Store the user in localStorage
			localStorage.setItem('user', JSON.stringify(user))

			// Navigate to the home page
			navigate('/')
		} catch (error) {
			toast.error(
				'Something went wrong, please try again! Contact nirzon47 on GitHub if the issue persists.'
			)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Button
			className='w-32 h-12 mr-2 text-lg font-medium bg-blue-500 hover:bg-blue-600'
			onClick={handleLogin}
			disabled={loading}
		>
			Log In
		</Button>
	)
}

export default LandingLoginButton

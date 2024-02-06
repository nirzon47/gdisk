import { Button } from '@/components/ui/button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase-app'
import { useState } from 'react'
import { useAppDispatch } from '@/store/store'
import { setUser } from '@/store/userSlice'
import { useNavigate } from 'react-router-dom'

const provider = new GoogleAuthProvider()

const LandingLoginButton = () => {
	const [loading, setLoading] = useState<boolean>(false) // Loading state
	const dispatch = useAppDispatch() // Dispatch function from the store
	const navigate = useNavigate()

	const handleLogin = async () => {
		setLoading(true)
		try {
			provider.addScope('profile')
			provider.addScope('email')
			const result = await signInWithPopup(auth, provider)

			const user = result.user
			dispatch(setUser(user))
			console.log(user)

			navigate('/')
		} catch (error) {
			console.log(error)
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

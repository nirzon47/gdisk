// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
	projectId: 'gdisk-e2822',
	storageBucket: 'gdisk-e2822.appspot.com',
	messagingSenderId: '193561525228',
	appId: '1:193561525228:web:4a6d1edd71f41477c55ec9',
	measurementId: 'G-WMED7FTL0G',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

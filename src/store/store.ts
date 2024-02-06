import { configureStore } from '@reduxjs/toolkit'
import { SettingsSlice } from './settingsSlice'
import { UserSlice } from './userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Creating a Redux store using the configureStore function
export const store = configureStore({
	reducer: {
		// Adding the settings reducer from the SettingsSlice to the store
		settings: SettingsSlice.reducer,
		user: UserSlice.reducer,
	},
})

// Defining the RootState type as the return type of the store.getState function
export type RootState = ReturnType<typeof store.getState>

// Defining the useAppDispatch function as the useDispatch function from the store
export const useAppDispatch: () => typeof store.dispatch = useDispatch

// Defining the useAppSelector function as the useSelector function with the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { SettingsSlice } from './settingsSlice'
import { UserSlice } from './userSlice'
import { FilesSlice } from './filesSlice'

// Creating a Redux store using the configureStore function
export const store = configureStore({
	reducer: {
		// Adding the reducers from the imported slices to the store
		settings: SettingsSlice.reducer,
		user: UserSlice.reducer,
		files: FilesSlice.reducer,
	},
})

// Defining the RootState type as the return type of the store.getState function
export type RootState = ReturnType<typeof store.getState>

// Defining the useAppDispatch function as the useDispatch function from the store
export const useAppDispatch: () => typeof store.dispatch = useDispatch

// Defining the useAppSelector function as the useSelector function with the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

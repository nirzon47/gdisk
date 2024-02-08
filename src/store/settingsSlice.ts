import { createSlice } from '@reduxjs/toolkit'

// The interface for the SettingsState object
interface SettingsState {
	layoutType: 'grid' | 'list' // The layout type can be either 'grid' or 'list'
	size: string // The size of the files
	sizeInBytes: number
	progress: number
}

// Initial state for the SettingsState object
const initialState: SettingsState = {
	layoutType: 'grid', // The initial layout type is 'grid'
	size: '', // The initial size is 0
	sizeInBytes: 0,
	progress: 0,
}

// Create a slice of the Redux state called SettingsSlice
export const SettingsSlice = createSlice({
	name: 'settings', // The name of the slice is 'settings'
	initialState, // Use the initial state defined earlier

	reducers: {
		// Define a reducer to set the layout type in the state
		// The layout type has to be either 'grid' or 'list'
		setLayoutType: (state, action: { payload: 'grid' | 'list' }) => {
			state.layoutType = action.payload // Update the layout type with the payload value
		},

		// Define a reducer to set the size (string) in the state
		setSize: (state, action: { payload: string }) => {
			state.size = action.payload
		},

		// Define a reducer to set the size (numeric) in the state
		setSizeInBytes: (state, action: { payload: number }) => {
			state.sizeInBytes = action.payload
		},

		// Define a reducer to set the progress value in the state
		setProgress: (state, action: { payload: number }) => {
			state.progress = action.payload
		},
	},
})

// Export the reducer function
export default SettingsSlice.reducer
// Export the actions
export const { setLayoutType, setSize, setSizeInBytes, setProgress } =
	SettingsSlice.actions

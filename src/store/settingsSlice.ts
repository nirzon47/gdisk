import { createSlice } from '@reduxjs/toolkit'

// The interface for the SettingsState object
interface SettingsState {
	layoutType: 'grid' | 'list' // The layout type can be either 'grid' or 'list'
	sort: 'asc' | 'desc' // The sort order can be either 'asc' or 'desc'
}

// Initial state for the SettingsState object
const initialState: SettingsState = {
	layoutType: 'grid', // The initial layout type is 'grid'
	sort: 'asc', // The initial sort order is 'asc'
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

		// Define a reducer to set the sort order in the state
		// The sort order has to be either 'asc' or 'desc'
		setSort: (state, action: { payload: 'asc' | 'desc' }) => {
			state.sort = action.payload // Update the sort order with the payload value
		},
	},
})

// Export the reducer function
export default SettingsSlice.reducer
// Export the actions
export const { setLayoutType, setSort } = SettingsSlice.actions

import { createSlice } from '@reduxjs/toolkit'

// Initial state for the User object
const initialState = {
	user: null,
}

// Slice of the Redux state called User
export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Reducer to set the user in the state
		setUser: (state, action) => {
			state.user = action.payload
		},
	},
})

// Export the reducer function
export default UserSlice.reducer
// Export the actions
export const { setUser } = UserSlice.actions

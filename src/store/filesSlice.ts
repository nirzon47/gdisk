import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const FilesSlice = createSlice({
	name: 'files',
	initialState,
	reducers: {
		setFiles: (state, action) => {
			state = action.payload
		},
	},
})

export default FilesSlice.reducer
export const { setFiles } = FilesSlice.actions

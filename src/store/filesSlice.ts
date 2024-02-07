import { createSlice } from '@reduxjs/toolkit'

interface FileItem {
	name: string
	path: string
	size: number
	id: string
	timestamp: number
}

const initialState = {
	files: [] as Array<FileItem>,
	filteredFiles: [] as Array<FileItem>,
}

export const FilesSlice = createSlice({
	name: 'files',
	initialState,
	reducers: {
		/**
		 * Sets the files in the state to the payload provided in the action.
		 *
		 * @param {type} state - The current state of the application
		 * @param {type} action - The action containing the payload to set the files
		 * @return {void}
		 */
		setFiles: (state, action) => {
			state.files = [...action.payload]
		},

		/**
		 * Sets the filtered files in the state.
		 *
		 * @param {type} state - The current state
		 * @param {type} action - The action containing the payload
		 * @return {void}
		 */
		setFilteredFiles: (state, action) => {
			state.filteredFiles = [...action.payload]
		},
	},
})

export default FilesSlice.reducer
export const { setFiles, setFilteredFiles } = FilesSlice.actions

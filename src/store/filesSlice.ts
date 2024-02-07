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
		reRender: (state) => {
			state
		},

		setFiles: (state, action) => {
			state.files = action.payload
		},

		setFilteredFiles: (state, action) => {
			state.filteredFiles = action.payload
		},
	},
})

export default FilesSlice.reducer
export const { reRender, setFiles, setFilteredFiles } = FilesSlice.actions

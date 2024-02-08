# Redux Files

This directory contains all of the Redux files for the application.

## `store.ts`

Contains, configures and exports the store for the application.

## `filesSlice.ts`

Contains the files after they have been fetched to handle locally.

States:

`files` - Has type `FileItem`
`filteredFiles` - Has type `FileItem`

`FileItem` type definition

```name: string
path: string
size: number
id: string
timestamp: number
```

Reducers:

`setFiles` - Sets the files after they have been fetched
`setFilteredFiles` - Sets the filtered files

## `settingsSlice.ts`

Contains the basic settings for the application.

States:

`layoutType: 'grid' | 'list'` - The layout type of the files
`size: string` - The size of the files in string
`sizeInBytes: number` - The size of the files in bytes
`progress: number` - The space used by the files in percentage

Reducers:

`setLayoutType` - Sets the layout type
`setSize` - Sets the size
`setSizeInBytes` - Sets the size in bytes
`setProgress` - Sets the progress

## `userSlice.ts`

Contains the user authenticated in the application.

States:

`user` - Has the user object after authentication

Reducers:

`setUser` - Sets the user

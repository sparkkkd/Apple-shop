import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
	panel:
		| 'products'
		| 'categories'
		| 'users'
		| 'addCategory'
		| 'addPhone'
		| 'addAirPods'
		| 'addEarPods'
		| 'addMacBook'
		| 'addCase'
		| 'addAccessory'
		| null
}

const initialState: initialStateType = {
	panel: null,
}

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		togglePanel: (state, action) => {
			state.panel = action.payload
		},
	},
})

export default adminSlice.reducer
export const { togglePanel } = adminSlice.actions

import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
	isVisible: boolean
}

const initialState: initialStateType = {
	isVisible: false,
}

const userMenuSlice = createSlice({
	name: 'usermenu',
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.isVisible = !state.isVisible
		},
	},
})

export default userMenuSlice.reducer

export const { toggleMenu } = userMenuSlice.actions

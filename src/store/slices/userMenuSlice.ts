import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
	userMenuIsVisible: boolean
	menuIsVisible: boolean
}

const initialState: initialStateType = {
	userMenuIsVisible: false,
	menuIsVisible: false,
}

const userMenuSlice = createSlice({
	name: 'usermenu',
	initialState,
	reducers: {
		toggleUserMenu: (state) => {
			state.userMenuIsVisible = !state.userMenuIsVisible
		},
		toggleMenu: (state) => {
			state.menuIsVisible = !state.menuIsVisible
		},
	},
})

export default userMenuSlice.reducer

export const { toggleUserMenu, toggleMenu } = userMenuSlice.actions

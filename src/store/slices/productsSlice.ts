import { createSlice } from '@reduxjs/toolkit'

interface InitialStateType {
	category: string
	price: boolean
	date: boolean
	search: string
}

const initialState: InitialStateType = {
	category: '',
	price: false,
	date: false,
	search: '',
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterCategory: (state, action) => {
			state.category = action.payload
		},
		filterDate: (state, action) => {
			state.date = action.payload
		},
		filterPrice: (state, action) => {
			state.price = action.payload
		},
		filterSearch: (state, action) => {
			state.search = action.payload
		},
	},
})

export default productsSlice.reducer
export const { filterCategory, filterDate, filterPrice, filterSearch } = productsSlice.actions

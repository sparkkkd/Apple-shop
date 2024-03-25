import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import AuthService from '../../services/AuthService'

interface initialStateType {
	userData: IUser
	isLoading: boolean
	isError: boolean
}

const initialState: initialStateType = {
	userData: {
		email: '',
		name: '',
		isActivated: false,
		id: '',
	},
	isLoading: false,
	isError: false,
}

interface LoginData {
	email: string
	password: string
}

export const login = createAsyncThunk(
	'auth/login',
	async (data: LoginData, { rejectWithValue }) => {
		const response = await AuthService.login(data.email, data.password)
		console.log(response)
		return response
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// login
		builder.addCase(login.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(login.fulfilled, (state, action) => {
			// state.userData = action.payload // Здесь ошибка
		})
	},
})

export default authSlice.reducer

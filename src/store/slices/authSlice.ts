import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import AuthService from '../../services/AuthService'

interface initialStateType {
	userData: IUser
	isLoading: boolean
	isError: boolean
	accessToken: string
	refreshToken: string
	isAuth: boolean
}

const initialState: initialStateType = {
	userData: {
		email: '',
		name: '',
		isActivated: false,
		id: '',
	},
	accessToken: '',
	refreshToken: '',
	isLoading: false,
	isError: false,
	isAuth: false,
}

interface LoginData {
	email: string
	password: string
}

interface RegisterData extends LoginData {
	name: string
}

export const fetchLogin = createAsyncThunk(
	'auth/login',
	async (data: LoginData, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(data.email, data.password)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const fetchRegister = createAsyncThunk(
	'auth/register',
	async (data: RegisterData, { rejectWithValue }) => {
		try {
			const response = await AuthService.register(data.email, data.password, data.name)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Login
		builder.addCase(fetchLogin.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			console.log(action.payload)
			if (action.payload?.user) state.userData = action.payload?.user
			if (action.payload?.accessToken) state.accessToken = action.payload?.accessToken
			if (action.payload?.refreshToken) state.refreshToken = action.payload.refreshToken
			state.isAuth = true

			localStorage.setItem('token', action.payload?.accessToken as string)
		})
		builder.addCase(fetchLogin.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			console.log(action.error.message)
		})
		// Register
		builder.addCase(fetchRegister.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchRegister.fulfilled, (state, action) => {
			console.log(action.payload)
			if (action.payload?.user) state.userData = action.payload?.user
			if (action.payload?.accessToken) state.accessToken = action.payload?.accessToken
			if (action.payload?.refreshToken) state.refreshToken = action.payload.refreshToken
			state.isAuth = true
			localStorage.setItem('token', action.payload?.accessToken as string)
		})
		builder.addCase(fetchRegister.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			console.log(action.error.message)
		})
	},
})

export default authSlice.reducer

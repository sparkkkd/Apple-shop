import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import userMenuSlice from './slices/userMenuSlice'
import adminSlice from './slices/adminSlice'
import { productsApi } from './slices/productsApi'
import productsSlice from './slices/productsSlice'

const rootReducer = combineReducers({
	authSlice,
	userMenuSlice,
	adminSlice,
	productsSlice,
	[productsApi.reducerPath]: productsApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware): any => {
			return getDefaultMiddleware().concat(productsApi.middleware)
		},
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

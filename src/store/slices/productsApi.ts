import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory } from '../../models/ICategory'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/api' }),
	endpoints: (build) => ({
		fetchAllProducts: build.query({
			query: (page: number) => ({
				url: '/products',
				params: {
					page,
				},
			}),
		}),
		fetchAllCategories: build.query<ICategory[], null>({
			query: () => ({
				url: '/category',
			}),
		}),
	}),
})

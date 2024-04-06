import { useEffect, useState } from 'react'
import styles from './Filter.module.sass'

import { FaAngleDown } from 'react-icons/fa6'
import { productsApi } from '../../../store/slices/productsApi'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
	filterCategory,
	filterDate,
	filterPrice,
	filterSearch,
} from '../../../store/slices/productsSlice'

import useDebounce from '../../../hooks/useDebounce'

interface FilterProps {}

export default function Filter({}: FilterProps) {
	const [isCategoryActive, setIsCategoryActive] = useState<boolean>(false)
	const [categoryName, setCategoryName] = useState<string>('')
	const [search, setSearch] = useState<string>('')

	const debouncedSearch = useDebounce(search, 500)

	const { price, date, search: ss } = useAppSelector((state) => state.productsSlice)
	const dispatch = useAppDispatch()

	const { data: categories } = productsApi.useFetchAllCategoriesQuery(null)

	useEffect(() => {
		if (debouncedSearch) {
			handleSearch()
			console.log(ss)
		}
	}, [debouncedSearch])

	function handleSearch() {
		dispatch(filterSearch(search))
	}

	function isCategory(id: string, name: string) {
		setIsCategoryActive((prev) => !prev)
		setCategoryName(name)
		dispatch(filterCategory(id))
	}

	return (
		<div className={styles.filter}>
			{/* Price */}
			<div
				className={`${price && styles.price_active} ${styles.price}`}
				onClick={() => dispatch(filterPrice(!price))}
			>
				Цена
				<FaAngleDown />
			</div>

			{/* Date */}
			<div className={styles.date} onClick={() => dispatch(filterDate(!date))}>
				{date ? 'Сначала новые' : 'Сначала старые'}
			</div>

			{/* Category */}
			<div
				className={`${isCategoryActive && styles.category_active} ${styles.category}`}
				onClick={() => setIsCategoryActive((prev) => !prev)}
			>
				{categoryName ? categoryName : 'Категория'}
				<FaAngleDown />

				<ul className={styles.categoryList}>
					{categories?.map(({ _id, name }) => (
						<li
							key={_id}
							className={styles.categoryItem}
							onClick={(e) => {
								e.stopPropagation()
								isCategory(_id, name)
							}}
						>
							{name}
						</li>
					))}
					<li
						className={styles.categoryItem}
						onClick={(e) => {
							e.stopPropagation()
							setIsCategoryActive((prev) => !prev)
							setCategoryName('Все')
							dispatch(filterCategory(false))
						}}
					>
						Все
					</li>
				</ul>
			</div>

			{/* Search */}
			<input
				type='text'
				className={styles.search}
				placeholder='Поиск по названию...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	)
}

import styles from './AdminProductsList.module.sass'

import { useState } from 'react'

import { ICategory } from '../../../models/ICategory'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import Button from '../../UI/Button/Button'

import BackButton from '../../UI/BackButton/BackButton'
import Filter from '../../UI/Filter/Filter'
import PaginationComponent from '../../UI/PaginationComponent/PaginationComponent'
import SpinnerLoading from '../../UI/SpinnerLoading/SpinnerLoading'

import { useAppDispatch } from '../../../hooks/redux'
import { productsApi } from '../../../store/slices/productsApi'
import { togglePanel } from '../../../store/slices/adminSlice'

interface AdminProductsListProps {}

export default function AdminProductsList({}: AdminProductsListProps) {
	const [page, setPage] = useState<number>(1)
	const { data, isLoading } = productsApi.useFetchAllProductsQuery(page)

	const dispatch = useAppDispatch()

	function onChange(page: number) {
		setPage(page)
		window.scrollTo(0, 200)
	}

	return (
		<section className={styles.products}>
			<SectionTitle>Список товаров</SectionTitle>
			<BackButton onCLick={() => dispatch(togglePanel(null))}>Назад</BackButton>

			<Filter />

			<div className={styles.wrapper}>
				{!isLoading ? (
					data.products.map(({ _id, name, preview, color, price, category }: ProductProps) => (
						<Product
							key={_id}
							preview={preview}
							name={name}
							price={price}
							color={color}
							category={category}
						/>
					))
				) : (
					<SpinnerLoading />
				)}
			</div>
			{data && (
				<PaginationComponent
					currentPage={page}
					total={data.count}
					onChange={onChange}
					isLoading={isLoading}
				/>
			)}
		</section>
	)
}

interface ProductProps {
	_id?: string
	name: string
	preview: string
	color: string
	price: string
	category: ICategory
}

function Product({ name, preview, color, price, category }: ProductProps) {
	return (
		<div className={styles.productWrapper}>
			<div className={styles.preview}>
				<img src={`http://localhost:4444/uploads/${preview}`} alt='img' />
			</div>
			<div className={styles.infoWrapper}>
				<div className={styles.name}>{name}</div>
				<span className={styles.infoItem}>Цена: {price}</span>
				<span className={styles.infoItem}>Цвет: {color}</span>
				<span className={styles.infoItem}>Категория: {category.name}</span>
			</div>
			<div className={styles.options}>
				<Button onClick={() => console.log(`Удалить`)}>Удалить</Button>
				<Button onClick={() => console.log(`Изменить`)}>Изменить</Button>
			</div>
		</div>
	)
}

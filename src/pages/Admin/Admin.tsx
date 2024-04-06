import styles from './Admin.module.sass'
import Transition from '../../Transition/Transition'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { togglePanel } from '../../store/slices/adminSlice'
import AdminProductsList from '../../components/admin/AdminProductsList/AdminProductsList'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'

export default function Admin() {
	const { panel } = useAppSelector((state) => state.adminSlice)
	const dispatch = useAppDispatch()

	return (
		<Transition>
			<section className={styles.admin}>
				<SectionTitle>Админ панель</SectionTitle>

				{!panel && (
					<div className={styles.optionsWrapper}>
						<button className={styles.button} onClick={() => dispatch(togglePanel('products'))}>
							Список товаров
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('categories'))}>
							Список категорий
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('users'))}>
							Список пользователей
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addCategory'))}>
							Добавить категорию
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addPhone'))}>
							Добавить телефон
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addAirPods'))}>
							Добавить AirPods
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addEarPods'))}>
							Добавить EarPods
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addMacBook'))}>
							Добавить MacBook
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addCase'))}>
							Добавить чехлы
						</button>
						<button className={styles.button} onClick={() => dispatch(togglePanel('addAccessory'))}>
							Добавить аксессуары
						</button>
					</div>
				)}

				{panel === 'products' && <AdminProductsList />}
			</section>
		</Transition>
	)
}

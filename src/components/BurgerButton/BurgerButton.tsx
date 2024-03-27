import styles from './BurgerButton.module.sass'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleMenu } from '../../store/slices/userMenuSlice'

export default function BurgerButton() {
	const { menuIsVisible } = useAppSelector((state) => state.userMenuSlice)
	const dispatch = useAppDispatch()

	return (
		<div
			className={`${styles.burgerbutton} ${menuIsVisible && styles.burgerbutton_Active}`}
			onClick={() => dispatch(toggleMenu())}
		>
			<div></div>
		</div>
	)
}

import Transition from '../../Transition/Transition'
import styles from './Cart.module.sass'

interface CartProps {}

export default function Cart({}: CartProps) {
	return (
		<Transition>
			<section className={styles.cart}>
				<h1>Cart component</h1>
			</section>
		</Transition>
	)
}

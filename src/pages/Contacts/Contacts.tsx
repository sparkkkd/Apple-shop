import Transition from '../../Transition/Transition'
import styles from './Contacts.module.sass'

interface ContactsProps {}

export default function Contacts({}: ContactsProps) {
	return (
		<Transition>
			<section className={styles.contacts}>
				<h1>Contacts component</h1>
			</section>
		</Transition>
	)
}

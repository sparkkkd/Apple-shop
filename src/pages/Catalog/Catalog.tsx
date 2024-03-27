import Transition from '../../Transition/Transition'
import styles from './Catalog.module.sass'

interface CatalogProps {}

export default function Catalog({}: CatalogProps) {
	return (
		<Transition>
			<section className={styles.catalog}>
				<h1>Catalog</h1>
			</section>
		</Transition>
	)
}

import styles from './Catalog.module.sass'

interface CatalogProps {}

export default function Catalog({}: CatalogProps) {
	return (
		<section className={styles.catalog}>
			<h1>Catalog</h1>
		</section>
	)
}

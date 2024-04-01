import styles from './Catalog.module.sass'

import Transition from '../../Transition/Transition'

import CategoryBlock from '../../components/Catalog/CategoryBlock/CategoryBlock'
import { CATEGORIES } from '../../components/Catalog/CategoryBlock/constant'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'

export default function Catalog() {
	return (
		<Transition>
			<section className={styles.catalog}>
				<SectionTitle>Каталог</SectionTitle>
				<div className={styles.wrapper}>
					{CATEGORIES.map(({ title, img, id }) => (
						<CategoryBlock key={id} title={title} img={img} />
					))}
				</div>
			</section>
		</Transition>
	)
}

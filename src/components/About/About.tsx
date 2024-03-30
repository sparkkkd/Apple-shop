import styles from './About.module.sass'

import SectionTitle from '../UI/SectionTitle/SectionTitle'

import { ABOUT_ITEMS } from './constant'
import FeaturesEnumeration from '../UI/FeaturesEnumeration/FeaturesEnumeration'

export default function About() {
	return (
		<div className={`${styles.about} container`}>
			<SectionTitle>О нас</SectionTitle>
			<div className={styles.wrapper}>
				{ABOUT_ITEMS.map(({ id, title, text }) => (
					<FeaturesEnumeration key={id} title={title} text={text} />
				))}
			</div>
		</div>
	)
}

import styles from './About.module.sass'

import SectionTitle from '../UI/SectionTitle/SectionTitle'

import { ABOUT_ITEMS } from './constant'

export default function About() {
	return (
		<div className={styles.about}>
			<SectionTitle>About us</SectionTitle>
			<div className={styles.wrapper}>
				{ABOUT_ITEMS.map(({ id, title, text }) => (
					<div key={id} className={styles.item}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.text}>{text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

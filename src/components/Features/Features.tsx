import styles from './Features.module.sass'

import { Link } from 'react-router-dom'

import { FEATURES_ITEMS } from './constant'

import ContainerImage from '../../images/phone-main.png'

const windowWidth = window.innerWidth

export default function Features() {
	return (
		<div
			className={styles.features}
			style={{
				backgroundImage: `${windowWidth > 405 && `url(${ContainerImage})`}`,
			}}
		>
			<h2>Why choose us?</h2>
			<div className={styles.wrapper}>
				{FEATURES_ITEMS.map(({ id, title, text }) => (
					<div key={id} className={styles.feature}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.text}>{text}</p>
					</div>
				))}
				<Link className={styles.button} to='/catalog'>
					Go to the catalog
				</Link>
			</div>
		</div>
	)
}

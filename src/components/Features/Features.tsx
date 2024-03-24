import { Link } from 'react-router-dom'
import styles from './Features.module.sass'
import { FEATURES_ITEMS } from './constant'

import ContainerImage from '../../images/phone-main.png'

interface FeaturesProps {}

export default function Features({}: FeaturesProps) {
	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${ContainerImage})` }}
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

import styles from './Features.module.sass'

import { Link } from 'react-router-dom'

import { FEATURES_ITEMS } from './constant'

import { useWindowSize } from '../../../hooks/useWindowsSize'
import ContainerImage from '../../../images/phone-main.png'

export default function Features() {
	const [width, _] = useWindowSize()
	return (
		<div
			className={styles.features}
			style={{
				backgroundImage: `${width > 405 && `url(${ContainerImage})`}`,
			}}
		>
			<h2>Почему мы?</h2>
			<div className={styles.wrapper}>
				{FEATURES_ITEMS.map(({ id, title, text }) => (
					<div key={id} className={styles.feature}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.text}>{text}</p>
					</div>
				))}
				<Link className={styles.button} to='/catalog'>
					Перейти в каталог
				</Link>
			</div>
		</div>
	)
}

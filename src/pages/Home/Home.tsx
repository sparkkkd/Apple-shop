import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import ScrollCharacter from '../../components/ScrollCharacter/ScrollCharacter'

import styles from './Home.module.sass'

import FaceImage from '../../images/face.svg?react'

interface HomeProps {}

export default function Home({}: HomeProps) {
	return (
		<div className={styles.home}>
			<About />
			<FaceImage className={styles.face} />
			<ScrollCharacter value='Still in doubt?' />
			<Features />
		</div>
	)
}

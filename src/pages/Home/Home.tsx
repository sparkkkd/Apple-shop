import styles from './Home.module.sass'

import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import ScrollCharacter from '../../components/ScrollCharacter/ScrollCharacter'

import FaceImage from '../../images/face.svg?react'
import Transition from '../../Transition/Transition'

export default function Home() {
	return (
		<Transition>
			<section className={styles.home}>
				<About />
				<FaceImage className={styles.face} />
				<ScrollCharacter value='Still in doubt?' />
				<Features />
			</section>
		</Transition>
	)
}

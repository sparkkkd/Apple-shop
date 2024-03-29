import styles from './Home.module.sass'

import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import ScrollCharacter from '../../components/ScrollCharacter/ScrollCharacter'

import FaceImage from '../../images/face.svg?react'
import Transition from '../../Transition/Transition'
import IphoneComponent from '../../components/IphoneComponent/IphoneComponent'
import Slogan from '../../components/Slogan/Slogan'
import ParallaxIntroImages from '../../components/ParallaxIntroImages/ParallaxIntroImages'

export default function Home() {
	return (
		<Transition>
			<section className={styles.home}>
				<About />
				<IphoneComponent />
				<Slogan />
				<ParallaxIntroImages />
				<FaceImage className={styles.face} />
				<ScrollCharacter value='Все еще сомневаетесь?' />
				<Features />
			</section>
		</Transition>
	)
}

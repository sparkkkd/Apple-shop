import styles from './Home.module.sass'

import { lazy, Suspense } from 'react'

import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import ScrollCharacter from '../../components/ScrollCharacter/ScrollCharacter'

import FaceImage from '../../images/face.svg?react'
import Transition from '../../Transition/Transition'
const IphoneComponent = lazy(() => import('../../components/IphoneComponent/IphoneComponent'))
import Slogan from '../../components/Slogan/Slogan'
import ParallaxIntroImages from '../../components/ParallaxIntroImages/ParallaxIntroImages'
import Intro from '../../components/Intro/Intro'
import SpinnerLoading from '../../components/SpinnerLoading/SpinnerLoading'

export default function Home() {
	return (
		<Transition>
			<section className={styles.home}>
				<Intro />
				<About />
				<Suspense fallback={<SpinnerLoading />}>
					<IphoneComponent />
				</Suspense>
				<Slogan />
				<ParallaxIntroImages />
				<FaceImage className={styles.face} />
				<ScrollCharacter value='Все еще сомневаетесь?' />
				<Features />
			</section>
		</Transition>
	)
}

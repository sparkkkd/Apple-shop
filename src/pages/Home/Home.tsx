import styles from './Home.module.sass'

import { lazy, Suspense, useState } from 'react'

import About from '../../components/Home/About/About'
import Features from '../../components/Home/Features/Features'
import ScrollCharacter from '../../components/ScrollCharacter/ScrollCharacter'

import Transition from '../../Transition/Transition'
const IphoneComponent = lazy(() => import('../../components/Home/IphoneComponent/IphoneComponent'))
import Slogan from '../../components/Home/Slogan/Slogan'
import SloganDescribe from '../../components/Home/SloganDescribe/SloganDescribe'
import Intro from '../../components/Home/Intro/Intro'
import SpinnerLoading from '../../components/UI/SpinnerLoading/SpinnerLoading'
import ServiceCenter from '../../components/Home/ServiceCenter/ServiceCenter'

export default function Home() {
	const [isPhoneSectionVisible, setIsPhoneSectionVisible] = useState<boolean>(false)

	setTimeout(() => {
		setIsPhoneSectionVisible(true)
	}, 4300)

	return (
		<Transition>
			<section className={styles.home}>
				<Intro />
				<About />

				{isPhoneSectionVisible && (
					<Suspense fallback={<SpinnerLoading />}>
						<IphoneComponent />
					</Suspense>
				)}

				<Slogan />
				<SloganDescribe />
				<ScrollCharacter value='Все еще сомневаетесь?' />
				<Features />
				<ServiceCenter />
			</section>
		</Transition>
	)
}

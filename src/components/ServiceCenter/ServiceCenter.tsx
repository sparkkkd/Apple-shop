import styles from './ServiceCenter.module.sass'
import './swiper-controls.sass'

import { motion } from 'framer-motion'

import SectionTitle from '../UI/SectionTitle/SectionTitle'
import {
	FeaturesEnumeration,
	MFeaturesEnumeration,
} from '../UI/FeaturesEnumeration/FeaturesEnumeration'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { fromBottomVariants } from '../../animations/animations'
import { SLIDER_ITEMS, FEATURES_TITLE, SERVICE_ITEMS } from './constant'

export default function ServiceCenter() {
	return (
		<motion.section
			initial='initial'
			whileInView='animate'
			viewport={{ amount: 0.2, once: true }}
			className={`${styles.service} test`}
		>
			<SectionTitle>Сервисный центр</SectionTitle>

			<div className={styles.slider}>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					modules={[Autoplay]}
					autoplay={{
						delay: 500,
						disableOnInteraction: false,
					}}
					noSwiping={true}
					allowTouchMove={false}
					speed={3000}
				>
					{SLIDER_ITEMS.map(({ id, src, alt }) => (
						<SwiperSlide key={id}>
							<img className={styles.img} src={src} alt={alt} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<motion.div
				className={styles.features}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
			>
				<h3 className={styles.featuresTitle}>
					<FEATURES_TITLE />
				</h3>
				{SERVICE_ITEMS.map(({ id, title, text }, i) => (
					<MFeaturesEnumeration
						key={id}
						title={title}
						text={text}
						variants={fromBottomVariants}
						custom={i + 3}
					/>
				))}
			</motion.div>
		</motion.section>
	)
}

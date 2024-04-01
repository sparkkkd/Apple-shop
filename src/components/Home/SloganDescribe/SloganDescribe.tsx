import styles from './SloganDescribe.module.sass'

import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'

import { FINAL_TEXT, PARALLAX_INTRO_IMAGES } from './constant'
import { useRef } from 'react'

export default function SloganDescribe() {
	const element = useRef<any>()
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start end', 'end start'],
	})

	const scrollTitle = useTransform(scrollYProgress, [0, 1], [0, -500])
	const scrollImg = useTransform(scrollYProgress, [0, 1], [0, -200])
	const scrollText = useTransform(scrollYProgress, [0, 1], [0, -350])
	const scrollFinal = useTransform(scrollYProgress, [0, 1], [0, -250])

	return (
		<section ref={element} className={styles.sloganDescribe}>
			<AnimatePresence>
				{PARALLAX_INTRO_IMAGES.map(({ id, img, title, text }) => (
					<div className={styles.card} key={id}>
						<div className={styles.imgWrapper}>
							<div className={styles.title}>
								<motion.h3 style={{ y: scrollTitle }}>{title}</motion.h3>
							</div>
							<motion.img style={{ y: scrollImg }} src={img} alt='img' />
						</div>
						<motion.p style={{ y: scrollText }} className={styles.text}>
							{text}
						</motion.p>
					</div>
				))}
				<motion.p style={{ y: scrollFinal }} className={styles.final}>
					{FINAL_TEXT}
				</motion.p>
			</AnimatePresence>
		</section>
	)
}

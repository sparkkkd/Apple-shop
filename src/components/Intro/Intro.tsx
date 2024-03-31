import { useRef } from 'react'
import styles from './Intro.module.sass'

import { Variants, motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'

import AppleLogo from '../../images/apple-logo.svg?react'

const titleVariants: Variants = {
	initial: {
		y: -50,
		opacity: 0,
	},

	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			ease: [0.79, 0.14, 0.15, 0.86],
			duration: 1,
		},
	},
}

const ballVariants: Variants = {
	initial: {
		scale: 10,
		opacity: 0,
	},

	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			delay: 2,
			ease: [0.22, 1, 0.36, 1],
			duration: 1,
		},
	},
}

const sloganContainerVariants: Variants = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 2.2,
			staggerChildren: 0.2,
		},
	},
}

const sloganVariants: Variants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: [0.79, 0.14, 0.15, 0.86],
			duration: 1,
		},
	},
}

export default function Intro() {
	const sloganContainer = useRef<any>()
	const { scrollYProgress } = useScroll({
		target: sloganContainer,
		offset: ['start end', 'end start'],
	})

	const sloganScrollProperty = useTransform(scrollYProgress, [0, 1], [0, 200])

	return (
		<section className={styles.intro}>
			<AnimatePresence>
				<div key='logokey' className={styles.logo}>
					<motion.div className={styles.title}>
						<motion.h1 variants={titleVariants} initial='initial' animate='animate'>
							Community
						</motion.h1>
					</motion.div>
					<motion.div
						className={styles.appleLogo}
						variants={ballVariants}
						initial='initial'
						animate='animate'
					>
						<AppleLogo />
					</motion.div>
				</div>
				<motion.div
					key='sloganKey'
					variants={sloganContainerVariants}
					initial='initial'
					animate='animate'
					className={styles.slogan}
					ref={sloganContainer}
					style={{ y: sloganScrollProperty }}
				>
					<motion.h2 key='slogan1' variants={sloganVariants} className={styles.text}>
						Мы больше, чем просто магазин
					</motion.h2>
					<motion.h2 key='slogan2' variants={sloganVariants} className={styles.text}>
						Ты больше, чем просто клиент
					</motion.h2>
				</motion.div>
			</AnimatePresence>
		</section>
	)
}

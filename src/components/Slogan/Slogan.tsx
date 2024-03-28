import styles from './Slogan.module.sass'

import { useRef } from 'react'

import { useTransform, useScroll, motion } from 'framer-motion'

export default function Slogan() {
	const element = useRef<any>()
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start end', 'end start'],
	})

	const topText = useTransform(scrollYProgress, [0, 2], [-400, 400])
	const bottomText = useTransform(scrollYProgress, [0, 2], [400, -400])

	return (
		<motion.div className={styles.text}>
			<motion.span style={{ x: topText }}>
				We are more than just a store We are more than just a store We are more than just a store
			</motion.span>
			<motion.span style={{ x: bottomText }}>
				You're more than just a client You're more than just a client You're more than just a client
			</motion.span>
		</motion.div>
	)
}

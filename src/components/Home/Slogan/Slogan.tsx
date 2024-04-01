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
				Мы больше, чем просто магазин Мы больше, чем просто магазин Мы больше, чем просто магазин
			</motion.span>
			<motion.span style={{ x: bottomText }}>
				Ты больше, чем просто клиент Ты больше, чем просто клиент Ты больше, чем просто клиент
			</motion.span>
		</motion.div>
	)
}

import styles from './ScrollCharacter.module.sass'

import { useRef } from 'react'
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion'

interface ScrollCharacterProps {
	value: string
}

export default function ScrollCharacter({ value }: ScrollCharacterProps) {
	const element = useRef(null)

	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start end', 'start start'],
	})

	const words = value.split(' ')

	return (
		<motion.div className={styles.div} ref={element}>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length

				return (
					<Word key={i} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				)
			})}
		</motion.div>
	)
}

interface WordProps {
	children: string
	range: Array<number>
	progress: MotionValue<number>
}

const Word = ({ children, range, progress }: WordProps) => {
	const characters = children.split('')
	const amount = range[1] - range[0]
	const step = amount / children.length

	return (
		<span className={styles.word}>
			{characters.map((character, i) => {
				const start = range[0] + step * i
				const end = range[0] + step * (i + 1)
				return (
					<Character key={i} range={[start, end]} progress={progress}>
						{character}
					</Character>
				)
			})}
		</span>
	)
}

interface CharacterProps {
	children: string
	range: Array<number>
	progress: MotionValue<number>
}

const Character = ({ children, range, progress }: CharacterProps) => {
	const opacity = useTransform(progress, range, [0, 1])
	return (
		<span>
			<span className={styles.shadow}>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	)
}

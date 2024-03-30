import { forwardRef } from 'react'
import styles from './FeaturesEnumeration.module.sass'

import { motion } from 'framer-motion'

interface FeaturesEnumerationProps {
	title: string
	text: string
}

export const FeaturesEnumeration = forwardRef(
	({ title, text }: FeaturesEnumerationProps, ref: any) => {
		return (
			<motion.div className={styles.item} ref={ref}>
				<motion.h3 className={styles.title}>{title}</motion.h3>
				<motion.p className={styles.text}>{text}</motion.p>
			</motion.div>
		)
	}
)

export const MFeaturesEnumeration = motion(FeaturesEnumeration)

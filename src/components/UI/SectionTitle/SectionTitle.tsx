import styles from './SectionTitle.module.sass'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { fromTopVariants } from '../../../animations/animations'

interface SectionTitleProps {
	children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
	return (
		<motion.h1 variants={fromTopVariants} className={styles.title}>
			{children}
		</motion.h1>
	)
}

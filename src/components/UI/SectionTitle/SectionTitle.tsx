import styles from './SectionTitle.module.sass'

import { ReactNode } from 'react'

interface SectionTitleProps {
	children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
	return <h1 className={styles.title}>{children}</h1>
}

import { ReactNode } from 'react'
import styles from './BackButton.module.sass'

import { FaArrowLeft } from 'react-icons/fa6'

interface BackButtonProps {
	children: ReactNode
	onCLick: () => void
}

export default function BackButton({ children, onCLick }: BackButtonProps) {
	return (
		<button className={styles.button} onClick={onCLick}>
			<FaArrowLeft />
			{children}
		</button>
	)
}

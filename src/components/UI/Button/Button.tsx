import { ReactNode } from 'react'
import styles from './Button.module.sass'

interface ButtonProps {
	children: ReactNode
	onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	)
}

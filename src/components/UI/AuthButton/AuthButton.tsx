import { ReactNode } from 'react'
import styles from './authbutton.module.sass'

interface AuthButtonProps {
	children: ReactNode
}

export default function AuthButton({ children }: AuthButtonProps) {
	return (
		<button className={styles.button} type='submit'>
			{children}
		</button>
	)
}

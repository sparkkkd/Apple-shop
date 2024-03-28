import styles from './authbutton.module.sass'

import { ReactNode } from 'react'

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

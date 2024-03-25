import styles from './formbutton.module.sass'

interface AuthButtonProps {
	name: string
}

export default function AuthButton({ name }: AuthButtonProps) {
	return (
		<button className={styles.button} type='submit'>
			{name}
		</button>
	)
}

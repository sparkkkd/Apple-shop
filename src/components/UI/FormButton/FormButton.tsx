import styles from './formbutton.module.sass'

interface FormButtonProps {
	name: string
}

export default function FormButton({ name }: FormButtonProps) {
	return (
		<button className={styles.button} type='submit'>
			{name}
		</button>
	)
}

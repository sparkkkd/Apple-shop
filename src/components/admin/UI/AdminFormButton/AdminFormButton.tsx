import styles from './AdminFormButton.module.sass'

interface AdminFormButtonProps {}

export default function AdminFormButton({}: AdminFormButtonProps) {
	return <button className={styles.button}>Добавить</button>
}

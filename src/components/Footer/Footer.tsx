import styles from './Footer.module.sass'

interface FooterProps {}

export default function Footer({}: FooterProps) {
	return (
		<footer className={styles.footer}>
			<h1>Footer component</h1>
		</footer>
	)
}

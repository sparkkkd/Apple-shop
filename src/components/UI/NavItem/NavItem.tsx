import styles from './NavItem.module.sass'

import { Link } from 'react-router-dom'

interface NavItemProps {
	text: string
	href: string
}

export default function NavItem({ text, href }: NavItemProps) {
	return (
		<Link style={{ textDecoration: 'none' }} to={href} className={styles.navlink}>
			{text}
		</Link>
	)
}

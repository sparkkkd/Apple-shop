import styles from './Header.module.sass'

import NavItem from '../UI/NavItem/NavItem'

import { NAV_AUTH_ITEMS, NAV_ITEMS } from './constants'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navlist}>
					{NAV_ITEMS.map(({ id, text, href }) => (
						<li className={styles.navitem} key={id}>
							<NavItem text={text} href={href} />
						</li>
					))}
				</ul>
			</nav>

			<nav className={styles.navauth}>
				<ul className={styles.navlist}>
					{NAV_AUTH_ITEMS.map(({ id, text, href }) => (
						<li className={styles.navitem} key={id}>
							<NavItem text={text} href={href} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

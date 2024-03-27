import styles from './Header.module.sass'

import NavItem from '../UI/NavItem/NavItem'

import { NAV_AUTH_ITEMS, NAV_ITEMS } from './constants'
import { useAppSelector } from '../../hooks/redux'
import UserHeader from '../UserHeader/UserHeader'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
	const { name } = useAppSelector((state) => state.authSlice.userData)

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

			{name ? (
				<UserHeader name={name} />
			) : (
				<nav className={styles.navauth}>
					<ul className={styles.navlist}>
						{NAV_AUTH_ITEMS.map(({ id, text, href }) => (
							<li className={styles.navitem} key={id}>
								<NavItem text={text} href={href} />
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

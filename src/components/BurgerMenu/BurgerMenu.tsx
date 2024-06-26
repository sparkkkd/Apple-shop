import styles from './BurgerMenu.module.sass'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence, easeInOut, Variants } from 'framer-motion'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchLogout } from '../../store/slices/authSlice'
import { toggleMenu } from '../../store/slices/userMenuSlice'

import { NAV_AUTH_ITEMS, NAV_ITEMS } from '../Header/constants'

export default function BurgerMenu() {
	const { menuIsVisible } = useAppSelector((state) => state.userMenuSlice)
	const { name } = useAppSelector((state) => state.authSlice.userData)
	const dispatch = useAppDispatch()

	const menuVariants: Variants = {
		initial: {
			scaleY: 0,
		},

		animate: {
			scaleY: 1,
			transformOrigin: 'top',
			transition: {
				duration: 0.5,
				ease: easeInOut,
			},
		},

		exit: {
			scaleY: 0,
			transformOrigin: 'bottom',
			transition: {
				delay: 0.5,
			},
		},
	}

	const linkVariants: Variants = {
		initial: {
			y: '30vh',
			opacity: 0,
			transition: {
				duration: 1,
			},
		},

		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	}

	const containerVariants: Variants = {
		initial: {
			transition: {
				staggerChildren: 0.05,
			},
		},

		open: {
			transition: {
				staggerChildren: 0.05,
			},
		},

		exit: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.05,
			},
		},
	}

	useEffect(() => {
		function disableScroll() {
			if (menuIsVisible) document.body.style.overflow = 'hidden'
		}

		function enableScroll() {
			document.body.style.overflow = 'auto'
		}

		disableScroll()

		return enableScroll
	}, [menuIsVisible])

	return (
		<>
			<AnimatePresence>
				{menuIsVisible && (
					<motion.div
						className={styles.burgermenu}
						variants={menuVariants}
						animate='animate'
						exit='exit'
						initial='initial'
					>
						<nav>
							<motion.ul
								variants={containerVariants}
								initial='initial'
								animate='open'
								exit='initial'
								className={styles.burgernavlist}
							>
								{NAV_ITEMS.map(({ id, text, href }) => (
									<div key={id} className={styles.burgernavitem}>
										<motion.li variants={linkVariants} onClick={() => dispatch(toggleMenu())}>
											<Link style={{ textDecoration: 'none' }} to={href}>
												{text}
											</Link>
										</motion.li>
									</div>
								))}
								{name && (
									<div className={styles.burgernavitem}>
										<motion.li
											variants={linkVariants}
											onClick={() => {
												dispatch(toggleMenu())
												dispatch(fetchLogout())
											}}
										>
											<div className={styles.authItem}>Log out</div>
										</motion.li>
									</div>
								)}
							</motion.ul>
						</nav>
						<nav>
							<motion.ul
								variants={containerVariants}
								initial='initial'
								animate='open'
								exit='initial'
								className={styles.burgernavlist}
							>
								{!name &&
									NAV_AUTH_ITEMS.map(({ id, text, href }) => (
										<div key={id} className={styles.burgernavitem}>
											<motion.li variants={linkVariants} onClick={() => dispatch(toggleMenu())}>
												<Link style={{ textDecoration: 'none' }} to={href}>
													{text}
												</Link>
											</motion.li>
										</div>
									))}
							</motion.ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

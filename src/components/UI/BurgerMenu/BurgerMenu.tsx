import { Link } from 'react-router-dom'
import styles from './Burger.module.sass'
import BurgerButton from './BurgerButton'
import { NAV_AUTH_ITEMS, NAV_ITEMS } from '../../Header/constants'
import { motion, AnimatePresence, easeInOut, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchLogout } from '../../../store/slices/authSlice'

interface BurgerMenuProps {}

export default function BurgerMenu({}: BurgerMenuProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false)
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
			if (isVisible) document.body.style.overflow = 'hidden'
		}

		function enableScroll() {
			document.body.style.overflow = 'auto'
		}

		disableScroll()

		return enableScroll
	}, [isVisible])

	return (
		<>
			<BurgerButton isVisible={isVisible} setIsVisible={setIsVisible} />
			<AnimatePresence>
				{isVisible && (
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
										<motion.li variants={linkVariants} onClick={() => setIsVisible(false)}>
											<Link style={{ textDecoration: 'none' }} to={href}>
												{text}
											</Link>
										</motion.li>
									</div>
								))}
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
								{name ? (
									<div className={styles.burgernavitem}>
										<motion.li variants={linkVariants} onClick={() => setIsVisible(false)}>
											<div
												className={styles.authItem}
												onClick={() => {
													dispatch(fetchLogout())
												}}
											>
												Log out
											</div>
										</motion.li>
									</div>
								) : (
									NAV_AUTH_ITEMS.map(({ id, text, href }) => (
										<div key={id} className={styles.burgernavitem}>
											<motion.li variants={linkVariants} onClick={() => setIsVisible(false)}>
												<Link style={{ textDecoration: 'none' }} to={href}>
													{text}
												</Link>
											</motion.li>
										</div>
									))
								)}
							</motion.ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

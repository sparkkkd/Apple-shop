import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchLogout } from '../../store/slices/authSlice'
import { toggleMenu } from '../../store/slices/userMenuSlice'
import styles from './UserMenu.module.sass'

import { AnimatePresence, Variants, easeInOut, motion } from 'framer-motion'

interface UserMenuProps {}

const menuVariants: Variants = {
	initial: {
		scaleY: 0,
	},

	animate: {
		scaleY: 1,
		transformOrigin: 'top',
		transition: {
			ease: easeInOut,
		},
	},

	exit: {
		scaleY: 0,
		transformOrigin: 'bottom',
		transition: {
			ease: easeInOut,
			delay: 0.2,
		},
	},
}

const itemVariants: Variants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},

	open: {
		opacity: 1,
		transition: {
			duration: 0.5,
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

export default function UserMenu({}: UserMenuProps) {
	const { isVisible } = useAppSelector((state) => state.userMenuSlice)
	const dispatch = useAppDispatch()
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={styles.container}
					variants={menuVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					layout
				>
					<motion.ul
						variants={containerVariants}
						initial='initial'
						animate='open'
						exit='initial'
						className={styles.list}
					>
						<motion.li
							variants={itemVariants}
							className={styles.item}
							onClick={() => {
								dispatch(fetchLogout())
								dispatch(toggleMenu())
							}}
						>
							Log out
						</motion.li>
						<motion.li variants={itemVariants} className={styles.item}>
							Profile
						</motion.li>
					</motion.ul>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

import styles from './UserHeader.module.sass'

import UserMenu from '../UserMenu/UserMenu'

import { FaAngleDown } from 'react-icons/fa6'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleUserMenu } from '../../store/slices/userMenuSlice'

interface UserHeaderProps {
	name: string
}

export default function UserHeader({ name }: UserHeaderProps) {
	const { userMenuIsVisible } = useAppSelector((state) => state.userMenuSlice)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.container}>
			<div className={styles.userContainer}>
				<FaAngleDown
					className={styles.arrow}
					style={{ transform: `${userMenuIsVisible ? 'rotateX(180deg)' : 'rotateX(0deg)'}` }}
					onClick={() => {
						dispatch(toggleUserMenu())
					}}
				/>
				<div className={styles.username}>{name}</div>
			</div>
			<UserMenu />
		</div>
	)
}

import styles from './Burger.module.sass'

export interface BurgerMenuProps {
	isVisible: boolean
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BurgerMenu({
	isVisible,
	setIsVisible,
}: BurgerMenuProps) {
	return (
		<div
			className={`${styles.burgerbutton} ${
				isVisible && styles.burgerbutton_Active
			}`}
			onClick={() => setIsVisible((prev) => !prev)}
		>
			<div></div>
		</div>
	)
}

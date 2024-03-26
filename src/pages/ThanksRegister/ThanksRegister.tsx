import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import styles from './ThanksRegister.module.sass'

import globeImg from '../../images/globe.png'

interface ThanksRegisterProps {}

export default function ThanksRegister({}: ThanksRegisterProps) {
	const { email } = useAppSelector((state) => state.authSlice.userData)

	return (
		<section className={styles.thanks}>
			<h3 className={styles.title}>
				Thanks <br /> for registration
			</h3>
			<div className={styles.text}>
				We have sent an account activation link to your email address
				<span className={styles.email}>{email}</span>
			</div>
			<Link className={styles.button} style={{ textDecoration: 'none' }} to='/'>
				Back to home
			</Link>
			<img className={styles.img} src={globeImg} alt='globe' />
		</section>
	)
}

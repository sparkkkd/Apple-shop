import styles from './signup.module.sass'

import AuthForm from '../../components/AuthForm/AuthForm'
import Transition from '../../Transition/Transition'

interface SignUpProps {}

export default function SignUp({}: SignUpProps) {
	return (
		<Transition>
			<section className={styles.signup}>
				<AuthForm formType='signup' />
			</section>
		</Transition>
	)
}

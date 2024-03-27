import Transition from '../../Transition/Transition'
import AuthForm from '../../components/AuthForm/AuthForm'
import styles from './SignIn.module.sass'

interface SignInProps {}

export default function SignIn({}: SignInProps) {
	return (
		<Transition>
			<section className={styles.signin}>
				<AuthForm formType='signin' />
			</section>
		</Transition>
	)
}

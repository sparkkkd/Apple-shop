import AuthForm from '../../components/AuthForm/AuthForm'
import styles from './SignIn.module.sass'

interface SignInProps {}

export default function SignIn({}: SignInProps) {
	return (
		<div className={styles.signin}>
			<AuthForm formType='signin' />
		</div>
	)
}

import styles from './signup.module.sass'

import AuthForm from '../../components/AuthForm/AuthForm'

interface SignUpProps {}

export default function SignUp({}: SignUpProps) {
	return (
		<div className={styles.signup}>
			<AuthForm formType='signup' />
		</div>
	)
}

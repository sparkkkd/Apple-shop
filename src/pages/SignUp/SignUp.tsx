import { useForm } from 'react-hook-form'

import styles from './signup.module.sass'

import formBg from '../../images/form-bg.jpg'
import AuthInput from '../../components/UI/Input/AuthInput'
import FormButton from '../../components/UI/FormButton/FormButton'

interface SignUpProps {}

interface FormData {
	email: string
	password: string
	name: string
}

export default function SignUp({}: SignUpProps) {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid },
	} = useForm<FormData>({
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	})

	const onSubmit = handleSubmit(({ email, name, password }) => {
		console.log({ email, name, password })
	})

	return (
		<div className={styles.signup}>
			<div className={styles.container}>
				<form
					onSubmit={onSubmit}
					className={styles.form}
					style={{ backgroundImage: `url(${formBg})` }}
				>
					<AuthInput
						register={register}
						registerName='email'
						titleName='Enter your email'
						registerValidationText='почту'
						isError={Boolean(errors.email?.message)}
						errorText={errors.email?.message}
					/>
					<AuthInput
						register={register}
						registerName='name'
						titleName='Enter your name'
						registerValidationText='имя'
						isError={Boolean(errors.name?.message)}
						errorText={errors.name?.message}
					/>
					<AuthInput
						register={register}
						registerName='password'
						titleName='Enter your password'
						registerValidationText='пароль'
						isError={Boolean(errors.password?.message)}
						errorText={errors.password?.message}
					/>
					<FormButton name='Sign up' />
				</form>
			</div>
		</div>
	)
}

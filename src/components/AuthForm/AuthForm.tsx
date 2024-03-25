import { useForm } from 'react-hook-form'

import styles from './AuthForm.module.sass'

import handImg from '../../images/hand.png'

import AuthInput from '../UI/AuthInput/AuthInput'
import FormButton from '../UI/AuthButton/AuthButton'

interface FormData {
	email: string
	password: string
	name: string
}

interface AuthFormProps {
	formType: 'signup' | 'signin'
}

export default function AuthForm({ formType }: AuthFormProps) {
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
		mode: 'onChange',
	})

	const onSubmit = handleSubmit(({ email, name, password }) => {
		console.log({ email, name, password })
	})

	return (
		<div className={styles.container}>
			<img className={styles.img} src={handImg} alt='formimg' />
			<form
				onSubmit={onSubmit}
				className={styles.form}
				// style={{ backgroundImage: `url(${formBg})` }}
			>
				<AuthInput
					register={register}
					registerName='email'
					titleName='Enter your email'
					registerValidationText='почту'
					isError={Boolean(errors.email?.message)}
					errorText={errors.email?.message}
				/>
				{formType === 'signup' && (
					<AuthInput
						register={register}
						registerName='name'
						titleName='Enter your name'
						registerValidationText='имя'
						isError={Boolean(errors.name?.message)}
						errorText={errors.name?.message}
					/>
				)}

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
	)
}

import { useForm } from 'react-hook-form'

import styles from './AuthForm.module.sass'

import handImg from '../../images/hand.png'

import AuthInput from '../UI/AuthInput/AuthInput'
import AuthButton from '../UI/AuthButton/AuthButton'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchLogin, fetchRegister } from '../../store/slices/authSlice'
import { Navigate } from 'react-router-dom'

interface FormData {
	email: string
	password: string
	name: string
}

interface AuthFormProps {
	formType: 'signup' | 'signin'
}

export default function AuthForm({ formType }: AuthFormProps) {
	const dispatch = useAppDispatch()
	const { navigateTo } = useAppSelector((state) => state.authSlice)

	const {
		register,
		handleSubmit,
		// setError,
		formState: {
			errors,
			// isValid
		},
	} = useForm<FormData>({
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
		mode: 'onChange',
	})

	const onSubmit = handleSubmit(({ email, name, password }) => {
		if (formType === 'signin') {
			console.log({ email, name, password })
			const formData = {
				email,
				password,
			}
			dispatch(fetchLogin(formData))
		}
		if (formType === 'signup') {
			const formData = {
				email,
				password,
				name,
			}
			console.log(formData)

			dispatch(fetchRegister(formData))
		}
	})

	if (navigateTo) {
		return <Navigate to={navigateTo} />
	}

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
				<AuthButton>{formType === 'signin' ? 'Sign in' : 'Sign up'}</AuthButton>
			</form>
		</div>
	)
}

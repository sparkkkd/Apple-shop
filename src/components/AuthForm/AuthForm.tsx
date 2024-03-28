import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import styles from './AuthForm.module.sass'

import handImg from '../../images/hand.png'

import AuthInput from '../UI/AuthInput/AuthInput'
import AuthButton from '../UI/AuthButton/AuthButton'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchLogin, fetchRegister, resetErrorMessage } from '../../store/slices/authSlice'
import { Navigate } from 'react-router-dom'
import { LoginData, RegisterData } from '../../models/IFormData'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import { useEffect } from 'react'

interface FormData {
	email: string
	password: string
	name?: string
}

interface AuthFormProps {
	formType: 'signup' | 'signin'
}

const loginValidationScheme = {
	email: Yup.string().required('Введите почту').email('Неверный формат почты'),
	password: Yup.string().required('Введите пароль'),
}

const registerValidationScheme = {
	email: Yup.string().required('Введите почту').email('Неверный формат почты'),
	name: Yup.string()
		.required('Введите имя')
		.min(3, 'Минимум 3 символа')
		.max(20, 'Максимум 20 символов'),
	password: Yup.string().required('Введите пароль').min(6, 'Минимум 6 символов'),
}

export default function AuthForm({ formType }: AuthFormProps) {
	const dispatch = useAppDispatch()
	const { navigateTo, isLoading, isError, errorMessage } = useAppSelector(
		(state) => state.authSlice
	)

	const validationSchema = Yup.object().shape(
		formType === 'signin' ? loginValidationScheme : registerValidationScheme
	)

	useEffect(() => {
		dispatch(resetErrorMessage())
	}, [])

	const {
		register,
		handleSubmit,
		// setError,
		formState: {
			errors,
			// isValid
		},
	} = useForm<FormData>({
		defaultValues: {},
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = handleSubmit(({ email, name, password }: FormData) => {
		if (formType === 'signin') {
			const formData: LoginData = {
				email,
				password,
			}
			dispatch(fetchLogin(formData))
		}

		if (formType === 'signup') {
			const formData: RegisterData = {
				email,
				password,
				name: name as string,
			}
			console.log(formData)

			dispatch(fetchRegister(formData))
		}
	})

	if (navigateTo) {
		return <Navigate to={navigateTo} />
	}

	return (
		<div className={styles.authWrapper}>
			<div className={styles.container}>
				<img className={styles.img} src={handImg} alt='formimg' />
				<form onSubmit={onSubmit} className={styles.form}>
					<AuthInput
						register={register}
						registerName='email'
						titleName='Enter your email'
						// registerValidationText='почту'
						isError={Boolean(errors.email?.message)}
						errorText={errors.email?.message}
					/>
					{formType === 'signup' && (
						<AuthInput
							register={register}
							registerName='name'
							titleName='Enter your name'
							// registerValidationText='имя'
							isError={Boolean(errors.name?.message)}
							errorText={errors.name?.message}
						/>
					)}

					<AuthInput
						register={register}
						registerName='password'
						titleName='Enter your password'
						// registerValidationText='пароль'
						isError={Boolean(errors.password?.message)}
						errorText={errors.password?.message}
					/>

					{isError && <div className={styles.error}>{errorMessage}</div>}

					<AuthButton>{formType === 'signin' ? 'Sign in' : 'Sign up'}</AuthButton>
				</form>
			</div>
			{isLoading && <SpinnerLoading />}
		</div>
	)
}

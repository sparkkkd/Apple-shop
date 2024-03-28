import styles from './input.module.sass'

import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
	registerName: Path<T>
	register: UseFormRegister<T>
	titleName: string
	isError: boolean
	errorText: string | undefined
}

const AuthInput = <T extends FieldValues>({
	register,
	registerName,
	titleName,
	errorText,
}: InputProps<T>) => {
	return (
		<div className={styles.container}>
			<label className={styles.title}>{titleName}</label>
			<input className={styles.input} type='text' {...register(registerName)} />
			<span className={styles.error}>{errorText}</span>
		</div>
	)
}

export default AuthInput

import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import styles from './input.module.sass'

type InputProps<T extends FieldValues> = {
	registerName: Path<T>
	register: UseFormRegister<T>
	titleName: string
	registerValidationText: string
	isError: boolean
	errorText: string | undefined
}

const AuthInput = <T extends FieldValues>({
	register,
	registerName,
	titleName,
	registerValidationText,
	errorText,
}: InputProps<T>) => {
	return (
		<div className={styles.container}>
			<label className={styles.title}>{titleName}</label>
			<input
				className={styles.input}
				type='text'
				{...register(registerName, {
					required: `Введите ${registerValidationText}`,
				})}
			/>
			<span className={styles.error}>{errorText}</span>
		</div>
	)
}

export default AuthInput
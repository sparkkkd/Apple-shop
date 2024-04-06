import { useRef } from 'react'
import styles from './AdminFormInput.module.sass'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface AdminFormInputProps<T extends FieldValues> {
	label: string
	isFile?: boolean
	previewText?: string
	isSelect?: boolean

	registerName: Path<T>
	register: UseFormRegister<T>
	isError: boolean
	errorText: string | undefined
}

export const AdminFormInput = <T extends FieldValues>({
	label,
	isFile,
	previewText,
	isSelect,
	registerName,
	register,
	isError,
	errorText,
}: AdminFormInputProps<T>) => {
	const fileRef = useRef<any>()

	return (
		<div className={styles.wrapper}>
			<label className={styles.title}>{label}</label>
			{!isFile && !isSelect && (
				<>
					<input {...register(registerName)} type='text' className={styles.input} />
					{isError && <span className={styles.error}>{errorText}</span>}
				</>
			)}

			{isFile && (
				<>
					<input
						{...register(registerName)}
						type='file'
						accept='image/png, image/gif, image/jpeg'
						hidden
						ref={fileRef}
					/>
					<div className={styles.file} onClick={() => fileRef.current.click()}>
						{previewText}
					</div>
					{isError && <span className={styles.error}>{errorText}</span>}
				</>
			)}

			{isSelect && (
				<>
					<select {...register(registerName)} className={styles.select}>
						<option className={styles.option} value='Телефоны'>
							Телефоны
						</option>
						<option className={styles.option} value='Телефоны'>
							Телефоны
						</option>
						<option className={styles.option} value='Телефоны'>
							Телефоны
						</option>
						<option className={styles.option} value='Телефоны'>
							Телефоны
						</option>
						<option className={styles.option} value='Телефоны'>
							Телефоны
						</option>
					</select>
					{isError && <span className={styles.error}>{errorText}</span>}
				</>
			)}
		</div>
	)
}

export default AdminFormInput

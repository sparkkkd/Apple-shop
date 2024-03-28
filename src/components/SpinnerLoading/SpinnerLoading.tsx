import styles from './SpinnerLoading.module.sass'

export default function SpinnerLoading() {
	return (
		<div className={styles.loaderWrapper}>
			<span className={styles.loader}></span>
		</div>
	)
}

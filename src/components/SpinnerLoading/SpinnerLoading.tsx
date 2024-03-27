import styles from './SpinnerLoading.module.sass'

interface SpinnerLoadingProps {}

export default function SpinnerLoading({}: SpinnerLoadingProps) {
	return (
		<div className={styles.loaderWrapper}>
			<span className={styles.loader}></span>
		</div>
	)
}

import styles from './SpinnerLoading.module.sass'

interface SpinnerLoadingProps {}

export default function SpinnerLoading({}: SpinnerLoadingProps) {
	return <span className={styles.loader}></span>
}

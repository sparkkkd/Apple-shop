import styles from './FeaturesEnumeration.module.sass'

interface FeaturesEnumirationProps {
	title: string
	text: string
}

export default function FeaturesEnumeration({ title, text }: FeaturesEnumirationProps) {
	return (
		<div className={styles.item}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

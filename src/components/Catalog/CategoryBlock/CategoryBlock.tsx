import styles from './CategoryBlock.module.sass'

interface CategoryBlockProps {
	img: string
	title: string
}

export default function CategoryBlock({ img, title }: CategoryBlockProps) {
	return (
		<div className={styles.category}>
			<img src={img} alt='caregory' className={styles.img} />
			<div className={styles.title}>{title}</div>
		</div>
	)
}

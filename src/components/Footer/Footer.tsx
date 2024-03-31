import styles from './Footer.module.sass'

import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { FOOTER_CONTACTS } from './constant'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{FOOTER_CONTACTS.map(({ id, title, ico, href, tel }) => (
					<ContactBlock key={id} title={title} ico={ico} href={href} tel={tel} />
				))}
			</div>
			<div className={styles.policy}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					Политика конфиденциальности
				</Link>
			</div>
		</footer>
	)
}

interface IContactBlock {
	title: string
	ico: ReactNode
	href: string
	tel?: boolean
}

function ContactBlock({ title, ico, tel, href }: IContactBlock) {
	return (
		<div className={styles.contactWrapper}>
			<div className={styles.title}>
				{!tel && (
					<a href={href} target='_blank'>
						{title}
					</a>
				)}
				{tel && (
					<a href={`tel:${href}`} target='_blank'>
						{title}
					</a>
				)}
			</div>
			<div className={styles.ico}>{ico}</div>
		</div>
	)
}

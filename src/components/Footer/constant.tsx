import { v4 as uuid4 } from 'uuid'
import { ReactNode } from 'react'

import { FaTelegram, FaInstagram, FaLocationDot, FaPhone } from 'react-icons/fa6'

export interface IFooterContacts {
	id: string
	title: string
	href: string
	ico: ReactNode
	tel?: boolean
}

export const FOOTER_CONTACTS: Array<IFooterContacts> = [
	{ id: uuid4(), title: 'Telegram', href: 'https://web.telegram.org/a/', ico: <FaTelegram /> },
	{ id: uuid4(), title: 'Instagram', href: 'https://www.instagram.com/', ico: <FaInstagram /> },
	{ id: uuid4(), title: 'Г. Каспийск, ул. Ленина 39', href: '/', ico: <FaLocationDot /> },
	{ id: uuid4(), title: '7(777) 777-77-77', href: '+77777777777', tel: true, ico: <FaPhone /> },
]

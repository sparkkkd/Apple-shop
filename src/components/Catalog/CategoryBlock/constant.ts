import { v4 as uuidv4 } from 'uuid'

import phone from '../../../images/categories/phone.png'
import earpods from '../../../images/categories/earpods.png'
import airpods from '../../../images/categories/airpods.png'
import accessories from '../../../images/categories/accessories.png'
import macbooks from '../../../images/categories/macbooks.png'
import watches from '../../../images/categories/watches.png'

interface ICategory {
	id: string
	img: string
	title: string
}

export const CATEGORIES: Array<ICategory> = [
	{ id: uuidv4(), title: 'Телефоны', img: phone },
	{ id: uuidv4(), title: 'EarPods', img: earpods },
	{ id: uuidv4(), title: 'AirPods', img: airpods },
	{ id: uuidv4(), title: 'Аксессуары', img: accessories },
	{ id: uuidv4(), title: 'MacBooks', img: macbooks },
	{ id: uuidv4(), title: 'Часы', img: watches },
]

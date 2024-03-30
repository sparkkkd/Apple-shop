import { IParallaxImages } from '../../models/IParallaxImages'

import { v4 as uuidv4 } from 'uuid'

import img1 from '../../images/intro-image1.jpg'
import img2 from '../../images/intro-image2.jpg'

export const PARALLAX_INTRO_IMAGES: Array<IParallaxImages> = [
	{
		id: uuidv4(),
		img: img1,
		title: 'Мы больше, чем магазин',
		text: 'Мы не только продаем товары, но также создаем личностные и уникальные опыты для каждого клиента',
	},
	{
		id: uuidv4(),
		img: img2,
		title: 'Ты больше, чем клиент',
		text: 'Мы ценим ваши личные истории, постоянно стремимся удовлетворить ваши потребности и предоставляем личную поддержку в каждом этапе вашего отношения с нашим брендом.',
	},
]

export const FINAL_TEXT: string =
	'Таким образом, наш лозунг означает, что мы стремимся создавать глубокие и длительные связи с нашими клиентами, предоставляя им не только товары, но и отличный опыт и личную внимательность.'

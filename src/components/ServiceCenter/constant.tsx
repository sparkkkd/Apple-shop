import { v4 as uuidv4 } from 'uuid'

import img1 from '../../images/slider/1.jpg'
import img2 from '../../images/slider/2.jpg'
import img3 from '../../images/slider/3.jpg'
import { ReactNode } from 'react'

interface ISlider {
	id: string
	src: string
	alt: string
}

interface IService {
	id: string
	title: string
	text: string
}

export const SLIDER_ITEMS: Array<ISlider> = [
	{ id: uuidv4(), src: img1, alt: 'img1' },
	{ id: uuidv4(), src: img2, alt: 'img2' },
	{ id: uuidv4(), src: img3, alt: 'img3' },
]

export const FEATURES_TITLE = (): ReactNode => {
	return (
		<>
			Помимо магазина, у нас так же работает сервисный центр. Мы проводим ремонты любой сложности и
			будем рады помочь вам оживить ваше устройство
		</>
	)
}

export const SERVICE_ITEMS: Array<IService> = [
	{
		id: uuidv4(),
		title: 'Профессиональные мастера',
		text: 'Наш сервисный центр работает только с квалифицированными и опытными техниками, которые поддерживают собственное образование и сертификаты Apple.',
	},
	{
		id: uuidv4(),
		title: 'Оригинальные запчасти',
		text: 'Мы используем только оригинальные запчасти и комплементы Apple для ремонта ваших устройств, чтобы гарантировать их безопасность и долговечность.',
	},
	{
		id: uuidv4(),
		title: 'Гарантия на ремонт',
		text: 'Мы обеспечиваем гарантию на каждый выполненный ремонт, чтобы удовлетворить ваши ожидания и обеспечить долгосрочную работоспособность вашего устройства.',
	},
	{
		id: uuidv4(),
		title: 'Эффективная диагностика',
		text: 'Наш сервисный центр использует современные инструменты и программы для быстрой и точной диагностики ваших устройств, чтобы минимизировать время бездействия.',
	},
	{
		id: uuidv4(),
		title: 'Особое внимание к деталям',
		text: 'Наша команда техников работает с особым вниманием и тщательностью при ремонте каждого устройства, чтобы вернуть его клиенту в лучшем состоянии.',
	},
]

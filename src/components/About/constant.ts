import { v4 as uuidv4 } from 'uuid'

import { IAbout } from '../../models/IAbout'

export const ABOUT_ITEMS: Array<IAbout> = [
	{
		id: uuidv4(),
		title: 'Добро пожаловать в наш магазин!',
		text: `Мы специализируемся на покупке, продаже и обмене новых и б/у продуктов Apple. Независимо от того, хотите ли вы обновить свое текущее устройство или продать свой подержанный гаджет Apple, мы поможем вам.`,
	},
	{
		id: uuidv4(),
		title: 'Эксперты',
		text: `Наша команда экспертов-оценщиков предлагает конкурентоспособные и справедливые цены на ваши б/у устройства, гарантируя, что вы получите наилучшее соотношение цены и качества при обмене. Мы принимаем различные модели iPhone, iPad, Mac и Apple Watch, гарантируя, что мы обслуживаем широкий круг пользователей Apple.`,
	},
	{
		id: uuidv4(),
		title: 'Оплачивайте самым удобным для вас способом',
		text: `Вы можете выбрать один из различных способов оплаты, включая наличные или рассрочку в магазине для вашей покупки. Мы стремимся сделать этот процесс максимально удобным и беспроблемным для наших клиентов.`,
	},
	{
		id: uuidv4(),
		title: 'Широкий ассортимент продукции',
		text: `Наш ассортимент регулярно пополняется новейшими моделями и релизами, чтобы наши клиенты всегда имели доступ к новейшим технологиям.`,
	},
	{
		id: uuidv4(),
		title: 'Лучшая клиентоориентированность в городе',
		text: `Наше стремление к удовлетворению потребностей клиентов лежит в основе всего, что мы делаем, и мы стремимся обеспечить безупречный сервис от начала до конца. Независимо от того, хотите ли вы продать, купить или обменять продукт Apple, мы приглашаем вас посетить наш магазин и лично убедиться в том, что отличает нас от конкурентов.`,
	},
]

import { v4 as uuidv4 } from 'uuid'

import { IAbout } from '../../models/IAbout'

export const ABOUT_ITEMS: Array<IAbout> = [
	{
		id: uuidv4(),
		title: 'Welcome to our store!',
		text: `We specialize in buying, selling, and trading-in a wide range of new and pre-owned Apple products. Whether you're looking to upgrade your current device or want to sell your gently used Apple gadget, we've got you covered.`,
	},
	{
		id: uuidv4(),
		title: 'Experts',
		text: `Our team of expert appraisers offers competitive and fair prices for your pre-owned devices, ensuring you get the best value for your trade-in. We accept various models of iPhones, iPads, Mac computers, and Apple Watches, ensuring that we cater to a diverse range of Apple users.`,
	},
	{
		id: uuidv4(),
		title: 'Pay the way you feel comfortable',
		text: `You can choose from various payment methods, including cash or store credit for your next purchase. We're committed to making the process as convenient and hassle-free as possible for our customers.`,
	},
	{
		id: uuidv4(),
		title: 'A wide range of products',
		text: `In addition to buying and trading-in Apple devices, we also sell a variety of new and pre-owned Apple products at competitive prices. Our inventory is regularly updated with the latest models and releases to ensure that our customer's always have access to the newest technology.`,
	},
	{
		id: uuidv4(),
		title: 'The best customer orientation in the city',
		text: `Our commitment to customer satisfaction is at the heart of everything we do, and we're dedicated to providing a seamless experience from start to finish. Whether you're looking to sell, buy, or trade-in an Apple product, we invite you to visit our store and see for yourself what sets us apart from the competition.`,
	},
]

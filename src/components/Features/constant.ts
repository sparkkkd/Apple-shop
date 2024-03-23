import { v4 as uuidv4 } from 'uuid'

import { IFeatures } from '../../models/IFeatures'

export const FEATURES_ITEMS: Array<IFeatures> = [
	{
		id: uuidv4(),
		title: 'High quality',
		text: `We only guarantee new and genuine Apple iPhones with a manufacturer's warranty. All devices are checked for quality before personal transfer to the customer.`,
	},
	{
		id: uuidv4(),
		title: 'Convenient and quick problem resolution',
		text: `Our technical support department specializes in Apple iPhones and is ready to help with any questions and problems related to these devices.`,
	},
	{
		id: uuidv4(),
		title: 'Favorable prices',
		text: `We offer competitive prices for new and used Apple iPhones, as well as regular promotions and discounts for regular customers.`,
	},
	{
		id: uuidv4(),
		title: 'Transparent exchange and refund policy',
		text: `We provide nationwide delivery, a simple exchange or refund process within 30 days, and full transparency during all transactions.`,
	},
]

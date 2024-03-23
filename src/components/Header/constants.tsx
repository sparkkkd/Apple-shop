import { INavItem } from '../../models/INavItem'

export const NAV_ITEMS: Array<INavItem> = [
	{ id: 'navitem1', text: 'Home', href: '/' },
	{ id: 'navitem2', text: 'Catalog', href: '/catalog' },
	{ id: 'navitem3', text: 'Cart', href: '/cart' },
	{ id: 'navitem4', text: 'Contacts', href: '/contacts' },
]

export const NAV_AUTH_ITEMS: Array<INavItem> = [
	{ id: 'authitem1', text: 'Sign up', href: '/sign-up' },
	{ id: 'authitem2', text: 'Sign in', href: '/sign-in' },
]

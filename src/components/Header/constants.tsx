import { INavItem } from '../../models/INavItem'

export const NAV_ITEMS: Array<INavItem> = [
	{ id: 'navitem1', text: 'Главная', href: '/' },
	{ id: 'navitem2', text: 'Каталог', href: '/catalog' },
	{ id: 'navitem3', text: 'Корзина', href: '/cart' },
	{ id: 'navitem4', text: 'Контакты', href: '/contacts' },
]

export const NAV_AUTH_ITEMS: Array<INavItem> = [
	{ id: 'authitem1', text: 'Регистрация', href: '/sign-up' },
	{ id: 'authitem2', text: 'Войти', href: '/sign-in' },
]

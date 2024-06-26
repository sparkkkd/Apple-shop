import styles from './App.module.sass'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Cart from './pages/Cart/Cart'
import Contacts from './pages/Contacts/Contacts'
import ThanksRegister from './pages/ThanksRegister/ThanksRegister'
import Admin from './pages/Admin/Admin'

import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import BurgerButton from './components/BurgerButton/BurgerButton'
import Footer from './components/Footer/Footer'

import { useAppDispatch } from './hooks/redux'
import { fetchCheckAuth } from './store/slices/authSlice'

import BackgroundImage from './images/noise-bg.jpg'

function App() {
	const location = useLocation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchCheckAuth())
		}
	}, [])

	return (
		<>
			<div
				className={styles.background}
				style={{ backgroundImage: `url(${BackgroundImage})` }}
			></div>
			<BurgerButton />
			<BurgerMenu />
			<Header />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/thanks' element={<ThanksRegister />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	)
}

export default App

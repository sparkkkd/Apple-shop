import styles from './App.module.sass'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import ThanksRegister from './pages/ThanksRegister/ThanksRegister'

import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import BurgerButton from './components/BurgerButton/BurgerButton'
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading'

import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchCheckAuth } from './store/slices/authSlice'

import BackgroundImage from './images/bg.gif'
import Cart from './pages/Cart/Cart'
import Contacts from './pages/Contacts/Contacts'

function App() {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const { isLoading } = useAppSelector((state) => state.authSlice)

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

			<div className={styles.container}>
				{/* {isLoading ? (
					<SpinnerLoading />
				) : (
					<>
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
							</Routes>
						</AnimatePresence>
					</>
				)} */}

				<>
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
						</Routes>
					</AnimatePresence>
				</>
			</div>
		</>
	)
}

export default App

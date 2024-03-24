import { Route, Routes } from 'react-router-dom'

import styles from './App.module.sass'

import BurgerMenu from './components/UI/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'

import BackgroundImage from './images/bg.gif'

function App() {
	return (
		<>
			<div
				className={styles.background}
				style={{ backgroundImage: `url(${BackgroundImage})` }}
			></div>
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>
					<BurgerMenu />
				</main>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
				</Routes>
			</div>
		</>
	)
}

export default App

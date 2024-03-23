import styles from './App.module.sass'
import BurgerMenu from './components/UI/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<BurgerMenu />
			</main>

			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App

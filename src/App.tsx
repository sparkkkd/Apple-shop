import styles from './App.module.sass'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<BurgerMenu />
			</main>
		</div>
	)
}

export default App

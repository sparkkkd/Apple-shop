import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.sass'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename='/Apple-shop'>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)

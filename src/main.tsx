import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename='Apple-shop'>
		<App />
	</BrowserRouter>
)
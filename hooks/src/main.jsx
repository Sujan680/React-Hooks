
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './components/hoooks/useContextApiHook/context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>,
)

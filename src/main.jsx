import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import GlobalStyle from './styles/GlobalStyle'

const Router = import.meta.env.BASE_URL === '/' ? BrowserRouter : HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
)

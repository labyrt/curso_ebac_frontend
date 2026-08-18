import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import store from './store'
import GlobalStyle from './styles/GlobalStyle'

const Router = import.meta.env.BASE_URL === '/' ? BrowserRouter : HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

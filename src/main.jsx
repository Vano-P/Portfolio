import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LanguageProvider>
        <OrderProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrderProvider>
      </LanguageProvider>
    </StrictMode>
)

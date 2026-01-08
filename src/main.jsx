import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import AppMotion from './AppMotion.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <OrderProvider>
            <BrowserRouter basename='/portfolio/'>
              <AppMotion>
                <App />
              </AppMotion>
            </BrowserRouter>
          </OrderProvider>
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
)

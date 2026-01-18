import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { BookingProvider } from './context/BookingContext.jsx'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      <App />
      <Toaster position='top-right'/>
    </BookingProvider>
  </StrictMode>,
)

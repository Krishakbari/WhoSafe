import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/auth.jsx'
import { CartProvider } from './context/cartContex.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <GoogleOAuthProvider clientId='713946003623-fb7q460um0qr66inntgqphd1rh42ipmq.apps.googleusercontent.com'>
        <StrictMode>
          <App />
        </StrictMode>
      </GoogleOAuthProvider>
    </CartProvider>
  </AuthProvider>
)

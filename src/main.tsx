import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { AuthProvider } from './context/AuthContext/index.tsx'
import { ProductProvider } from './context/Products/index.tsx'
import { CustomerProvider } from './context/Customers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <ProductProvider>
        <CustomerProvider>
          <App />
        </CustomerProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)

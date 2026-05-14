import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import AppRoutes from './routes/AppRoutes'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </CartProvider>
    </AuthProvider>
  )
}


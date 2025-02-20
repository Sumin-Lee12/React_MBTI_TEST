
import App from './App.jsx'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={QueryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routing/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
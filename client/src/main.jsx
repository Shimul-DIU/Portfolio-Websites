import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'
import { RouterProvider } from 'react-router-dom';
import App from './App';
import router from './Routers';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>
      <App/>
   </RouterProvider>
  </StrictMode>
)

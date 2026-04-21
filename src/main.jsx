import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
let router=createBrowserRouter([
  {
     path:'/',
    element:<App></App>
   },
   {
    path:'about',
   element:<App></App>,
   },
   {
    path:'services',
   element:<App></App>,
   },
   {
    path:'contact',
   element:<App></App>,
   },
   {
    path:'projects',
    element:<App></App>,
    },
    {
      path:'resume',
      element:<App></App>,
   }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
    <GlobalStyles />
    <ToastContainer 
      autoClose={2000} 
      theme='colored' 
      position='bottom-center'
      newestOnTop
      closeOnClick
      pauseOnHover={false}
      rtl={false}
      draggable
    />
  </StrictMode>,
)

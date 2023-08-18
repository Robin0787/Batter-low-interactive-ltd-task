import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Result from './Pages/Result/Result'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'result',
    element: <Result />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/dashboard',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './screens/Home/'
import { Agend } from './screens/Agend/'
import { Manage } from './screens/Manage'
import { Login } from './screens/Login'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/agend',
      element: <Agend />
    },
    {
      path: '/manage',
      element: <Manage />
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
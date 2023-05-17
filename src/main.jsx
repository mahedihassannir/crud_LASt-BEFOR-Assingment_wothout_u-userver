import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckOut from './CheckOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>

  },
  {
    path: "/Chackout/:id",
    element: <CheckOut></CheckOut>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)

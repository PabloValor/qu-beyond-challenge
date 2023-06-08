import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomePage from './routes/home/index.tsx';
import PlanetDetails from './routes/planetDetails/index.tsx';
import Layout from './routes/layout/index.tsx';
import ErrorPage from './routes/error/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/planet/:name/:id",
        element: <PlanetDetails/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

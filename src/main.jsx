import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './css/site.scss'

import Root from "./routes/root";
import Faq, {loader as faqLoader} from './routes/faq'
import Home from './routes/index'
import ErrorPage from "./components/error-page/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true, 
        element: <Home />
      },
      {
        path: "faq",
        element: <Faq />,
        loader: faqLoader
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)

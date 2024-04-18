import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home/Home';
import { Login } from '/src/pages/auth/Login/Login'
import { ApiProvider } from "./ApiProvider";

const router = createBrowserRouter([
  {
    _element: <ApiProvider />,
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Login />,
      },
      //{
        //path: "*",
        //element: <NotFound />,
        //},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

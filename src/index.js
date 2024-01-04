import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/home"
import Abb from "./pages/patient"
import Abo from './pages/Edt';
import Ab from './pages/doctor';
import Que from './pages/quest';
import Delpatient from './pages/delete';
import Add from './pages/add';
import Header from "./components/Header"
const MainPage = ()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    </>

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path: "patient",
        element: <Abb/>,
      },
      {
        path: "Edt",
        element: <Abo/>,
      },
      {
        path: "doctor",
        element: <Ab/>,
      },
      {
        path: "quest",
        element: <Que/>,
      },
      {
        path: "delete",
        element: <Delpatient/>,
      },
      {
        path: "add",
        element: <Add/>,
      },
     
    ]
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,  BrowserRouter, RouterProvider, Form } from 'react-router-dom';
import Apifetching from './practice/Apifetching';
import Test from './firstclass/Test';
import Dashboard from './Page/Dashboard';
import Profile from './Page/Profile';
import Wallet from './Page/Wallet';
import About from './Page/About';
import Error from './Page/Error';
import Todo from './todo/Todo';
import Butt from './props/Butt';
import List from './List';
import Forming from './FormComponent/Forming';
import Format from './FormComponent/Format';

const router= createBrowserRouter([
  {
    path:"/",
    element: <Apifetching/>
  },
  {
    path:"/format",
    element: <Format/>
  },
  {
    path:'/todo',
    element:<Todo/>
  },
  {
    path:'/form',
    element:<Forming/>
  },
  {
    path:'/list',
    element:<List/>
  },
  {
    path:'/buttons',
    element:<Butt/>
  },
  {
    path:"/test",
    element:<Test/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard",
        element:<About/>
      },
      {
        path:"/dashboard/profile/:id",
        element:<Profile/>
      },
    ]
  },
  {
    path:"*",
    element:<Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

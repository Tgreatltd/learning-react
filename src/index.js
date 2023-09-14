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
import Login from './FormComponent/Login';
import Book from './identity/Book';
import Books from './identity/Books';
import Newbook from './identity/Newbook';
import Effecting from './EffectsComponent/Effecting';
import Pro from './FormComponent/Pro';
import FirstPage from './submission/FirstPage';
import SecondPage from './submission/SecondPage';
import ProfilePage from './submission/ProfilePage';
import LoginPage from './submission/LoginPage';
import AboutPage from './submission/AboutPage';
import Pifetching from './practice/Pifetching';

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
    path:'/login',
    element:<Login/>
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
    path:'/pi',
    element:<Pifetching/>
  },
  {
    path:'/profileuser',
    element:<Pro/>
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
    path:"/data",
    element:<Effecting/>
  },
  {
    path:"/book/:id",
    element:<Book/>
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
   path:"/books",
   children:[
   { 
    index:true,
    element:<Books/>
  },
  {
    path:"new",
    element:<Newbook/>
  },
   ]
  },

  {
    path:'/submit',
    element:<FirstPage/>,
    children:[
      {
        path:'/submit',
        element:<AboutPage/>
      },
      {path:'/submit/second',
      element:<SecondPage/>
      },
      {path:'/submit/profilepage',
       element:<ProfilePage/>
     },
     {
      path:'/submit/loginpage',
      element:<LoginPage/>
     },
     {
      path:'/submit/register',
      element:<Forming/>
     }
    ]
   },
  {
    path:"*",
    element:<Error/>,
  },
 

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

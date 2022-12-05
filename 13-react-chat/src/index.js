import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GlobalProvider from 'contexts/global';

import 'styles/index.css';
import ChatPage from 'components/pages/ChatPage/ChatPage';
import About from 'components/pages/About/About';
import EditPage from 'components/pages/EditPage/EditPage';
import LoginPage from 'components/pages/LoginPage/LoginPage';

// To jest obiekt konfiguracyjny routingu, ktory mowi nam na ktorej sciezce, ma odpalic ktory komponent
const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/edit/:messageId',
    element: <EditPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// RouterProvider jest to komponent stworzony przez react-router-dom, ktory przyjmuje jako props router, nasz obiekt konfiguracyjny
root.render(
  <React.StrictMode>
    <GlobalProvider>
       <RouterProvider router={router}/>
    </GlobalProvider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

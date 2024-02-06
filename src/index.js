import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MyDiaries from "./pages/MyDiaries";
import DiaryDetail from "./pages/DiaryDetail";
import NewDiary from "./pages/NewDiary";
import EditDiary from "./pages/EditDiary";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, path: '/', element: <Home/>},
      {path: "login", element: <Login/>},
      {path: "diaries/new", element: <NewDiary/>},
      {path: "diaries/me", element: <MyDiaries/>},
      {path: "diaries/:id", element: <DiaryDetail/>},
      {path: "diaries/:id/edit", element: <EditDiary/>},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

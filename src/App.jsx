// import { useState } from 'react'

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import LoginPage from "./Pages/LoginPage";
import { Provider } from "react-redux";


import SignUp from "./Pages/SignUp";
import { store } from "./redux/Store";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/> ,
    errorElement:  <Error/>,
  },
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: 'signUp',
    element: <SignUp/>
  }
]);
function App() {
  return (
<Provider store={store}>
    <RouterProvider router={router} />
</Provider>

  );
}

export default App;

// import { useState } from 'react'

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import LoginPage from "./Pages/LoginPage";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import ExpoSlice from "./redux/ExpoSlice";
const store = configureStore({
  reducer:{
    expo: ExpoSlice
  }
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
    errorElement:  <Error/>,
  },
  {
    path: '/loginPage',
    element: <LoginPage />
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

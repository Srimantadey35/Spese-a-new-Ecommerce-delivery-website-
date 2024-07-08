import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from '../store/store.js'
import axios from 'axios'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AddToCart from './pages/AddToCart.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'

axios.defaults.withCredentials = true

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route path='' element={<Home/>}/>
          <Route path='menu/:productId' element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='upload-product' element={<ProductDetails/>}/>
          <Route path='addtocart' element={<AddToCart/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='cancel' element={<Cancel/>}/>
         
      </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
   
    </Provider>
  //</React.StrictMode>,
)

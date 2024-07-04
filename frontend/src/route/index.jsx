import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Menu from "../pages/Menu.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import AddToCart from "../pages/AddToCart.jsx";
import Success from "../pages/Success.jsx";
import Cancel from "../pages/Cancel.jsx";
const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children:[
            {
                path : "",
                element: <Home/>
            },
            {
                path : "menu/:productId",
                element : <Menu/>
            },
            {
                path : "about",
                element : <About/>
            },
            {
                path : "contact",
                element : <Contact/>
            },
            {
                path : "login",
                element: <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path: "upload-product",
                element : <ProductDetails/>
            },
            {
                path : "addtocart",
                element : <AddToCart/>
            },
            {
                path : "success",
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            }
        ]
    }
    
])

export default router
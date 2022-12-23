import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Chekout from "../pages/Chekout/Chekout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Review from "../pages/Review/Review";
import Services from "../pages/Services/Services";
import ShowReviews from "../pages/ShowReviews/ShowReviews";
import Footer from "../pages/Shred/Footer/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


  export  const routes =createBrowserRouter([
    {
        path : '/',
        element :<Main/>,
        children :[
            {
                path : '/login',
                element : <Login></Login>
            },
            
            {
                path : '/register',
                element : <Register></Register>
            }, 
            
            {
                path : '/',
                element :<Home></Home>
            },
            {
                path : '/services',
                element : <Services/>
            },
            {
                path : '/chekout/:id',
                element : <Chekout/>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path : '/review/:id',
                element : <Review/>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path : '/showReviews',
                element :<PrivateRoute><ShowReviews></ShowReviews> </PrivateRoute> ,

            },
            {
                path : '/addService',
                element: <AddService/>
            }


        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Chekout from "../pages/Chekout/Chekout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Review from "../pages/Review/Review";
import ServiceDetails from "../pages/Services/ServiceDetails";
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
                path : '/services/:id',
                element : <ServiceDetails/>,
            //    loader : ({ params} ) =>fetch(`process.env.REACT_APP_API_URL/services/${params.id}`)
               loader : ({ params} ) => fetch(`${process.env.REACT_APP_API_URL}/services/${params?.id}`)
            //    fetch(`process.env.REACT_APP_API_URL/services/${params.id}`)
            },
            {
                path : '/chekout/:id',
                element : <Chekout/>,
                loader : ({params}) => fetch(`${process.env.REACT_APP_API_URL}/services/${params.id}`)
            },
            {
                path : '/review/:id',
                element : <Review/>,

                // loader : ({params}) => fetch(`https://assignment11-server-pi.vercel.app/services/${params.id}`)
                loader : ({params}) => fetch(`${process.env.REACT_APP_API_URL}/services/${params.id}`)

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
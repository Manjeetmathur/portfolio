import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Work from "../pages/Work/Work";
import Post from "../pages/Post/Post";

const router = createBrowserRouter([
       {
              path : "/",
              element : <App/>,
              children:[
                     {
                            path : "/about",
                            element : <About/>
                     },
                     {
                            path : "/",
                            element : <Home/>
                     },
                     {
                            path : "/work",
                            element : <Work/>
                     },
                     {
                            path : "/post",
                            element : <Post/>
                     },
                     
              ]
       },
       
       
       
])
export default router
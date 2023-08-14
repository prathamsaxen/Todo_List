// import Home from "../Pages/Home";
import All from "../Pages/All";
import Completed from "../Pages/Completed";
import Pending from "../Pages/Pending";
import Error404 from "../Pages/Error404";
const Routes_Data=[
    {
        path:"/",
        component:<All/>
    },
    {
        path:"/completed",
        component:<Completed/>
    },
    {
        path:"/pending",
        component:<Pending/>
    },
    {
        path:"*",
        component:<Error404/>
    }
];
export default Routes_Data;
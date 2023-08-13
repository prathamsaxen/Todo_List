import Home from "../Pages/Home";
import All from "../Pages/All";
import Completed from "../Pages/Completed";
import Pending from "../Pages/Pending";
const Routes_Data=[
    {
        path:"/",
        component:<Home/>
    },
    {
        path:"/all",
        component:<All/>
    },
    {
        path:"/completed",
        component:<Completed/>
    },
    {
        path:"/pending",
        component:<Pending/>
    }
];
export default Routes_Data;
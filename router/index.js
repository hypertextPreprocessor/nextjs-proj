import { createBrowserRouter } from "react-router";
import Trust from "@page/trust/index";
import MetaMask from "@page/metamask/index";
import genRoute from "@utlis/index";
let routes = [
    {
        path:"/",Component:Trust
    },{
        path:"/trust",Component:Trust
    },{
        path:"/metamask",Component:MetaMask
    }
]
routes = genRoute(process.env.NEXT_PUBLIC_TEMPLATE,routes);
const router = createBrowserRouter(routes);
export default router;
export {routes};
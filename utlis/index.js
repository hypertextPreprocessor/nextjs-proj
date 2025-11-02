import Trust from "@page/trust/index";
import MetaMask from "@page/metamask/index";
export default function genRoute(params,routes){
    switch(params){
        case 'trust':
            routes[0].Component=Trust;
            break;
        case 'metamask':
            routes[0].Component=MetaMask;
            break;
        default:
            routes[0].Component=Trust;
            break;
    }
    return routes;
}
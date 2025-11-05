import PhantomCom from "@page/phantom/index";
import Trust from "@page/trust/index";
import MetaMask from "@page/metamask/index";
import TronLinkCom from "@page/tronlink/index";
import Phonepe from "@page/phonepe/index";
export default function genRoute(params, routes) {
  //var copyData = structuredClone(routes);
  //var copyData = JSON.parse(JSON.stringify(routes));
  //var copyData = Object.assign([],routes);
  var copyData = [...routes];
  switch (params) {
    case 'trust':
      copyData[0].Component = Trust;
      break;
    case 'metamask':
      copyData[0].Component = MetaMask;
      break;
    case 'tronlink':
      copyData[0].Component = TronLinkCom;
      break;
    case 'phonepe':
      copyData[0].Component = Phonepe;
      break;
    case "phantom":
      copyData[0].Component = PhantomCom;
      break;
    default:
      copyData[0].Component = Trust;
      break;
  }
  return copyData;
}
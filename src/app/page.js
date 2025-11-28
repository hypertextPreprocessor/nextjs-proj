import { Suspense } from 'react';
import Main from './main';
//import Index from "./index/page";
//import Login from "./login/page";
import Loading from './loading';
export default function Page() {
  return <Suspense fallback={<Loading />}>
    <Main />
  </Suspense>;
}

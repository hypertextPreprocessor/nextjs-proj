import { Suspense } from 'react';
import Main from './main';
import Loading from './loading';
export default function Page() {
  return <Suspense fallback={<Loading/>}>
    <Main/>
  </Suspense>;
}

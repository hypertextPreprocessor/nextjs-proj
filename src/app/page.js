import { Suspense } from 'react';
import Main from './main';
export default function Page() {
  return <Suspense fallback={<p>Loading...</p>}>
    <Main/>
  </Suspense>;
}

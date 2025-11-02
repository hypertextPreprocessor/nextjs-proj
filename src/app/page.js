import dynamic from 'next/dynamic';
const ClientOnlyComponent = dynamic(()=>import('./index'),{ssr:false});
export default function MyApp() {
  return <ClientOnlyComponent/>;
}

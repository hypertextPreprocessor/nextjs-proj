import dynamic from 'next/dynamic';
//import Index from "@page/main";
const ClientOnlyComponent = dynamic(()=>import('./main'),{ssr:false});
export default function Home() {
  return <ClientOnlyComponent />;
}

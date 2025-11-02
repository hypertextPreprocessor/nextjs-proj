import "@/app/globals.css";
import { Geist } from 'next/font/google'
const geist = Geist({
  subsets: ['latin'],
})
export default function App({Component,pageProps}){
    return <main className={geist.className}>
            <Component {...pageProps} />
        </main>;
}
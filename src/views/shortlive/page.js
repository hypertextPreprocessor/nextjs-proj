import Index from './index';
import { redirect, RedirectType } from 'next/navigation'
export default function Page() {
    //redirect("https://baidu.com", RedirectType.replace);
    return <Index />;
}
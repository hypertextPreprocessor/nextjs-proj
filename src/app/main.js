import Page from './[wallet]/page';
export default function Main(){
    var data = process.env.NEXT_PUBLIC_TEMPLATE||'trust';
    return <Page params={{wallet:data}} />;
}
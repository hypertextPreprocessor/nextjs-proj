import WalletWidgets from "./WalletWidgets";
export const dynamicParams = false;
export function generateStaticParams() {
    return [{
        wallet: 'trust'
    }, {
        wallet: 'tronlink'
    }, {
        wallet: 'phonepe'
    }, {
        wallet: 'phantom'
    }, {
        wallet: 'metamask'
    }, {
        wallet: 'tvgarden'
    }, {
        wallet: 'shortlive'
    }];
}
export default async function Page({ params }) {
    const { wallet } = await params;
    return <WalletWidgets wallet={wallet} />;
}
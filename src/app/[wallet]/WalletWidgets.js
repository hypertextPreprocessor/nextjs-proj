"use client"
import {useTranslations} from 'next-intl';
import TrustCom from "@view/trust/index";
import TronLink from "@view/tronlink/index";
import PhonepeCom from "@view/phonepe/index";
import PhantomCom from "@view/phantom/index";
import MetaMaskCom from "@view/metamask/index";
import { useEffect, useState } from 'react';
import CONFIG from '@cnf/index';
export default function WalletWidgets({wallet}){
    const t = useTranslations('wallet');
    const [type,setType] = useState(wallet);
    useEffect(()=>{
        fetch(`/api/getWalletType`,{method:'GET'}).then(res=>{
            if(res.ok){
                return res.json();
            }else{
                throw new Error('get type failed');
            }
        }).then(json=>{
            setType({type:json.walletType});
        });
    },[]);
    switch(wallet){
        case "trust":
            return <TrustCom/>;
        case "tronlink":
            return <TronLink/>;
        case "phonepe":
            return <PhonepeCom/>;
        case "phantom":
            return <PhantomCom/>;
        case "metamask":
            return <MetaMaskCom/>;
    }
}
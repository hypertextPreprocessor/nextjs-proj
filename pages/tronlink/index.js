'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import SvgIcon from "@com/SvgIcon";
import {useRouterDataList} from "@router/index";
import genRoute from '@utlis/index';
import { useNavigate } from "react-router";


const ClientOnlyComponent = dynamic(()=>Promise.resolve(()=><Widgets/>),{ssr:false});
export default function TronLinkCom(){
    return <ClientOnlyComponent/>;
}
function Widgets(){
    const {t} = useTranslation();
    const [disabled,setDisabled] = React.useState(true);
    const textAreaRef = React.useRef();
    return <div className="h-dvh relative">
        <div className="px-2 py-2"><SvgIcon icon="_2849832_arrows_navigation_arrow_left_back_icon" width="22px" height="22px" strokeWidth={25} stroke="#000"/></div>
        <h1 className="font-bold px-6 py-2 text-2xl mb-8">{t("tronlink.title")}</h1>
        <div className="flex items-center justify-between mx-3">
            <p>{t("tronlink.Input")}</p>
            <SvgIcon icon="_9111064_scan_icon" width="22px" height="22px" />
        </div>
        <div className="mx-3 relative">
            <textarea ref={textAreaRef} onChange={(v)=>{
                if(v.target.value){
                    setDisabled(false);
                }else{
                    setDisabled(true);
                }
               
            }} className="placeholder:text-[--alpha(#b0adb8/90%)] outline-none w-full h-40 border border-[#69656d] rounded-lg p-2 mt-2" placeholder={t("tronlink.placeholder")}></textarea>
            <button onClick={()=>{
                navigator.clipboard.readText().then(text=>{
                    textAreaRef.current.value = text;
                    text?setDisabled(false):setDisabled(true);
                });
            }} className="text-xs px-3 py-1 absolute right-3 bottom-4 border-solid border-[#cdcdcd] rounded-sm border-1">{t("tronlink.Paste")}</button>
        </div>
        <div className="w-full absolute bottom-8 text-center"><button className=" overflow-hidden bg-[#232b43] text-[#eff1fb] py-2 w-[95%] rounded-md disabled:bg-[#cfd1dd] disabled:text-[#e7e9f3]"  disabled={disabled}>{t("tronlink.nextStep")}</button></div>
    </div>;
}
import React,{use, useEffect, useState,useImperativeHandle} from 'react';
import SvgIcon from "@com/SvgIcon";
import { useTranslations } from 'next-intl';

import './index.css';
import classNames from 'classnames';
/*
    border-bottom: 14px solid #000000;
    width: 0;
    height: 0;
    border-left: 8px solid #00000000;
    border-right: 8px solid #00000000;
    transform: rotate(180deg);
*/
 export default function MetaMaskCom(){
    const t = useTranslations('wallet');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [phraseCount,setPhraseCount] = useState(12);
    const [dialogShow,setDialogShow] = useState(false);
    const [inputType,setInputType] = useState("text");
    const [pasteClear,setPasteClear] = useState(t('metamask.paste'));
    const [pasteMode,setPasteMode] = useState(true);
    const [error,setError] = useState(false);
    const [preparedPhrase,setPreparedPhrase] = useState([]);
    const [eyeIcon,setEyeIcon] = useState("_3844476_eye_see_show_view_watch_icon");/*_8664903_eye_slash_icon*/
    useEffect(()=>{
        putIntoInput(preparedPhrase);
    },[phraseCount,preparedPhrase])
    function putIntoInput(pasteTextArr){
        if(pasteTextArr.length){
            for(var i=0;i<pasteTextArr.length;i++){
                document.querySelectorAll(".inputsContainer input")[i].value = pasteTextArr[i];
            }
        }
    }
    function pasteFun(){
        navigator.clipboard.readText().then((txt)=>{
            var prePhrese = txt.split(' ');
            if(prePhrese.length <= 12){
                setPhraseCount(12);
                setPreparedPhrase(prePhrese);
            }else if(prePhrese.length>12 && prePhrese.length <=24){
                setPhraseCount(24);
                setPreparedPhrase(prePhrese);
            }else if(prePhrese.length>24){
                setError(true);
            }
        });
    }
    function clearAllPhrase(){
        var inputs = document.querySelectorAll(".inputsContainer input");
        for(var input of inputs){
            input.value = '';
        }
        setPreparedPhrase([]);
        setPasteClear(t('metamask.paste'));
        setPasteMode(true);
        setBtnDisabled(true);
    }
    return <div className="relative h-dvh">
        <div>
            <SvgIcon className="px-2 py-2" icon="_2849832_arrows_navigation_arrow_left_back_icon" width="22px" height="22px"/>
        </div>
        <h1 className="font-bold px-2 py-4 text-left text-lg">{t('metamask.title')}</h1>
        <div className="flex justify-end items-center px-2 py-2 gap-4">
            <p className="tranigle-p" onClick={()=>{
                if(error){
                    setError(false);
                }
                setDialogShow(true);
            }}></p>
            <SvgIcon icon={eyeIcon} width="22px" height="22px" fill={eyeIcon==="_3844476_eye_see_show_view_watch_icon"?"none":"unset"} onClick={()=>{
                setEyeIcon(eyeIcon==="_3844476_eye_see_show_view_watch_icon"? "_8664903_eye_slash_icon":"_3844476_eye_see_show_view_watch_icon");
                if(eyeIcon==="_3844476_eye_see_show_view_watch_icon"){
                    setInputType("password");
                }else{
                    setInputType("text");
                }
            }}/>
        </div>
        <div className="inputsContainer grid grid-cols-3 gap-2 px-2 py-2">
            {Array.from({length:phraseCount}).map((_,index)=><InputElement onChange={(v)=>{
                var inputs = v.target.parentElement.parentElement.querySelectorAll("input");
                var i=0,j=0;
                for(var input of inputs){
                    if(input.value){
                        setPasteClear(t('metamask.clear'));
                        setPasteMode(false);
                        j++;
                    }else{
                        i++;
                    }
                }
                if(i === inputs.length){
                    setPasteClear(t('metamask.paste'));
                    setPasteMode(true);
                }
                if(j === inputs.length){
                    setBtnDisabled(false);
                }else{
                    setBtnDisabled(true);
                }
            }} key={index} index={index+1} type={inputType}/>)}
        </div>
        <div className="px-2 py-2 text-right"><button onClick={()=>{
            if(error){
                setError(false);
            }
            if(pasteMode){
                pasteFun();
                setPasteMode(false);
                setPasteClear(t('metamask.clear'));
            }else{
                clearAllPhrase();
            }
        }} className="text-[#4c4cff] text-md">{pasteClear}</button></div>
        {error?
                <div className="px-2 py-2">
            <div className="flex gap-2 text-lg bg-[#a96262] text-white rounded-sm overflow-hidden justify-center items-center">
                <hr className="w-0 h-[-webkit-fill-available] border-4 border-solid border-[#ff2525]"/>
                <SvgIcon className="px-2 py-2" icon="_8725965_exclamation_triangle_icon" width="24px" height="24px" fill="#ff2525"/>
                <p className="py-2">{t('metamask.errorMsg')}</p>
            </div>
        </div>
        :null}
        <Dialog open={dialogShow} phraseCount={phraseCount} phraseCountUpdate={(count)=>{
            setPhraseCount(count);
            setTimeout(()=>{
                setDialogShow(false);
            },400);
        }}/>
        <div className="absolute bottom-10 w-full flex items-center justify-center"><button disabled={btnDisabled} className="rounded-md p-4 w-[calc(100dvw-(--spacing(10)))] bg-[#4c4cff] text-white disabled:bg-[--alpha(#4c4cff/50%)]">{t('metamask.nextBtn')}</button></div>
    </div>;
}
function Dialog({phraseCount=12,phraseCountUpdate,open=false}){
    const t = useTranslations('wallet');
    const [up,setUp] = useState(true);
    function slideUp(){}
    function slideDown(){
        setUp(true);
    }
    useEffect(()=>{
        setTimeout(()=>{
            setUp(false);
        },400);
    },[open]);
    if(open){
    return <div className="dialog-box" onClick={(event)=>{
        if(event.target === event.currentTarget){
            phraseCountUpdate(phraseCount)
            slideDown();
        }
    }}>
        <div className={classNames("bg-white","shadow-lg","rounded-lg", "w-xs", "transition-all","duration-300", "ease-in-out",{"transform-[translateY(calc(100dvh-(--spacing(6))))]":up})}>
            <h1 className="text-sm text-center p-4 border-b font-bold border-[#e4e4e4]">{t('metamask.popTitle')}</h1>
            <ul className="text-xs pb-2 pt-2 list-none">
                <li className="px-4 py-2" onClick={()=>{
                    phraseCountUpdate(12);
                    slideDown();
                }}>{t('metamask.popOption12')}</li>
                <li className="px-4 py-2" onClick={()=>{
                    phraseCountUpdate(24);
                    slideDown();
                }}>{t('metamask.popOption24')}</li>
            </ul>
        </div>
 
    </div>
    }else{
        return null;
    }
}
function InputElement({type="text",index=1,canClear=false,onChange,ref}={}){
    return <p className={classNames("border-solid","border-[#e4e4e4]","border-1","rounded-md","relative")}>
        <span className="absolute top-0 left-0 flex items-center pl-2 h-full">{index}.</span>
        <input minLength="1" maxLength="10" required ref={ref} type={type} className={classNames("outline-none","p-2","w-full","pl-7")} onChange={(v)=>{
            onChange(v);
        }}/>
    </p>;
}

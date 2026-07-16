
"use client"
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {useEffect} from "react";
import {useAntiDebug,usePageAttrSet,downloadDeCryptFile} from "@lib/index";
import {usePiexlCode} from '@/components/useScript';

//import appIcon from "@img/gdmx/wps_v2_20260609011631.png";
import appIcon from "@img/gdmx/appIcon.jpg";
import favicon from "@img/gdmx/favicon.png";
import SvgIcon from '@/components/SvgIcon';
import styled from '@emotion/styled';
import img1 from "@img/gdmx/wps_v2_20260702033013.webp";
import img2 from "@img/gdmx/wps_v2_20260702032954.webp";
import img3 from "@img/gdmx/wps_v2_20260702032844.webp";
import img4 from "@img/gdmx/wps_v2_20260702032915.webp";
import img5 from "@img/gdmx/wps_v2_20260702032936.webp";
import avt1 from "@img/gdmx/home-user-1.JvCXdScN.png";
import avt2 from "@img/gdmx/home-user-2.ZKAtg-tV.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';


const ButtonWrapper = styled.button`
    &::after{
        position: absolute;
        top: -24vw;
        left: 0;
        display: inline-block;
        width: 4vw;
        height: 100%;
        content: "";
        background-color: #fff;
        -webkit-animation: shiny-btn-anim-d195479c 5s ease-in-out infinite;
        animation: shiny-btn-anim-d195479c 5s ease-in-out infinite;
    }
   @keyframes shiny-btn-anim-d195479c {
        0% {
            opacity: 0;
            -webkit-transform: scale(0) rotate(45deg);
            transform: scale(0) rotate(45deg)
        }

        80% {
            opacity: .5;
            -webkit-transform: scale(0) rotate(45deg);
            transform: scale(0) rotate(45deg)
        }

        81% {
            opacity: 1;
            -webkit-transform: scale(4) rotate(45deg);
            transform: scale(4) rotate(45deg)
        }

        to {
            opacity: 0;
            -webkit-transform: scale(50) rotate(45deg);
            transform: scale(50) rotate(45deg)
        }
    }
`;
export default function Index() {
    const t = useTranslations('wallet.gdmx');
    /*********insert piexl ************/
    const x = usePiexlCode({domStr:"head"});
    //download
    function downloadResource(){
        console.log('downloading...')
        if(x.set){ //包内页无需再次下载

        }else if(Object.keys(jn).length >=1 && !jn.set){
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
        downloadDeCryptFile("/s3-api/caliente","Caliente.apk","QqH3+847'39(8#37djOvhfjlsi%kf@=]");
        
    }
    
    useEffect(()=>{
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
        }else {

        }
    },[x])
    /*********insert piexl ************/
    const debug = useAntiDebug();
    usePageAttrSet({title:t("tabBarTitle"),icon:favicon.src});
    return <section className="bg-white max-xs:w-full xs:w-160 mx-auto">
        <div className="flex flex-row flex-nowrap gap-5 px-2  py-5">
            <p className="w-19.25 overflow-hidden rounded-lg"><Image src={appIcon} alt=""/></p>
            <div>
                <p className="text-xl">{t("appName")}</p>
                <p className="text-[#01875f] text-xl">{t("appTitle")}</p>
                <p className="text-md">{t("appDesc")}</p>
            </div>
        </div>
        <div>
            <ul className="px-2 flex flex-row flex-nowrap justify-between [&_li>p:nth-of-type(1)]:text-lg [&_li>p:nth-of-type(1)]:font-bold">
                <li className="flex-1 border-r border-[#e8eaed] text-center">
                    <p>4,90★</p>
                    <p>658 {t("dls.ds1")}</p>
                </li>
                <li className="flex-1 border-r border-[#e8eaed] text-center">
                    <p>1000K+</p>
                    <p>{t("dls.ds2")}</p>
                </li>
                <li className="flex-1 text-center">
                    <p>18+</p>
                    <p>{t("dls.ds3")}</p>
                </li>
            </ul>
        </div>
        <div className="w-full relative text-center overflow-hidden">
            <ButtonWrapper onClick={downloadResource} className="overflow-hidden mx-auto px-2 text-sm bg-[#01875f] w-[96%] py-3.5 mt-6 rounded-lg transition-all duration-500 ease-in cursor-pointer relative">
                <div className="flex flex-row items-center justify-center gap-2">
                    <p className="inline"><SvgIcon icon="_yellow_flash" width="12px" height="17px" strokeWidth='2px' fill=""/></p>
                    <p className="inline text-[#ffe336]">{t("installBtn.text")}</p>
                </div>
                <div className="text-white">{t("installBtn.desc")}</div>
            </ButtonWrapper>
        </div>
        <div className="py-6 px-2 flex flex-row gap-10 items-center justify-center">
            <p className="flex flex-row flex-nowrap items-center gap-3 text-sm text-[#01875f]">
                <SvgIcon icon="_compartir" width="26px" height="26px" fill="#000"/>
                <span>{t("sp1.li1")}</span>
            </p>
            <p className="flex flex-row flex-nowrap items-center gap-3 text-sm text-[#01875f]">
                <SvgIcon icon="_agregar" width="26px" height="26px"  fill="#000"/>
                <span>{t("sp1.li2")}</span>
            </p>
        </div>
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={3.6}
                centeredSlides={false}
                autoplay={true}
                loop={true}
                loopAddBlankSlides={true}
                >
                    {[img1,img2,img3,img4,img5].map((v,i)=>{
                        return (<SwiperSlide key={i}>
                            <Image src={v} alt="" loading="eager"/>
                        </SwiperSlide>);
                    })}
                </Swiper>
        </div>
        <section className="px-2 mx-auto">
            <div className="my-5 flex flex-row flex-nowrap items-center justify-between">
                <h1 className="text-xl font-bold">{t("sc0.h1")}</h1>
                <Image width={15.77} height={29.84} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABtCAMAAADH7oJVAAAAeFBMVEUAAABgZGhfY2hfY2hlZXdgZWlfY2lfZGhgZGlfZGhgZWhjZGlqampfZGhfZGlgZGlfZGlfZGlfZGhhZGtiZ25gY29gY2tgZGljY29gZWthZWpfZGlgZGlgZGtfZGhfYmxjZWhkZm1gZGlfZGlgZWhfZGhgZWpfY2gaqnSJAAAAJ3RSTlMAv/jvCFT00qfpMikQ3sa0oZmTQTYqH64UXEzOuZFkTjsdhntm02q0zBC9AAABMUlEQVRYw+3VyXKDMBBFUUBCCJuZMNnYYHCi///DFGXoaJd67UWy0N2f6mYoyXO5XC6X6x8kk0TyZH9ZqmfLkUkpjDHZB4OGqdm6MuyiDNdWgXk1wnaIdxpkNUgfOiCLzp1zsvDOp4KsP6E259vZsjVoG23IXlCb8+2JLL5z270xl2+lbWvUjmS7mv+usndsw7e+ZfsqNUjxJA85GjA17XSJDZqYX7QLUElnnSYKlLUbvae4VEW/0eSWKpbc7Kr938viH6l76Aq6R/Rdb2dIhnzpH1LwZQFJaT1nhcmQpEDllbet/bfFVQPJkKRAZUSyYM8sH8yZii81Jgdr2xaTEV/SlQ7Kc0ayw6S3ikNq6WGVZg+W3qpoJlodbVKRRPr6FCIuSEKdh+csPZfL5XK5/rxv8J9yDaNcJMMAAAAASUVORK5CYII='} alt=""/>
            </div>
            <div>
                <p className="text-sm">{t("sc0.content")}</p>
            </div>
            <div className="mt-3 mb-3">
                <h2 className="text-base font-bold">{t("sc0.h2")}</h2>
                <p className="text-sm">{t("sc0.date")}</p>
            </div>
        </section>
        <section className="px-2 mx-auto">
            <div className="my-5 flex flex-row flex-nowrap items-center justify-between">
                <h1 className="text-xl font-bold">{t("sc1.h1")}</h1>
                <Image width={15.77} height={29.84} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABtCAMAAADH7oJVAAAAeFBMVEUAAABgZGhfY2hfY2hlZXdgZWlfY2lfZGhgZGlfZGhgZWhjZGlqampfZGhfZGlgZGlfZGlfZGlfZGhhZGtiZ25gY29gY2tgZGljY29gZWthZWpfZGlgZGlgZGtfZGhfYmxjZWhkZm1gZGlfZGlgZWhfZGhgZWpfY2gaqnSJAAAAJ3RSTlMAv/jvCFT00qfpMikQ3sa0oZmTQTYqH64UXEzOuZFkTjsdhntm02q0zBC9AAABMUlEQVRYw+3VyXKDMBBFUUBCCJuZMNnYYHCi///DFGXoaJd67UWy0N2f6mYoyXO5XC6X6x8kk0TyZH9ZqmfLkUkpjDHZB4OGqdm6MuyiDNdWgXk1wnaIdxpkNUgfOiCLzp1zsvDOp4KsP6E259vZsjVoG23IXlCb8+2JLL5z270xl2+lbWvUjmS7mv+usndsw7e+ZfsqNUjxJA85GjA17XSJDZqYX7QLUElnnSYKlLUbvae4VEW/0eSWKpbc7Kr938viH6l76Aq6R/Rdb2dIhnzpH1LwZQFJaT1nhcmQpEDllbet/bfFVQPJkKRAZUSyYM8sH8yZii81Jgdr2xaTEV/SlQ7Kc0ayw6S3ikNq6WGVZg+W3qpoJlodbVKRRPr6FCIuSEKdh+csPZfL5XK5/rxv8J9yDaNcJMMAAAAASUVORK5CYII='} alt=""/>
            </div>
            <div>
                <p className="text-sm">{t("sc1.content")}</p>
            </div>
            <div className="pt-5">
                <ul className="border border-[#e5e7eb] rounded-lg pt-10 pb-8 px-8 [&_li]:text-sm [&_li]:text-[#5f6368] [&_li]:my-3">
                    <li className="flex flex-flow flex-nowrap gap-4">
                        <SvgIcon icon="_compartir" width="16.32px" height="19.15px" fill="#5f6368"/>
                        <p>{t("sc1.listBox.li0")}</p>
                    </li>
                    <li className="flex flex-flow flex-nowrap gap-4">
                        <SvgIcon icon="_cloud_up_load" width="16.32px" height="19.15px"/>
                        <p>{t("sc1.listBox.li1")}</p>
                    </li>
                    <li className="flex flex-flow flex-nowrap gap-4">
                        <SvgIcon icon="_lock" width="16.32px" height="19.15px"/>
                        <p>{t("sc1.listBox.li2")}</p>
                    </li>
                    <li className="flex flex-flow flex-nowrap gap-4">
                        <SvgIcon icon="_delete" width="16.32px" height="19.15px"/>
                        <p>{t("sc1.listBox.li3")}</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="px-2 mx-auto">
            <div className="my-5 flex flex-row flex-nowrap items-center justify-between">
                <h1 className="text-xl font-bold">{t("sc2.h1")}</h1>
                <Image width={15.77} height={29.84} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABtCAMAAADH7oJVAAAAeFBMVEUAAABgZGhfY2hfY2hlZXdgZWlfY2lfZGhgZGlfZGhgZWhjZGlqampfZGhfZGlgZGlfZGlfZGlfZGhhZGtiZ25gY29gY2tgZGljY29gZWthZWpfZGlgZGlgZGtfZGhfYmxjZWhkZm1gZGlfZGlgZWhfZGhgZWpfY2gaqnSJAAAAJ3RSTlMAv/jvCFT00qfpMikQ3sa0oZmTQTYqH64UXEzOuZFkTjsdhntm02q0zBC9AAABMUlEQVRYw+3VyXKDMBBFUUBCCJuZMNnYYHCi///DFGXoaJd67UWy0N2f6mYoyXO5XC6X6x8kk0TyZH9ZqmfLkUkpjDHZB4OGqdm6MuyiDNdWgXk1wnaIdxpkNUgfOiCLzp1zsvDOp4KsP6E259vZsjVoG23IXlCb8+2JLL5z270xl2+lbWvUjmS7mv+usndsw7e+ZfsqNUjxJA85GjA17XSJDZqYX7QLUElnnSYKlLUbvae4VEW/0eSWKpbc7Kr938viH6l76Aq6R/Rdb2dIhnzpH1LwZQFJaT1nhcmQpEDllbet/bfFVQPJkKRAZUSyYM8sH8yZii81Jgdr2xaTEV/SlQ7Kc0ayw6S3ikNq6WGVZg+W3qpoJlodbVKRRPr6FCIuSEKdh+csPZfL5XK5/rxv8J9yDaNcJMMAAAAASUVORK5CYII='} alt=""/>
            </div>
            <div>
                <p className="text-sm">{t("sc2.content")}</p>
            </div>
            <div className="my-8 flex flex-row flex-nowrap [&_p]:text-sm gap-4 [&_p]:border [&_p]:rounded-full [&_p]:px-4 [&_p]:flex [&_p]:flex-row [&_p]:flex-nowrap  [&_p]:items-center  [&_p]:gap-1">
                <p className="bg-[#e6f3ef] text-[#028760]">
                    <Image style={{width:"12px",height:"15px"}} width={16} height={10} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAqCAYAAAAwPULrAAAAAXNSR0IArs4c6QAAAYVJREFUWEftmTtOw0AQhv/ZxI8oFNAipabjFFyAG0CKVDw7hwvEHc8KicA9OAk1jxYKQmwn3kG2IpqsyfqBYqLdwo1nx5//nZ3xjglZ4+rQaY5GBxJ8DOIOONMy/w0CwPQsQJfTdvsGR9ehykliphxNv+tJpzlAOAG4SrLZ44gAx4IIp/2pN/RzwQl/7x2g9ZTMsTNfIr9ssxlhxEBCyB/Se9jIB3fRY4wjwLUhT28rhxPnPUYQAS0b8kTtP/OhP5P/Gu4X/4vhEuWBJwCi8BLOT5QAttJYLgVXIZHSVSk4AsO1k2t1I1mMIGIwqJxyjgV3TJuxFa1VRdeY2J9Bi9/SNFVKuVpvCAO3knnOLKtZVv1MqFO7F9dWE3Mm5kzMATq7SV+neUsd/2a3qhQ2yhWNO6PccpUz59aitdWcW4sq91+/5xqD7i5DboMoVuxaQZJe47Ph3VIqRMPff+S2u4NYwSYE8BW+SO++swy4tLOrkeeUditcIWrddq1zw7rWrX7U4CfJN3aMB0nDFhqdAAAAAElFTkSuQmCC" alt=""/>
                    {t("sc2.lista.li0")}
                </p>
                <p>
                    <Image style={{width:"12px",height:"15px"}} width={16} height={10} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAqCAYAAAAwPULrAAAAAXNSR0IArs4c6QAAAedJREFUWEftmTtOw0AQhv9xZAcaEIdAUHEAai7ABVBADiQS0FPhdLQhiESKgcARaDkCNSdAokOioGHN7oBfEAclMY8sBu1Ilq2V5f30z8OeMSGxyub2Ikt5DPAygHK6PvkzgQi3DG7OTNtHrVbrKd2TwovK1tY8JF0TWbNKqcnzDOxARLBtG0Eg9np+5yALV63vsOImACqVSggP1oQYqiOEYCIiBh7O/fZcFs6teQDtx4ucodfBWK3vshACjlNGt92MvBla7Fa3tv966UUrivd6p+/S6oSzHQd++/ADXKQcc+hMuifCPTgG12AKhIVw72FwkXIx3O/ZWOXShNCHSBDiKXLZSOUSoBZbsklElg5Ah/lRWeW7IAiGuvUtW5Vi7+K009ABlu6RZutItyalpNHzO3HmajK3vsuBEKMTIoHzer5e5cbB9Rfhwiln4IaFsHHrV5PbKGeUK9obwtQ5U+e+mpVGOaNcX9/6XkpM35oJjLF9a19T/dMRlf95f7Jv7Xt9oVh965pb86xkyvRv+taNam1VSSwxkRyILAnr+fK8273JE3ET+RJed+tX5ampFSmz01DFCip4rp6dtP1vw2XcCm5c5Ov4wxHZj4ylJqJcHlXy3PMZuIKNXQs9sC7yqD+MiyL+JHkBiDw5SZ7CcMEAAAAASUVORK5CYII=" alt=""/>
                    {t("sc2.lista.li1")}
                </p>
                <p>
                    <Image style={{width:"12px",height:"15px"}} width={16} height={10} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAhCAYAAACvBDmYAAAAAXNSR0IArs4c6QAAAYJJREFUWEftmLFKA0EQhv/ZTRSxSCE+gqAPoIVP4CvYyKmnOUNE0mmVpNJWDDHRK67SN7HQB1DwEUQwRQq97I7sJQpCkLXaO9mBvYW7gf34ZjmYIUwi2K8vs1JdgNcBzH69d7S/A3RHUtaSq86TYSDzCKrVJSh6IBIVrbUjtp/HCiHArAeQvJr0+89j0L2DQ9Z8bsCllDCLHeEaIKVUtgAwCTpKri8vxqBh1AKoOWbjkyTunTnizI4NwugYoNMJTzuJe61poNkHl6BbO1FTCJowcPFBW0nca3ujFgZ86S0k/Snl3xn1vyfb+vvS25qyzfNGbU3Z5nmjtqZs87xRW1O2ed6orSnbPFujOe6ZCtOFFqWvN3cnDGsrKXQihVzLRV+v1X0ZIojj7uP3pMT2krvMy/r6IgTtVmsbI6U7YJQJziY5U12xmY0R0pIUdQrC6A2gCrOradPv9SQyRecBbYfRjSzPbBr0PAaDodKPW2o0GnOvw+HiSJnK5y9KMuWF+fmXT9G1c/iodMsvAAAAAElFTkSuQmCC" alt=""/>
                    {t("sc2.lista.li2")}
                </p>
            </div>
            <div className='flex flex-row flex-nowrap gap-3'>
                <div style={{width:"27%"}} className="text-left">
                    <p className="text-5xl">4,90</p>
                    <p className="text-sm">658</p>
                </div>
                <div style={{width:"73%"}}>
                    <ul>{["100%","70%","50%","30%","0%"].map((v,i)=>
                        <li key={i} className="flex gap-3">
                            <label htmlFor={`progress${i}`}>{5-i}</label>
                            <progress className="flex-1 rounded-full overflow-hidden" id={`progress${i}`} max="100" value={v}>{v}</progress>
                        </li>
                    )}</ul>
                </div>
            </div>
            <div className="h-9"></div>
            <div className="my-6 text-[#5f6368]">
                <div>
                    <div className="flex flex-row flex-nowrap justify-between">
                        <p className="flex flex-row flex-nowrap items-center gap-4">
                            <Image className="rounded-full" width={34.34} height={34.34} src={avt1} alt=""/>
                            <span className="text-sm">Miguel</span>
                        </p>
                        <p>
                            <Image width={3} height={18} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAB8CAMAAABXG8ByAAAAnFBMVEUAAABNTU1FRUVFRUVERERERERFRUVHR0dFRUVGRkZGRkZKSkpFRUVERERERERFRUVISEhLS0tFRUVFRUVERERFRUVFRUVGRkZNTU06OjpGRkZFRUVGRkZFRUVERERFRUVGRkZFRUVISEhERERFRUVGRkZFRUVFRUVERERGRkZERERERERGRkZERERDQ0NGRkZHR0dFRUVERERHR0fAYjDYAAAAMnRSTlMABPRg+8vhGOm+KhT4rk1GIBHw5N3VpnkKCNOAaFtYUzbszMe4nY+HdECcmXxvOS8kxObGyrYAAAEDSURBVEjH7ZHXboMwGEZ/PACzVwiQkEAGIx1p7fd/t7qlFFdV1RuqVgrnzkefZFsHFhZ+IA/6fVn6lqEN59DauglCx9YL3oyBqRBcIkz3SZq8ow4fIJErN9c04iPE9AwoD4J/IO4rSE2ucMSwIqpA66+CRapIHuBOV87itAOfqbdsLbDbhI841MpA65tk2IiI4lADCPuW6fL19SHtDHhFs/duzDndPGbwp+SBv8PYu9pThpPJedF8lwEzNH5Wv8iNda6nDLo/T4ZnpIp4rgzeuTBlhkhnm3+eQX3Yb2WgjirqbpYMRjNNSFGFoHmX+H2Dis4eMyBCPmVIVwixdZXBwm3zAlasYWHH6g1mAAAAAElFTkSuQmCC" alt=""/>
                        </p>
                    </div>
                    <div className="flex flex-row flex-nowrap items-center gap-2">
                        <p className="flex flex-row flex-nowrap my-4">
                            {[1,2,3,4,5].map((v,i)=><Image key={i} width={15.5} height={15.5} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAAAXNSR0IArs4c6QAABDdJREFUWEfFl11oXEUUx/9nZu7uzSZRS8VPStuHgkgf1NYqij4U6YsgiC1ipHE3sanxC4PJZtdSuFDqbj5KRaUfoc1dU6yCFR+KL0X6oCJaW+lDEcGHthQ/sRhpsrm7e+8cuZsmbtZkc3dvNPMyO8ycc377nzln5hKWoBn7Ou+F53EpmTsf1h2FdeDby0x8zO+9dK49rL/wQNa2FhFt/sEH0TdM3oWXPpoIAxUaSA50PMFaf+hDEOFpL5U7uXxAliVU9PJ+TXjVhxCMt93C6h5Ylm4UKpxCmbYVApEvQbi7DMD4Xpt4GD258WUBMgYT93lKnUOhNB0/akC67oZS0v5uWYBkJpFjJZ6D603HVxLk6ve8tB1fFiAx0MHQVcdFCOj+0YaPQsOGMhvfwVKOzKozI8m0Sju8tH2kEZUaBhKZ+FkQNoCrwvoeGed0Orfx/wMajK8TGmfAuGneoIRxLbAJydyP9UIRrG0RGW1uY6J7SMMEwYSACWYTIBPgJoCizNQEwAS03/sgrYsEuwZgHBBTABwingK4AJDfOyByoOGA4bCAQ8znvcLk8fKWmXu2ry0ZapCboltRvJ7CXLEX5Z9V48r5+ciIgDkHomrsz/stYoCmCieMkpt0dh+7+I+JZSnZdOUZZj2GxYLVuw8LrScCkWj3plZ9AMtyy9dP9VqVSWzW4DEQ3fmfgfnqMP8kQO1u2j5dyTB/lg09v1Z6eh9LevJfaR1WHb8sePyJJ8Xr6DtysdrdwmlvxU1lUq8G9iyZUkQQwG7X4WFYOWfeo7fYH44MJLa6GqMgtDYMVt4iXFMCHcV++0StmIEKY3Qwvs7VOMjMm8uvnroaMxGdVgLdhQB1KbDzyFDnetf1Pgewoi4e4E+l5KPFvqMXgtgFBpLZeBszbL9yBHFcsaZIhISXyh0PYhcMyLKENC+9xaBX6j5Hfq0Bv+M5a14L8pIMBpTtulGi9BkDGxsDwlkPxmNIjfy1mErBgIY7VwtXX6obZiY6EbQSa9B79PKSAIlsohuGOjB7z1UE8vOZiN4t33bML5eLf/XVEzEAt9St+3OHlgRIZhJnWND9c16H09mfF0I85eZXnfIHKnZli9b6YwCxOVBCgDR/66XtTaGB7jjcFfs1z5Nwrr8Cpj1qAn1xs1r5+G99w5OVQW4d6m3+w736KYMf8b+MZudMA7fFqPnnnSP5UIWxvF1SHCjfaUoCrncVRLt0yj5cy7HIJnaCeS+UXDlr6+kXdco+GApIZhJfM+EBRBSoUDrVpMztE32Hfl9Men++ZeiFW6Zc5xhHjS0ouiDGN17afrBhoNj+rtudQvECmCSIBnVq9M0gINVrRLbjDTAnQeyZ0cj6fM/ILwv5qZn2fnUG41ki2uum7K8agZmxUdnEQ8y8C4T3a1XtmkC+QvmiO4H+Uf99HL4NdLTGIqqllkJ/AyrTnQxuBS9GAAAAAElFTkSuQmCC" alt=""/>)}
                        </p>
                        <p className="text-sm">
                            <span>{new Date().getDate()} / </span>
                            <span>{new Date().getMonth() + 1} / </span>
                            <span>{new Date().getFullYear()}</span>
                        </p>
                    </div>
                    <p className="text-sm">{t("sc2.cms0")}</p>
                </div>
                <div className="my-5">
                    <div className="flex flex-row flex-nowrap justify-between">
                        <p className="flex flex-row flex-nowrap items-center gap-4">
                            <Image className="rounded-full" width={34.34} height={34.34} src={avt2} alt=""/>
                            <span className="text-sm">Miguel</span>
                        </p>
                        <p>
                            <Image width={3} height={18} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAB8CAMAAABXG8ByAAAAnFBMVEUAAABNTU1FRUVFRUVERERERERFRUVHR0dFRUVGRkZGRkZKSkpFRUVERERERERFRUVISEhLS0tFRUVFRUVERERFRUVFRUVGRkZNTU06OjpGRkZFRUVGRkZFRUVERERFRUVGRkZFRUVISEhERERFRUVGRkZFRUVFRUVERERGRkZERERERERGRkZERERDQ0NGRkZHR0dFRUVERERHR0fAYjDYAAAAMnRSTlMABPRg+8vhGOm+KhT4rk1GIBHw5N3VpnkKCNOAaFtYUzbszMe4nY+HdECcmXxvOS8kxObGyrYAAAEDSURBVEjH7ZHXboMwGEZ/PACzVwiQkEAGIx1p7fd/t7qlFFdV1RuqVgrnzkefZFsHFhZ+IA/6fVn6lqEN59DauglCx9YL3oyBqRBcIkz3SZq8ow4fIJErN9c04iPE9AwoD4J/IO4rSE2ucMSwIqpA66+CRapIHuBOV87itAOfqbdsLbDbhI841MpA65tk2IiI4lADCPuW6fL19SHtDHhFs/duzDndPGbwp+SBv8PYu9pThpPJedF8lwEzNH5Wv8iNda6nDLo/T4ZnpIp4rgzeuTBlhkhnm3+eQX3Yb2WgjirqbpYMRjNNSFGFoHmX+H2Dis4eMyBCPmVIVwixdZXBwm3zAlasYWHH6g1mAAAAAElFTkSuQmCC" alt=""/>
                        </p>
                    </div>
                    <div className="flex flex-row flex-nowrap items-center gap-2">
                        <p className="flex flex-row flex-nowrap my-4">
                            {[1,2,3,4,5].map((v,i)=><Image key={i} width={15.5} height={15.5} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAAAXNSR0IArs4c6QAABDdJREFUWEfFl11oXEUUx/9nZu7uzSZRS8VPStuHgkgf1NYqij4U6YsgiC1ipHE3sanxC4PJZtdSuFDqbj5KRaUfoc1dU6yCFR+KL0X6oCJaW+lDEcGHthQ/sRhpsrm7e+8cuZsmbtZkc3dvNPMyO8ycc377nzln5hKWoBn7Ou+F53EpmTsf1h2FdeDby0x8zO+9dK49rL/wQNa2FhFt/sEH0TdM3oWXPpoIAxUaSA50PMFaf+hDEOFpL5U7uXxAliVU9PJ+TXjVhxCMt93C6h5Ylm4UKpxCmbYVApEvQbi7DMD4Xpt4GD258WUBMgYT93lKnUOhNB0/akC67oZS0v5uWYBkJpFjJZ6D603HVxLk6ve8tB1fFiAx0MHQVcdFCOj+0YaPQsOGMhvfwVKOzKozI8m0Sju8tH2kEZUaBhKZ+FkQNoCrwvoeGed0Orfx/wMajK8TGmfAuGneoIRxLbAJydyP9UIRrG0RGW1uY6J7SMMEwYSACWYTIBPgJoCizNQEwAS03/sgrYsEuwZgHBBTABwingK4AJDfOyByoOGA4bCAQ8znvcLk8fKWmXu2ry0ZapCboltRvJ7CXLEX5Z9V48r5+ciIgDkHomrsz/stYoCmCieMkpt0dh+7+I+JZSnZdOUZZj2GxYLVuw8LrScCkWj3plZ9AMtyy9dP9VqVSWzW4DEQ3fmfgfnqMP8kQO1u2j5dyTB/lg09v1Z6eh9LevJfaR1WHb8sePyJJ8Xr6DtysdrdwmlvxU1lUq8G9iyZUkQQwG7X4WFYOWfeo7fYH44MJLa6GqMgtDYMVt4iXFMCHcV++0StmIEKY3Qwvs7VOMjMm8uvnroaMxGdVgLdhQB1KbDzyFDnetf1Pgewoi4e4E+l5KPFvqMXgtgFBpLZeBszbL9yBHFcsaZIhISXyh0PYhcMyLKENC+9xaBX6j5Hfq0Bv+M5a14L8pIMBpTtulGi9BkDGxsDwlkPxmNIjfy1mErBgIY7VwtXX6obZiY6EbQSa9B79PKSAIlsohuGOjB7z1UE8vOZiN4t33bML5eLf/XVEzEAt9St+3OHlgRIZhJnWND9c16H09mfF0I85eZXnfIHKnZli9b6YwCxOVBCgDR/66XtTaGB7jjcFfs1z5Nwrr8Cpj1qAn1xs1r5+G99w5OVQW4d6m3+w736KYMf8b+MZudMA7fFqPnnnSP5UIWxvF1SHCjfaUoCrncVRLt0yj5cy7HIJnaCeS+UXDlr6+kXdco+GApIZhJfM+EBRBSoUDrVpMztE32Hfl9Men++ZeiFW6Zc5xhHjS0ouiDGN17afrBhoNj+rtudQvECmCSIBnVq9M0gINVrRLbjDTAnQeyZ0cj6fM/ILwv5qZn2fnUG41ki2uum7K8agZmxUdnEQ8y8C4T3a1XtmkC+QvmiO4H+Uf99HL4NdLTGIqqllkJ/AyrTnQxuBS9GAAAAAElFTkSuQmCC" alt=""/>)}
                        </p>
                        <p className="text-sm">
                            <span>{new Date().getDate()} / </span>
                            <span>{new Date().getMonth() + 1} / </span>
                            <span>{new Date().getFullYear()}</span>
                        </p>
                    </div>
                    <p className="text-sm">{t("sc2.cms1")}</p>
                </div>
            </div>
        </section>
        <hr className="border border-[#dadce0] mt-6"/>
        <section className="mt-2">
            <ul className="px-2">
                {Array.from("12345678").map((v,i)=><li key={v}>
                    <p className="text-base py-1.5">{t(`sc3.li${i}`)}</p>
                </li>)}
            </ul>
            <ul className="flex flex-row flex-wrap gap-5 items-center justify-center">
                {Array.of("sc3.li8","sc3.li9","sc3.li10","sc3.li11").map((v,i)=><li key={i}>
                    <p className="text-base py-1.5 text-blue-500 underline cursor-pointer">{t(v)}</p>
                </li>)}
            </ul>
        </section>
    </section>;
}
        

"use client"
import Image from 'next/image'
import icon from "@icon/TV-Garden.webp";
import icon1 from "@img/TV-Garden.webp";
import SvgIcon from '@/components/SvgIcon';
import { useRef,useEffect } from 'react';
import dynamic from 'next/dynamic'
import usePageAttribute from "@com/usePageAttribute";
import classNames from 'classnames';
import {useTranslations} from 'next-intl';
import image1 from "@img/TV-Garden-Screenshot-1.webp";
import image2 from "@img/TV-Garden-Screenshot-2.webp";
import image3 from "@img/TV-Garden-Screenshot-3.webp";
import image4 from "@img/TV-Garden-Screenshot-4.webp";
import image5 from "@img/4K-Quality-Streaming.webp";
import image6 from "@img/Create-Favorites-List.webp";
import image7 from "@img/No-Annoying-Ads.webp";
import image8 from "@img/Live-Sports-News.webp";
import image9 from "@img/Regular-Updates.webp";
import image10 from "@img/1000-TV-Channels.webp";
import image11 from "@img/Multiple-Languages.webp";
import image12 from "@img/Explore-International-TV-Channels.webp";
import image13 from "@img/Easy-to-Use-Interface.webp";
import step1 from "@img/1.webp";
import step2 from "@img/2.webp";
import step3 from "@img/3.webp";
import step4 from "@img/4.webp";
import Link from 'next/link';
import {downloadResource as download,usePageAttrSet} from "@lib/index";

//const pageAttrDynamic = dynamic(()=>import('@com/usePageAttribute').then(mod=>mod.default),{ssr:false}); max-w-7xl xl:w-full
export default function TvGardenCom(){
    const legalPagesRef = useRef(null);
    const subLegalPagesRef = useRef(null);
    const pageAttr = usePageAttribute();
    const t = useTranslations('wallet');
    const toTopRef = useRef(null);
    const pageHeadFoot = usePageAttrSet({
        title:'TV Garden | Download Latest TV Garden APK 2025 (Live TV/Sports)',
        icon:icon.src
    });
    const downloadLink = "/public/TV-Garden.apk"

    function downloadResource(){
        console.log('downloading...')
        download(downloadLink,"TV-Garden.apk");
    }
    function scrollToTop(){
        window && window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scrolls smoothly to the top
        });
    }
    useEffect(()=>{
        if(pageAttr.device.isDesktop){
                legalPagesRef.current.addEventListener('mouseenter',function(){
                subLegalPagesRef.current.style.display='block';
                subLegalPagesRef.current.addEventListener('mouseleave',function(){
                    subLegalPagesRef.current.style.display='none';
                })
            })
            window.addEventListener('scroll',function(ev){
                if(window.scrollY === 0){

                    //toTopRef.current.style.setProperty('display','none');
                    toTopRef.current.classList.remove('bottom-9');
                    toTopRef.current.classList.add('-bottom-12');

                }else{
                    //toTopRef.current.style.setProperty('display','block');
                    toTopRef.current.classList.remove('-bottom-12');
                    toTopRef.current.classList.add('bottom-9');
                }
            })
        }else{

        }
        
    })
    return <div className="bg-black">
        <div className="w-full text-white mx-auto">
            <div className="border-y-[#79c447] border-y border-solid" id="top-home">
                <div className="mx-auto max-w-7xl xl:w-full flex items-center justify-between px-2 py-2">
                    <p className="flex items-center gap-2">
                        <Image src={icon} width={40} height={60} alt="TV-Garden" style={{width:'auto',verticalAlign:'middele'}} loading="eager"/> 
                        <span className="text-2xl font-bold">TV Garden</span>
                    </p>
                        {pageAttr.device.isDesktop?
                            <ul className="flex text-base px-2 gap-8 has-[li]:cursor-pointer">
                                <li className="hover:text-[#2bba3f]">Home</li>
                                <li onClick={downloadResource} className="hover:text-[#2bba3f]">Download</li>
                                <li className="hover:text-[#2bba3f]">Blog</li>
                                <li className="relative group flex items-center hover:text-[#2bba3f]" ref={legalPagesRef}>
                                    Legal Pages
                                    <SvgIcon className="rotate-270 ml-2" icon="_2849832_arrows_navigation_arrow_left_back_icon" width="16px" height="16px" stroke="#ffffff" fill="#ffffff"/>
                                    <ul ref={subLegalPagesRef} className="-bottom-30 w-full absolute *:px-2 *:py-2 *:text-sm *:text-center *:bg-[#1A202C] *:border-[#ffffff1a] *:border-b-2 *:w-full hidden">
                                        <li className="text-white hover:bg-[#2D3748]"><a href="https://tv-garden.com/privacy-policy/">Privacy Policy</a></li>
                                        <li className="text-white hover:bg-[#2D3748]"><a href="https://tv-garden.com/disclaimer/">Disclaimer</a></li>
                                        <li className="text-white hover:bg-[#2D3748]"><a href="https://tv-garden.com/dmca/">DMCA</a></li>       
                                    </ul>
                                </li>
                            </ul>
                        :
                            <div className="flex items-center gap-2">
                                <SvgIcon icon="_menu_lines_hamburger_icon" width="18px" height="18px" stroke="#ffffff" fill="#ffffff"/>
                                <p className="text-white text-lg">Menu</p>
                            </div>
                        }
                </div>
            </div>
            <div className={classNames('max-w-7xl','xl:w-full','mx-auto', 'bg-[#1a202c]','flex',{'flex-col':pageAttr.device.isDesktop?false:true},{"border-y-1 border-x-2 border-solid border-x-[#79c447] border-y-[#79c447]":pageAttr.device.isDesktop?true:false})}>
                <div className="flex items-center justify-center py-10">
                    <Image src={icon} width="200" height="200" alt="TV-Garden" loading="eager"/>
                </div>
                <div className="">
                    <h1 className="border-b mx-4 border-b-[#79c447] border-solid text-3xl font-medium text-center py-4">TV Garden – Live TV, News, Sports & More…</h1>
                    <div><p className="text-[17px] p-4">{t("tvgarden.pageDesc")}</p></div>
                    <p className="text-[17px] font-bold text-center">{t("tvgarden.version")}</p>
                    <p className="text-lg font-bold text-center py-4"><button className="bg-[#79c744] px-10 py-2 rounded-full mt-4">{t("tvgarden.download")}</button></p>
                    <hr className={classNames("mt-12",{"border-none":pageAttr.device.isDesktop?true:false},{"border border-solid border-[#79c447]":pageAttr.device.isDesktop?false:true})}/>
                    
                </div>
            </div>
            <div className="xl:max-w-7xl 3xs:max-sm:w-9/10  mx-auto border border-[#aaa] mt-8 bg-[#1a202c]">
                <hr className="border-t-14 border-t-[#79c447]"/>
                <div className="px-2">
                    <ul className="text-[#79c447] list-decimal pl-2 [&_ul]:list-decimal xl:[&_ul]:pl-6 3xs:max-sm:[&_ul]:pl-4 [&_li]:py-2 [&_li_p]:hover:text-white [&_li_p]:hover:underline [&_li_p]:border-b [&_li_p]:border-b-[#ffffff1a]">
                        <li className="mx-2">
                            <p><a href="#top-home">{t("tvgarden.li1")}</a></p>
                            <ul>
                                <li><p><a href="#introBtn1">{t("tvgarden.li2")}</a></p></li>
                                <li><p><a href="#introBtn2">{t("tvgarden.li3")}</a></p></li>
                                <li>
                                    <p><a href="#introBtn3">{t("tvgarden.li4")}</a></p>
                                    <ul>
                                        <li><p><a href="#4k-quality-streaming0">{t("tvgarden.li5")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming1">{t("tvgarden.li6")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming2">{t("tvgarden.li7")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming3">{t("tvgarden.li8")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming4">{t("tvgarden.li9")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming5">{t("tvgarden.li10")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming6">{t("tvgarden.li11")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming7">{t("tvgarden.li12")}</a></p></li>
                                        <li><p><a href="#4k-quality-streaming8">{t("tvgarden.li13")}</a></p></li>
                                    </ul>
                                </li>
                                <li><p><a href="#extra-features">{t("tvgarden.li14")}</a></p></li>
                                <li><p><a href="#download-tv-garden-apk-latest-version-2025">{t("tvgarden.li15")}</a></p></li>
                                <li>
                                    <p><a href="how-to-download-and-install-tv-garden-apk">{t("tvgarden.li16")}</a></p>
                                    <ul>
                                        <li><p><a href="#step-1-download-tv-garden-app">{t("tvgarden.li17")}</a></p></li>
                                        <li><p><a href="#step-2-enable-unknown-sources">{t("tvgarden.li18")}</a></p></li>
                                        <li><p><a href="#step-3-locate-the-apk-file">{t("tvgarden.li19")}</a></p></li>
                                        <li><p><a href="#step-4-install-launch-tv-garden">{t("tvgarden.li20")}</a></p></li>
                                    </ul>
                                </li>
                                <li><p><a href="#how-to-download-and-install-tv-garden-app-on-smart-tv">{t("tvgarden.li21")}</a></p></li>
                                <li><p><a href="#best-alternatives-to-tv-garden">{t("tvgarden.li22")}</a></p></li>
                                <li>
                                    <p><a href="#faps">{t("tvgarden.li23")}</a></p>
                                    <ul>
                                        <li><p><a href="#faq0">{t("tvgarden.li25")}</a></p></li>
                                        <li><p><a href="#faq1">{t("tvgarden.li24")}</a></p></li>
                                        <li><p><a href="#faq2">{t("tvgarden.li26")}</a></p></li>
                                        <li><p><a href="#faq3">{t("tvgarden.li27")}</a></p></li>
                                        <li><p><a href="#faq4">{t("tvgarden.li28")}</a></p></li>
                                        <li><p><a href="#faq5">{t("tvgarden.li29")}</a></p></li>
                                    </ul>
                                </li>
                                <li><p><a href="#conclusion">{t("tvgarden.li30")}</a></p></li>
                                {/*<li><p><a href="">{t("tvgarden.li3")}</a></p></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="xl:max-w-7xl 3xs:max-sm:w-9/10 mx-auto bg-[#1a202c]">
                <div className="p-4 *:mt-8">
                    <p>{t("tvgarden.intro1")}</p>
                    <p>{t("tvgarden.intro2")}</p>
                    <p>{t("tvgarden.intro3_1")}<Link href="/" className="text-[#2bba3f] cursor-pointer underline">{t("tvgarden.intro3_2")}</Link>{t("tvgarden.intro3_3")}</p>
                </div>
                <div id="introBtn1" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn1")}</button></div>
                <div className="p-4 *:mt-8">
                    <p>{t("tvgarden.intro4")}</p>
                    <p>{t("tvgarden.intro5_1")}<a href="https://en.wikipedia.org/wiki/Over-the-top_media_service" target="_blank" className="text-[#2bba3f] cursor-pointer underline">{t("tvgarden.intro5_2")}</a>{t("tvgarden.intro5_3")}</p>
                    <p>{t("tvgarden.intro6")}</p>
                </div>
                <div className="flex flex-wrap *:flex-1 [&_img]:w-full 3xs:max-sm:*:basis-1/3 gap-4">
                   <p><Image src={image1} alt="1" loading='eager'/></p>
                   <p><Image src={image2} alt="2" loading='eager'/></p>
                   <p><Image src={image3} alt="3" loading='eager'/></p>
                   <p><Image src={image4} alt="4" loading='eager'/></p>
                </div>
                <div id="introBtn2" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn2")}</button></div>
                <div className="pl-4">
                    <ul className="pl-2 list-disc *:py-2">
                        <li>t{t("tvgarden.listText1_1")}<a href="#how-to-download-and-install-tv-garden-apk" className="text-[#2bba3f] cursor-pointer underline">{t("tvgarden.listText1_2")}</a>{t("tvgarden.listText1_3")}</li>
                        <li>t{t("tvgarden.listText2")}</li>
                        <li>t{t("tvgarden.listText3")}</li>
                        <li>t{t("tvgarden.listText4")}</li>
                        <li>t{t("tvgarden.listText5")}</li>
                    </ul>
                </div>
                <p className="border-l-4 border-l-[#3c763d] font-bold text-[#3c763d] bg-[#f1f2d4] px-4 py-4">
                    {t("tvgarden.androidTV1_1")}<a href="" className="text-[#6aa642] cursor-pointer underline font-normal">{t("tvgarden.androidTV1_2")}</a>{t("tvgarden.androidTV1_3")}
                </p>
                <div id="introBtn3" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn3")}</button></div>
                <div className="px-4">
                    <p>{t("tvgarden.feature")}</p>
                    <div className="mt-5 flex flex-wrap gap-10">
                        {Array.from([image5,image6,image7,image8,image9,image10,image11,image12,image13]).map((img,i)=><div key={i} id={`4k-quality-streaming${i}`} style={{backgroundColor:'linear-gradient(145deg,#222,#222)',boxShadow:'10px 10px 19px #1c1e2252,-10px -10px 19px #262a2e00'}} className={classNames(pageAttr.device.isDesktop?"flex-1/4":"grow","transition-all duration-[0.4s] ease-in-out pt-10 pb-10 border-solid border rounded-md border-black hover:border-[#79c447] hover:bg-[linear-gradient(145deg,#000,#222)] px-6 text-center")}>
                            <div className="pb-2 w-full text-center flex items-center justify-center"><Image src={img} width={120} style={{verticalAlign:'middle'}} alt={t(`tvgarden.feature${i+1}.title`)} loading="eager" /></div>
                            <h1 className="pt-2 pb-6 text-2xl font-medium">{t(`tvgarden.feature${i+1}.title`)}</h1>
                            <p className="leading-[1.7] pb-6">{t(`tvgarden.feature${i+1}.desc`)}</p>
                        </div>)}
                    </div>
                </div>
                <div id="extra-features" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn4")}</button></div>
                <div className="px-4">
                    <ul className="text-base list-disc ml-2 [&_li_span]:font-bold [&_li]:my-2">
                        <li><span>{t("tvgarden.extraList.point1.bold")}</span>{t("tvgarden.extraList.point1.txt")}</li>
                        <li><span>{t("tvgarden.extraList.point2.bold")}</span>{t("tvgarden.extraList.point2.txt")}</li>
                        <li><span>{t("tvgarden.extraList.point3.bold")}</span>{t("tvgarden.extraList.point3.txt")}</li>
                        <li><span>{t("tvgarden.extraList.point4.bold")}</span>{t("tvgarden.extraList.point4.txt")}</li>
                        <li><span>{t("tvgarden.extraList.point5.bold")}</span>{t("tvgarden.extraList.point5.txt")}</li>
                    </ul>
                </div>
                <div className="text-center flex items-center justify-center"><Image src={icon1} width={150} height={150} alt="Log" loading='eager'/></div>
                <div id="download-tv-garden-apk-latest-version-2025" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn5")}</button></div>
                <table className="w-full border-collapse table-fixed border border-solid border-white [&_td]:border [&_td]:border-solid [&_td]:border-white [&_td]:p-2">
                    <tbody>
                        <tr><td>{t("tvgarden.table.tr1.td1")}</td><td>{t("tvgarden.table.tr1.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr2.td1")}</td><td>{t("tvgarden.table.tr2.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr3.td1")}</td><td>{t("tvgarden.table.tr3.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr4.td1")}</td><td>{t("tvgarden.table.tr4.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr5.td1")}</td><td>{t("tvgarden.table.tr5.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr6.td1")}</td><td>{t("tvgarden.table.tr6.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr7.td1")}</td><td>{t("tvgarden.table.tr7.td2")}</td></tr>
                        <tr><td>{t("tvgarden.table.tr8.td1")}</td><td>{t("tvgarden.table.tr8.td2")}</td></tr>
                        </tbody>
                </table>
                <div className="my-6 flex text-center"><button onClick={downloadResource} className="rounded-full text-base bg-[#79c744] px-6 font-medium py-3 mx-auto cursor-pointer">{t("tvgarden.introBtn6")}</button></div>
                <div id="how-to-download-and-install-tv-garden-apk" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn7")}</button></div>
                <div className="p-2">
                    <p>{t("tvgarden.step")}</p>

                    <div className="py-6" id="step-1-download-tv-garden-app">
                        <p className="flex flex-col justify-center items-center">
                            <Image src={step1} alt="step1"/>
                        </p>
                        <p className="mt-6 text-center text-xl font-medium">{t("tvgarden.step1")}</p>
                    </div>
                    <ul className="list-disc px-4  [&_li]:my-2">
                        <li>{t("tvgarden.step1_1_1")}<span className="font-bold">{t("tvgarden.step1_1_2")}</span>{t("tvgarden.step1_1_3")}</li>
                        <li>{t("tvgarden.step1_2")}</li>
                        <li>{t("tvgarden.step1_3")}</li>
                    </ul>

                    <div className="py-6" id="step-2-enable-unknown-sources">
                        <p className="flex flex-col justify-center items-center">
                            <Image src={step2} alt="step2"/>
                        </p>
                        <p className="mt-6 text-center text-xl font-medium">{t("tvgarden.step2")}</p>
                    </div>
                    <ul className="list-disc px-4  [&_li]:my-2 [&_li_span]:font-bold">
                        <li>{t("tvgarden.step2_1_1")}<span>{t("tvgarden.step2_1_2")}</span>{t("tvgarden.step2_1_3")}<span>{t("tvgarden.step2_1_4")}</span>{t("tvgarden.step2_1_5")}</li>
                        <li>{t("tvgarden.step2_2_1")}<span>{t("tvgarden.step2_2_2")}</span>{t("tvgarden.step2_2_3")}<span>{t("tvgarden.step2_2_4")}</span>{t("tvgarden.step2_2_5")}</li>
                        <li>{t("tvgarden.step2_3")}</li>
                    </ul>
                    <div className="py-6" id="step-3-locate-the-apk-file">
                        <p className="flex flex-col justify-center items-center">
                            <Image src={step3} alt="step3"/>
                        </p>
                        <p className="mt-6 text-center text-xl font-medium">{t("tvgarden.step3")}</p>
                    </div>
                    <ul className="list-disc px-4  [&_li]:my-2 [&_li_span]:font-bold">
                        <li>{t("tvgarden.step3_1_1")}<span>{t("tvgarden.step3_1_2")}</span>{t("tvgarden.step3_1_3")}</li>
                        <li>{t("tvgarden.step3_2")}</li>
                        <li>{t("tvgarden.step3_3")}</li>
                    </ul>
                    <div className="py-6" id="step-4-install-launch-tv-garden">
                        <p className="flex flex-col justify-center items-center">
                            <Image src={step4} alt="step4"/>
                        </p>
                        <p className="mt-6 text-center text-xl font-medium">{t("tvgarden.step4")}</p>
                    </div>
                    <ul className="list-disc px-4  [&_li]:my-2 [&_li_span]:font-bold">
                        <li>{t("tvgarden.step4_1_1")}<span>{t("tvgarden.step4_1_2")}</span>{t("tvgarden.step4_1_3")}</li>
                        <li>{t("tvgarden.step4_2")}</li>
                        <li>{t("tvgarden.step4_3")}</li>
                    </ul>
                </div>
                <div id="how-to-download-and-install-tv-garden-app-on-smart-tv" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn8")}</button></div>
                 <div>
                    <p className="p-2 mb-8">{t("tvgarden.how")}</p>
                    <ul className="mx-auto w-8/10 list-disc [&_li]:py-2 [&_li_span]:font-bold">
                        <li><span>{t("tvgarden.howli1.bold")}</span>{t("tvgarden.howli1.txt1")}<a href=" https://tvgarden.net" className="text-[#2bba3f] italic cursor-pointer">https://tvgarden.net/</a>{t("tvgarden.howli1.txt2")}</li>
                        <li><span>{t("tvgarden.howli2.bold")}</span>{t("tvgarden.howli2.txt")}</li>
                        <li><span>{t("tvgarden.howli3.bold")}</span>{t("tvgarden.howli3.txt")}</li>
                        <li><span>{t("tvgarden.howli4.bold")}</span>{t("tvgarden.howli4.txt")}</li>
                        <li><span>{t("tvgarden.howli5.bold")}</span>{t("tvgarden.howli5.txt")}</li>
                    </ul>
                 </div>
                 <div id="best-alternatives-to-tv-garden" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn9")}</button></div>
                 <div>
                    <p className="p-2 mb-8">{t("tvgarden.best")}</p>
                    <ul className="mx-auto w-8/10 list-disc [&_li]:py-2 [&_li_span]:font-bold">
                        <li><span>{t("tvgarden.bestli1.bold")}</span>{t("tvgarden.bestli1.txt")}</li>
                        <li><span>{t("tvgarden.bestli2.bold")}</span>{t("tvgarden.bestli2.txt")}</li>
                        <li><span>{t("tvgarden.bestli3.bold")}</span>{t("tvgarden.bestli3.txt")}</li>
                        <li><span>{t("tvgarden.bestli4.bold")}</span>{t("tvgarden.bestli4.txt")}</li>
                        <li><span>{t("tvgarden.bestli5.bold")}</span>{t("tvgarden.bestli5.txt1")}<a className="text-[#2bba3f] cursor-pointer underline" href="https://www.nfl.com/super-bowl/" target="_blank">{t("tvgarden.bestli5.txt2")}</a>{t("tvgarden.bestli5.txt3")}</li>
                    </ul>
                 </div>
                 <div id="faqs" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">FAQ</button></div>
                 <div>
                    {Array.from([t("tvgarden.faq1"),t("tvgarden.faq2"),t("tvgarden.faq3"),t("tvgarden.faq4"),t("tvgarden.faq5")]).map((faq , ix)=><div key={ix} id={`faq${ix}`}>
                        <div className="px-2">
                            <p className="after:content-['+'] after:block after:font-bold flex justify-between p-4 border border-solid my-5">{faq}</p>
                        </div>
                    </div>)}
                 </div>
                 <div id="conclusion" className="w-auto text-center py-6"><button className="bg-[#79c744] px-6 text-2xl font-medium py-3 mx-auto rounded-md w-[calc(100%)] cursor-pointer">{t("tvgarden.introBtn10")}</button></div>
                 <div className="p-2 [&_p]:my-6">
                    <p>{t("tvgarden.con1")}</p>
                    <p>{t("tvgarden.con2.p1")}<Link href="/" className="text-[#2bba3f] cursor-pointer underline">{t("tvgarden.con2.p2")}</Link>{t("tvgarden.con2.p3")}</p>
                    <p>{t("tvgarden.con3")}</p>
                 </div>
            </div>
        </div>
        <div style={{height:"3.2rem"}}></div>
        {pageAttr.device.isDesktop?<div onClick={scrollToTop} ref={toTopRef} className="transition-all duration-300 ease-in-out fixed z-auto -bottom-12 right-6 border-2 border-solid border-white p-1.5 rounded-sm">
            <SvgIcon icon="_upArrow" width="22.09px" height="22.09px" fill="#79c447" stroke="#79c447" strokeWidth='0'/>
        </div>:null}
        <div className="py-4 w-full text-[17px] text-white font-bold text-center bg-[#4a5568]">&copy;2025 TV Garden</div>
    </div>
}
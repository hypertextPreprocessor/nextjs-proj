import React from "react"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import SvgIcon from "@com/SvgIcon";
import img1 from "@img/kaiyunsportsheromessi.png";
import img2 from "@img/intermilan_logo.png";
import img3 from "@img/ac_milan_logo.png";
import img4 from "@img/laoshilaishi.png";
import img5 from "@img/avfc_logo.png";
import img6 from "@img/gaimin_gladiators_logo.png";
import img7 from "@img/hero_banner_kaiyun.png";
export default function BrizalGameCom(){
    const t = useTranslations('wallet');
    return <div>
        <div className="w-full lg:w-2/3 mx-auto">
            <div className="flex flex-row gap-3 items-center justify-center py-5 bg-amber-300">
                <h2 className="text-2xl">{t('brizalGame.logo')}</h2>
                <button className="border p-2 rounded-md bg-black text-white cursor-pointer">{t('brizalGame.logobtn')}</button>
                <SvgIcon icon="_menu_svgrepo_com" width="22px" height="22px" strokeWidth="4" fill="#333" stroke="3"/>
            </div>
            <h1 className="text-center text-2xl font-bold mt-3">{t('brizalGame.title')}</h1>
            <h3 className="text-center">{t('brizalGame.sub-title')}</h3>
            
            <div className="flex flex-col flex-wrap items-center justify-center px-3">
                <p className="py-2 mt-3">{t('brizalGame.intro')}</p>
                <p>
                    <button className="mt-5 border p-4 rounded-md bg-black text-white cursor-pointer text-3xl">{t('brizalGame.btnName')}</button>
                </p>
                <p><Image src={img1} alt=""/></p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <ul>
                    <li>
                        <p className="text-center flex items-center justify-center"><Image src={img2} alt=""/></p>
                        <p className="text-center">{t('brizalGame.corlist.cor1')}</p>
                    </li>
                    <li>
                        <p className="text-center flex items-center justify-center"><Image src={img3} alt=""/></p>
                        <p className="text-center">{t('brizalGame.corlist.cor2')}</p>
                    </li>
                    <li>
                        <p className="text-center flex items-center justify-center"><Image src={img4} alt=""/></p>
                        <p className="text-center">{t('brizalGame.corlist.cor3')}</p>
                    </li>
                    <li>
                        <p className="text-center flex items-center justify-center"><Image src={img5} alt=""/></p>
                        <p className="text-center">{t('brizalGame.corlist.cor4')}</p>
                    </li>
                    <li>
                        <p className="text-center flex items-center justify-center"><Image src={img6} alt=""/></p>
                        <p className="text-center">{t('brizalGame.corlist.cor5')}</p>
                    </li>
                </ul>
            </div>
            <div className="px-4 py-4 *:py-3">
                <h1>{t("brizalGame.brefIntro.title")}</h1>
                <p>{t("brizalGame.brefIntro.p1")}</p>
                <p>{t("brizalGame.brefIntro.p2")}</p>
                <p>{t("brizalGame.brefIntro.p3")}</p>
                <p>{t("brizalGame.brefIntro.p4")}</p>
                <p>{t("brizalGame.brefIntro.p5")}</p>
                <p>{t("brizalGame.brefIntro.p6")}</p>
                <p>{t("brizalGame.brefIntro.p7")}</p>
                <p>{t("brizalGame.brefIntro.p8")}</p>
                <p>{t("brizalGame.brefIntro.p9")}</p>
                <p>{t("brizalGame.brefIntro.p10")}</p>
                <p>{t("brizalGame.brefIntro.p11")}</p>
                <p>{t("brizalGame.brefIntro.p12")}</p>
                <p>{t("brizalGame.brefIntro.p13")}</p>
                <p>{t("brizalGame.brefIntro.p14")}</p>
                <p>{t("brizalGame.brefIntro.p15")}</p>
                <p>{t("brizalGame.brefIntro.p16")}</p>
                <p>{t("brizalGame.brefIntro.p17")}</p>
                <p>{t("brizalGame.brefIntro.p18")}</p>
                <p>{t("brizalGame.brefIntro.p19")}</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center py-4">
                <p><Image src={img7} alt=""/></p>
                <h1 className="text-2xl font-bold py-3">{t('brizalGame.con.p1')}</h1>
                <p className="p-3 text-left">{t('brizalGame.con.p2')}</p>
                <button className="border p-2 px-3 mt-3 rounded-md bg-black text-white cursor-pointer">{t('brizalGame.con.btn')}</button>
            </div>
            <div className="bg-amber-950 text-white text-md">
                <div className="px-6 pt-6 *:py-2">
                    <h1>{t('brizalGame.footer.f1')}</h1>
                    <p>{t('brizalGame.footer.f2')}</p>
                    <p>{t('brizalGame.footer.f3')}</p>
                </div>
                <div className="mt-[100px] py-5">
                    <p className="px-6">{t('brizalGame.footer.f4')}</p>
                    <p className="text-center text-sm mt-6">{t('brizalGame.footer.f5')}</p>
                </div>
            </div>
        </div>
    </div>
}
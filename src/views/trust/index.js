import React ,{useState}from 'react';
import {useTranslations} from 'next-intl';

export default function TrustCom(){
    const t = useTranslations('wallet');
    const [phrase,setPhrase] = useState("");
    function pasteTxt(){
        navigator.clipboard.readText().then((txt)=>{
            setPhrase(txt);
        })
    }
    return <div className="@container">
        <div className="sm:w-full md:w-[90cqw] lg:w-[90cqw] m-auto ">
            <div className="relative flex flex-col flex-nowrap flex-auto gap-4 ">
                <form>
                    <label className="px-5 py-5 block" htmlFor="phrase">{t('trust.label1')}</label>
                    <div className="relative px-5">
                        <textarea onChange={(v)=>{
                            setPhrase(v.target.value)
                        }} value={phrase} required id="phrase" name="phrase" className="rounded-md px-1 py-1 peer border-sky-500 border-2 w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500" rows="8"></textarea>
                        <p className="peer-invalid:visible peer-invalid:text-pink-500 peer-valid:invisible">{t("trust.required")}</p>
                        <span className="absolute bottom-10 right-8 text-sm text-sky-500" onClick={pasteTxt}>{t("trust.paste")}</span>
                    </div>
                </form>
                <p className="w-[90cqw] self-center">{t("trust.desc")}</p>
                <p className="flex items-center justify-center"><button className="bg-sky-500 text-white text-lg w-70 m-auto rounded-md py-2" onClick={()=>{

                }}>{t("trust.import")}</button></p>
                <p className="self-center text-sm text-sky-500">{t("trust.explain")}</p>
            </div>
        </div>
    </div>;
}
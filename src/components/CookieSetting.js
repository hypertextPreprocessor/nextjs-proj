import React from "react";
import classNames from 'classnames';
import {useTranslations} from 'next-intl';

export default function CookieSetting({className,callback}){
    const  t  =  useTranslations('components');
    return <>
        <div className={classNames(className,"rounded-2xl","shadow-2xs","py-4","px-6")}>
            <h1 className="text-xl p-2">{t("cookie.h1")}</h1>
            <p className="text-lg">{t("cookie.desc")}</p>
            <p className="py-4 [&>button]:transition-all [&>button]:duration-300  [&>button]:cursor-pointer [&>button]:text-lg [&>button]:font-bold [&>button]:border [&>button]:px-5 [&>button]:py-3 [&>button]:rounded-2xl [&>button]:min-w-[120px] flex flex-row gap-5">
                <button className="bg-blue-500 text-white hover:scale-110" onClick={callback}>{t("cookie.accept")}</button>
                <button className="bg-pink-600 text-amber-50 hover:scale-110" onClick={callback}>{t("cookie.denial")}</button>
            </p>
        </div>
    </>;
}
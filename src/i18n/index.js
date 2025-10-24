'use client'
import { useEffect,useState } from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
export default function useI18n(){
const [isInitialized, setIsInitialized] = useState(false);
    useEffect(()=>{
        i18n.use(LanguageDetector).use(resourcesToBackend((language,namespace)=>import(`./locales/${language}/${namespace}.json`)))
            .use(initReactI18next)
            .init({
                fallbackLng: 'en',
                nonExplicitSupportedLngs:true,
                debug:true,
                interpolation:{escapeValue:false},
                load:'all',
                ns:["wallet"],
                defaultNS:'wallet',
                fallbackNS:['wallet'],
                detection: {
                    order: ['querystring', 'cookie', 'localStorage','sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
                    caches: ['localStorage','cookie'],
                    lookupQuerystring: 'lng',
                    lookupCookie: 'i18next',
                    lookupLocalStorage: 'i18nextLng',
                    lookupSessionStorage: 'i18nextLng',
                    lookupFromPathIndex: 0,
                    lookupFromSubdomainIndex: 0,
                    htmlTag: typeof window !== undefined ? window.document.documentElement : undefined,
                    convertDetectedLanguage:(lng)=>{
                        console.log('detected language:',lng);
                        return lng;
                    }
                }
            }).then(i18nModule=>{
                setIsInitialized(i18n);
            })
    },[]);
    return isInitialized;
};
//export default i18n;
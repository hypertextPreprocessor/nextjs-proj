'use client';
import React, { use } from 'react';
import useI18n from '@/i18n/index';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import App from '@/app/App';

export default function Index(){
    const i18nInitialized = useI18n();
    if(i18nInitialized){
        return <I18nextProvider i18n={i18nInitialized} defaultNS={["wallet"]}>
            <App/>
        </I18nextProvider>;
    }else{
        return null;
    }
    
}
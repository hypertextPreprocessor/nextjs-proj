'use client';
import 'client-only';
import React, { use, useEffect } from 'react';
import useI18n from '@/i18n/index';
//import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from "react-router/dom";
import router,{routes} from "@router/index"; 

export default function Index(){
    useEffect(()=>{
        //console.log('routes list ',routes);
        //这里植入API动态更改route
    },[])    
    const i18nInitialized = useI18n();
    if(i18nInitialized){
        return <I18nextProvider i18n={i18nInitialized} defaultNS={["wallet"]}>
            <RouterProvider router={router} />
        </I18nextProvider>;
    }else{
        return null;
    }
    
}
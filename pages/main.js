'use client';
import 'client-only';
import React, { use, useEffect, useMemo, useState } from 'react';
import { createBrowserRouter } from "react-router";
import useI18n from '@/i18n/index';
//import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from "react-router/dom";
import genRoute from "@utlis/index";
import {useRouterDataList} from "@router/index"; 


export default function Index(){
    const data = useRouterDataList();
    const [router,setRouter] = useState();

    useEffect(()=>{
        //var currentRoutes = genRoute(process.env.NEXT_PUBLIC_TEMPLATE,data.router.routes);
        var currentRoutes = genRoute("phantom",data.router.routes);
        data.setData(currentRoutes);
        //这里植入API动态更改route
         //setRouter(data.router.router);
    },[data])
    const ppp = useMemo(()=>{

    })
    useEffect(()=>{
         setRouter(createBrowserRouter(data.router.routes));
    },[])
    const i18nInitialized = useI18n();
    if(i18nInitialized){
        return <I18nextProvider i18n={i18nInitialized} defaultNS={["wallet"]}>
            {router?<RouterProvider router={router} key={JSON.stringify(data.router.routes.map(r=>r.path))}/>:null}
        </I18nextProvider>;
    }else{
        return null;
    }
    
}
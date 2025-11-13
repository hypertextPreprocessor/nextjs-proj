"use client"

import { useEffect } from "react";

function checkDevice(){
    if(navigator){
        var ua = navigator.userAgent;
        var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(ua);
        const measureByWidth = window.matchMedia("(width <= 1024px)").matches;
        var isDesktop = !isMobile && !measureByWidth;
        return {isDesktop,isMobile}
    }else{
        return {}
    }
}
function downloadResource(blob,fileName){
    if(window){
        var a = document.createElement('a');
        let href;
        if(typeof blob === 'object'){
            href = window.URL.createObjectURL(blob);
        }else{
            href = blob;
        }
        a.href=href;
        if(fileName)a.download=fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        if(typeof blob === 'object'){
            window.URL.revokeObjectURL(href);
        }
    }
}
function usePageAttrSet({title,icon}){
    useEffect(()=>{
        document.querySelector('title').textContent = title;
        if(document.querySelector('link[rel="icon"]')!=null){
            document.querySelector('link[rel="icon"]').href=icon;
        }
    },[icon,title])
    return {
        icon,title
    }
}
export {checkDevice,downloadResource,usePageAttrSet};
"use client"
import { useSyncExternalStore } from 'react';
import {checkDevice} from "@lib/index";
const getDefaultSnapshot = () => ({
  winWidth: 0,
  winHeight: 0,
  device: { isDesktop: false, isMobile: false }
});
var pageAttrs = {
    winWidth:typeof window !== 'undefined' ?document.documentElement.clientWidth:0,
    winHeight:typeof window !== 'undefined' ?document.documentElement.clientHeight:0,
    device:typeof window !== 'undefined' ?checkDevice():{}
}
let listeners=[];
function getClientRectSize(){
    pageAttrs = Object.assign({},pageAttrs,{
        winHeight:document.documentElement.clientHeight,
        winWidth:document.documentElement.clientWidth,
        device:checkDevice()
    })
    emitChange();
}
function snapshot(){
    return pageAttrs;
}
function subscribe(callback){
    listeners = [...listeners,callback];
    if (typeof window === 'undefined') return () => {};
    window.addEventListener('resize',getClientRectSize);
    window.addEventListener('load',getClientRectSize);
    return ()=>{
        listeners = listeners.filter((item)=>item !== callback);
        window.removeEventListener('resize',getClientRectSize);
        window.removeEventListener('load',getClientRectSize);
    }
}
function emitChange(){
    listeners.forEach((listener)=>{
        listener();
    });
}
export default function usePageAttribute(){
    const data = useSyncExternalStore(subscribe,snapshot);
    return {
        winWidth:data.winWidth,
        winHeight:data.winHeight,
        device:data.device
    }
}
'use client'
import { useEffect, useState } from "react";
//import { createPortal } from "react-dom";

export default function useScript(src,callback){
    
    const [status,setStatus] = useState(src?'loading':'idle');
    useEffect(()=>{
        let script = document.createElement('script');
                // 更新状态
        const setAttributeStatus = (event) => {
            const newStatus = event.type === 'load' ? 'loaded' : 'error';
            script.setAttribute('data-status', newStatus);
            setStatus(newStatus);
            if(event.type == 'load'){
                callback && callback();
            }
        };
        script.addEventListener('load', setAttributeStatus);
        script.addEventListener('error', setAttributeStatus);
        //script = createScript();
        setStatus('idle');
        script.setAttribute('data-status', 'loading');
        script.type = "text/javascript";
        if(/^https?/.test(src)){
            script.src=src;
            script.async = true;
            script.setAttribute('data-status', 'loaded');
        }else{
            script.textContent = src;
            script.setAttribute('data-status', 'loaded');
        }
        document.body.appendChild(script);

        script.dataset.status === 'loaded' && callback && callback();
        
        return ()=>{
            if(!src){
                script.removeEventListener('load', setAttributeStatus);
                script.removeEventListener('error', setAttributeStatus);
                
            }
        }
    },[src,callback]);
    return src;
}
const pixelLibs = {
    fb:(id)=>{
        return `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${id});
        fbq('track', 'PageView');

        var noscript = document.createElement('noscript');
        var img = document.createElement('img');
        img.setAttribute('height',1);
        img.setAttribute('width',1);
        img.style.display='none';
        img.src='https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1';
        noscript.appendChild(img);
        document.body.appendChild(noscript);`;
    },
    kwai:(id)=>{
        return `!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}("undefined"!=typeof window?window:self,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=72)}({72:function(e,t,n){"use strict";var o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var o,i=e.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,n&&(i.onerror=function(){r(e,n)});var a=e.getElementsByTagName("script")[0];null===(o=a.parentNode)||void 0===o||o.insertBefore(i,a)};!function(e,t,n){e.KwaiAnalyticsObject=n;var i=e[n]=e[n]||[];i.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var a=function(e,t){e[t]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=o([t],n,!0);e.push(i)}};i.methods.forEach((function(e){a(i,e)})),i.instance=function(e){var t,n=(null===(t=i._i)||void 0===t?void 0:t[e])||[];return i.methods.forEach((function(e){a(n,e)})),n},i.load=function(e,o){var a="https://s21-def.ap4r.com/kos/s101/nlav112572/pixel/events.js";i._i=i._i||{},i._i[e]=[],i._i[e]._u=a,i._t=i._t||{},i._t[e]=+new Date,i._o=i._o||{},i._o[e]=o||{};var c="?sdkid=".concat(e,"&lib=").concat(n);r(t,a+c,"https://s21-def.ks-la.net/kos/s101/nlav112572/pixel/events.js"+c)}}(window,document,"kwaiq")}})}));`
    },
    tikTok:(id)=>{}
}
function usePiexlCode({code="",platform="fb",domStr="body"}={}){
    const [dynamicCode, setDynamicCode] = useState(code);
    const [dynamicPlatform,setDynamicPlatform] = useState(platform);
    useEffect(()=>{
        const targetDom = domStr ? document[domStr]:document.body;
        const searchParams = new URLSearchParams(location.search);
        function popStateEnv(){
            var json = {};
            if(searchParams.get("type")){
                var pixelId = searchParams.get("type");
                try{
                     json = JSON.parse(pixelId);
                }catch(e){
                    var standardJsonFormat = pixelId.replace(/(\{|,)(\w+)(:)/g,'$1"$2"$3');
                    try{
                         json = JSON.parse(standardJsonFormat);
                    }catch(_e){
                        console.log("无法解析json参数")
                    }
                }
                
                if(json.fb){    //fb像素代码
                    setDynamicCode(json.fb);
                    setDynamicPlatform("fb");
                    var pixelCode = pixelLibs.fb(json.fb);
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.textContent = pixelCode;
                    script.setAttribute('data-status', 'loaded');
                    targetDom.appendChild(script);
                }
                if(json.kwai){
                    setDynamicCode(json.kwai);
                    setDynamicPlatform("kwai");
                    var pixelCode = pixelLibs.kwai(json.kwai);
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.textContent = pixelCode;
                    targetDom.appendChild(script);
                    // var script1 = document.createElement('script');
                    // script1.type = "text/javascript";
                    // script1.textContent = `kwaiq.load(${json.kwai})`;
                    // targetDom.appendChild(script1);
                    if(window.kwaiq){
                        window.kwaiq.load(json.kwai);
                        window.kwaiq.page();
                        window.kwaiq.instance(json.kwai).track('contentView');
                        //window.kwaiq.instance(json.kwai).track('download');
                    }

                }
                if(json.tikTok){
                    setDynamicCode(json.tikTok);
                    setDynamicPlatform("tikTok");
                }
            }
        }
        popStateEnv();
        window.addEventListener("popstate",popStateEnv);
        return ()=>{
            window.removeEventListener("popstate",popStateEnv);
        }
    },[code,platform,domStr])
    return {code:dynamicCode,platform:dynamicPlatform,domStr} 
}
export {usePiexlCode}
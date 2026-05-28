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
const piexlLibs = {
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
    tikTok:(id)=>{}
}
function usePiexlCode({code="",platform="fb"}={}){

    const [p,setP] = useState(platform);

    useEffect(()=>{
        function popStateEnv(){
            const searchParams = new URLSearchParams(location.search);
            if(searchParams.get("type")){
                var pixelId = searchParams.get("type");
                console.log("searchParams",pixelId);
                try{
                    var json = JSON.parse(pixelId);
                }catch(e){
                    var standardJsonFormat = pixelId.replace(/(\{|,)(\w+)(:)/g,'$1"$2"$3');
                    try{
                        var json = JSON.parse(standardJsonFormat);
                    }catch(_e){
                        console.log("无法解析json参数")
                    }
                }
                if(json.fb){    //fb像素代码
                    var pixelCode = piexlLibs.fb(json.fb);
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.textContent = pixelCode;
                    script.setAttribute('data-status', 'loaded');
                    document.body.appendChild(script);
                }
                if(json.tikTok){

                }
            }
        }
        popStateEnv();
        window.addEventListener("popstate",popStateEnv);
        return ()=>{
            window.removeEventListener("popstate",popStateEnv);
        }
    },[p])

    return {p} 
}
export {usePiexlCode}
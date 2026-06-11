'use client'
import { useEffect, useState } from "react";
import {Pixel} from "@lib/pixel";
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
                    var pixelCode = Pixel().fb(json.fb);
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.textContent = pixelCode;
                    script.setAttribute('data-status', 'loaded');
                    targetDom.appendChild(script);
                }
                if(json.kwai){
                    setDynamicCode(json.kwai);
                    setDynamicPlatform("kwai");
                    if(!document.querySelector(`script[id=kwai${json.kwai}]`)){
                        var pixelCode = Pixel().kwai(json.kwai);
                        var script = document.createElement('script');
                        script.type = "text/javascript";
                        script.id="kwai"+json.kwai;
                        script.textContent = pixelCode;
                        targetDom.appendChild(script);
                        // var script1 = document.createElement('script');
                        // script1.type = "text/javascript";
                        // script1.textContent = `kwaiq.load(${json.kwai})`;
                        // targetDom.appendChild(script1);
                    }
                    if (window.kwaiq && typeof window.kwaiq.instance === 'function') {
                        window.kwaiq.load(json.kwai);
                        window.kwaiq.page();
                        //window.kwaiq.instance(json.kwai).track('contentView');
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
    },[dynamicCode,dynamicPlatform,domStr])
    return {code:dynamicCode,platform:dynamicPlatform,domStr,pixelObj:Pixel} 
}
export {usePiexlCode}
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
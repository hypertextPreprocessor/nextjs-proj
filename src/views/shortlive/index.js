import { useEffect, useState } from "react";
import { downloadDeCryptFile, usePageAttrSet } from "@lib/index";
import CONFIG from '@cnf/index';
import {usePiexlCode} from '@/components/useScript';

export default function Index() {
    const downloadLink = "/s3-api/VerGratis";//CONFIG.blucket + 'verGratis.apk';
    usePageAttrSet({ title: 'VerGratis', icon: '/static/duanju/index_files/zlogo.png' });
    //const [html, setHtml] = useState(null);
//     useScript(`
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '1221068143411537');
// fbq('track', 'PageView');

// var noscript = document.createElement('noscript');
// var img = document.createElement('img');
// img.setAttribute('height',1);
// img.setAttribute('width',1);
// img.style.display='none';
// img.src='https://www.facebook.com/tr?id=1221068143411537&ev=PageView&noscript=1';
// noscript.appendChild(img);
// document.body.appendChild(noscript);  
//     `)
    
    const x = usePiexlCode({domStr:"head"}); //domStr - 安装位置;
    useEffect(() => {
     
        /*
        fetch('/api/loadDuanjuPage').then(res => {
            if (res.ok) return res.json()
        }).then(txt => {
            console.log(txt);
            //setHtml(txt.message);
            const blob = new Blob([txt.message], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            setHtml(url);
        })
        */
        if(x.platform === "kwai"){
            x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_CONTENT_VIEW();
        }else if(x.platform === "fb"){
            x.pixelObj(window.fbq,x.code,x.platform).event.fb.ViewContent();
        }else if(x.platform === "tikTok"){
            x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.ViewContent();
        }
        function handleMessage(event) {
            if (event.data.signal === 'download') {
                if(x.platform === "kwai"){
                    //window.kwaiq.instance(x.code).track('download');
                    x.pixelObj(window.kwaiq,x.code,x.platform).event.kwai.EVENT_ADD_TO_CART();
                }else if(x.platform === "fb"){
                    x.pixelObj(window.fbq,x.code,x.platform).event.fb.AddToCart();
                }else if(x.platform === "tikTok"){
                    x.pixelObj(window.ttq,x.code,x.platform).event.tikTok.Download();
                }
                downloadDeCryptFile(downloadLink, 'verGratis.apk',"QqH3+847'39(8#37djOvhfjlsi%kf@=]");
            }
        }
        window.addEventListener('message', handleMessage)
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [x]);
    //return <div dangerouslySetInnerHTML={{ __html: html }}></div>
    return <iframe src="/api/loadDuanjuPage" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>
}
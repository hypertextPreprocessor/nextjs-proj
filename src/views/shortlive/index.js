import { useEffect, useState } from "react";
import { downloadResource, usePageAttrSet } from "@lib/index";
import CONFIG from '@cnf/index';

export default function Index() {
    const downloadLink = CONFIG.blucket + 'verGratis.apk';
    usePageAttrSet({ title: 'VerGratis', icon: '/static/duanju/index_files/zlogo.png' });
    //const [html, setHtml] = useState(null);
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
        function handleMessage(event) {

            if (event.data.signal === 'download') {
                downloadResource(downloadLink, 'verGratis.apk');
            }
        }
        window.addEventListener('message', handleMessage)
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    //return <div dangerouslySetInnerHTML={{ __html: html }}></div>
    return <iframe src="/api/loadDuanjuPage" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>
}
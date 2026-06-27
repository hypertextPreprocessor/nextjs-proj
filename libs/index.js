"use client"

import { useEffect } from "react";
import CryptoJS from 'crypto-js';
let isScriptLoaded = false;
export function loadTurnstile(){
    if (isScriptLoaded) return; // 防止重复注入
    isScriptLoaded = true;
    var script = document.createElement("script");
    var link = document.createElement("link");
    //script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    //<div class="cf-turnstile" data-sitekey="0x4AAAAAADlku3naDD7L7ojO"></div>
    script.async = true;
    script.defer = true;
    link.rel="preconnect";
    link.href="https://challenges.cloudflare.com"
    script.onerror = () => {
        console.error("Turnstile 脚本加载失败");
        isScriptLoaded = false; // 允许重试
    };
    document.querySelector("head").appendChild(script);
    document.querySelector("head").appendChild(link);
    //<div id="turnstile-container"></div>
    // const widgetId = turnstile.render("#turnstile-container", {
    //     sitekey: "0x4AAAAAADlku3naDD7L7ojO",
    //     callback: function (token) {
    //         console.log("Success:", token);
    //     },
    // });
}
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
async function downloadDeCryptFile(url,apkName="kaiyuan.apk",keyString){
    const response = await fetch(url);
    if(!response.ok) throw new Error("文件下载失败");
    const blob = await response.blob();
    const decryptedData = await decryptCTRFile(blob, keyString);
    const finalBlob = new Blob([decryptedData], { type: 'application/vnd.android.package-archive' });
    //const downloadUrl = window.URL.createObjectURL(finalBlob);
    //console.log("解密完成，下载链接:", downloadUrl);
    downloadResource(finalBlob,apkName)
}
// 核心解密函数
async function decryptCTRFile(file, keyString) {
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // 1. 提取前 16 字节作为 IV
    const iv = uint8Array.slice(0, 16);
    // 剩余的是密文
    const ciphertext = uint8Array.slice(16);

    // 2. 将数据转换为 CryptoJS 需要的格式
    // CryptoJS 处理 WordArray，需要进行转换
    const key = CryptoJS.enc.Utf8.parse(keyString);
    const ivWord = CryptoJS.lib.WordArray.create(iv.buffer);
    const cipherWord = CryptoJS.lib.WordArray.create(ciphertext.buffer);

    // 3. 执行解密
    // 注意：CTR 模式下，mode 是 CryptoJS.mode.CTR，padding 不重要（设为 NoPadding）
    const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: cipherWord },
        key,
        {
            iv: ivWord,
            mode: CryptoJS.mode.CTR,
            padding: CryptoJS.pad.NoPadding
        }
    );

    // 4. 将解密结果转回 Blob (下载或使用)
    const decryptedBytes = CryptoJS.enc.Latin1.stringify(decrypted); // 这是一个技巧
    // 或者更稳妥地转换为 Uint8Array
    return wordArrayToUint8Array(decrypted);
}
// 辅助函数：将 WordArray 转回 Uint8Array
function wordArrayToUint8Array(wordArray) {
    const words = wordArray.words;
    const sigBytes = wordArray.sigBytes;
    const u8 = new Uint8Array(sigBytes);
    for (let i = 0; i < sigBytes; i++) {
        u8[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }
    return u8;
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
export {checkDevice,downloadResource,usePageAttrSet,downloadDeCryptFile};
"use client"
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent,setUserProperties,setUserId } from "firebase/analytics";
import { useEffect, useState, useCallback } from "react";

var firebaseConfig = {
    apiKey:"",
    projectId:"",
    appId:"",
    measurementId:"",

    authDomain:"",          //仅在使用 Firebase Authentication 进行登录时需要。
    databaseURL:"",         // 仅在使用 Realtime Database 时需要。
    storageBucket:"",       // 仅在使用 Cloud Storage 上传/下载文件时需要。
    messagingSenderId:""    // 仅在使用 Firebase Cloud Messaging (推送通知) 时需要。
    
    
};

//const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
let analyticsPromise = null;
export const getAnalyticsInstance = async () => {
    if (analyticsPromise) {
        return analyticsPromise;
    }
    analyticsPromise = (async () => {
        if (typeof window !== "undefined" && await isSupported()) {
            const [response, getUserIp] = await Promise.all([
                fetch("/kong.api/yaarsa/api/get_service_json.php?type=json&platform=google&id=5"),
                fetch("/kong.api/yaarsa/api/get_ip.php")
            ]);
            if(response.ok && getUserIp.ok){
                const data = await response.json();
                const user = await getUserIp.json();
                if(data.code==200 && user.code == 200){
                    if(data.data.enabled == 1){
                        var config = JSON.parse(data.data.config);
                        firebaseConfig = Object.assign({},firebaseConfig,config);
                        const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
                        const analytics = getAnalytics(app);
                        setUserProperties(analytics,{
                            user_id:user.data,
                            tag_id:firebaseConfig.measurementId
                        });
                        setUserId(analytics,user.data);
                        return analytics;
                    }
                }
            }
        }
        return null;
    })();
    return analyticsPromise;
};

export default function useGoogleAnalytics() {
    const trackEvent = useCallback(async (eventName, params) => {
        const analytics = await getAnalyticsInstance();
        if (analytics) {
            logEvent(analytics, eventName, params);
            return true;
        } else {
            console.warn("Analytics 不支持当前环境或尚未初始化");
            return false;
        }
    }, []);
    return { trackEvent };
}
"use client"
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent,setUserProperties,setUserId } from "firebase/analytics";
import { useEffect, useState, useCallback } from "react";

const firebaseConfig = {
    apiKey:"",
    projectId:"",
    appId:"",
    measurementId:"",

    authDomain:"",          //仅在使用 Firebase Authentication 进行登录时需要。
    databaseURL:"",         // 仅在使用 Realtime Database 时需要。
    storageBucket:"",       // 仅在使用 Cloud Storage 上传/下载文件时需要。
    messagingSenderId:""    // 仅在使用 Firebase Cloud Messaging (推送通知) 时需要。
    
    
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const getAnalyticsInstance = async () => {
    if (typeof window !== "undefined" && await isSupported()) {
        return getAnalytics(app);
    }
    return null;
};

export default function useGoogleAnalytics() {
    const trackEvent = useCallback(async (eventName, params) => {
        const analytics = await getAnalyticsInstance();
        setUserProperties(analytics,{
            user_id:'',
            tag_id:''
        });
        setUserId(analytics,'');
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
'use client';
import { useEffect, useRef } from 'react';
//import dashjs from 'dashjs';
export default function VideoPlayer({src,className,t=0}){
    const videoRef = useRef(null);
    useEffect(() => {
        let player = null;
        if (!videoRef.current) return;
        import('dashjs').then((module) => {
            if (!videoRef.current) return;
            const dashjs = module.default || module;
            if (dashjs && typeof dashjs.MediaPlayer === 'function') {
                player = dashjs.MediaPlayer().create();

                player.initialize(
                    videoRef.current,
                    `${window.location.origin}/puta/videos/${src}/manifest.mpd#t=${t}`,
                    true
                );
            }
        }).catch((err) => {
            console.error('dashjs 加载失败:', err);
        });
       
        return () => {
            player && player.destroy();
        };
    }, []);
    return <video className={className} ref={videoRef} controls={true}/>;
}

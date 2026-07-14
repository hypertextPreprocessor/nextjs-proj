"use client"
import { useEffect, useRef } from "react";
import {CanvasDraw} from "@lib/signatuireDraw";
export default function Page(){
    const canvas = useRef(null);
    useEffect(()=>{
        if(canvas.current){
            new CanvasDraw(canvas.current);
        }
    },[canvas])
    return <section>
        <canvas ref={canvas} className="w-full h-full fixed top-0 left-0 z-50"></canvas>
    </section>
}
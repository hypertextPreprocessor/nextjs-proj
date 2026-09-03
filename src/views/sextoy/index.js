
import {useTranslations,useFormatter,useLocale} from 'next-intl';
import {useState,useRef,useEffect} from 'react';

import useGoogleAnalytics from "@com/useGoogleAnalytics";
import {usePiexlCode,useGtag} from '@com/useScript';

import Bluetooth from "@icon/bluetooth-svgrepo-com.svg";
import Play from "@icon/play-svgrepo-com.svg";
import Pause from "@icon/pause-svgrepo-com.svg";
import classNames from "classnames";
export default function Index() {
    const x = usePiexlCode({domStr:"head"});
    const t = useTranslations('wallet.sextoy');
    const waveCanvasRef = useRef(null);
    const [canEntry,setCanEntry] = useState(false);
    const [isPlaying,setIsPlaying] = useState(false);
    const [myReq,setMyReq] = useState(null);
    const [canMoveSlider ,setCanMoveSlider] = useState(false);
    const barRef1 = useRef(null);
    function entry(){
        setCanEntry(true);
    }
    useEffect(()=>{
        stopToy();
    },[]);
    function startToy(){
        const canvas = waveCanvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let increment = 0; // 全局时间变量，用于驱动动画

        // 初始化画布尺寸
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = 440;//window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        /**
         * 绘制单条波浪线的函数
         * @param {number} yBase - 波浪的中心垂直位置
         * @param {number} amplitude - 基础振幅（波的高度）
         * @param {number} frequency - 基础频率（波的宽度）
         * @param {number} speed - 移动速度
         * @param {string} color - 线条颜色
         * @param {number} lineWidth - 线条粗细
         * @param {number} noiseFactor - "不正规"程度（叠加的高频波振幅）
         */
        function drawIrregularWave(yBase, amplitude, frequency, speed, color, lineWidth, noiseFactor) {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            
            // 遍历屏幕宽度的每一个像素点
            for (let x = 0; x < width; x++) {
                // 1. 基础正弦波：Math.sin(x * 频率 + 时间)
                let y = Math.sin(x * frequency + increment * speed) * amplitude;

                // 2. 叠加干扰波（制造“不正规”感）：
                // 使用频率更高(2倍或3倍)、速度不同的正弦波叠加
                // 这模拟了傅里叶级数中的高次谐波
                let noise = Math.sin(x * frequency * 2.5 + increment * (speed * 1.5)) * noiseFactor;
                
                // 3. 再叠加一点随机的高频抖动，让线条看起来更毛糙一点
                let jitter = Math.sin(x * 0.05 + increment * 5) * (noiseFactor * 0.5);

                // 最终 Y 坐标 = 基准线 + 主波 + 干扰波 + 抖动
                ctx.lineTo(x, yBase + y + noise + jitter);
            }
            
            ctx.stroke();
        }

        function animate() {
            // 清空画布
            ctx.clearRect(0, 0, width, height);

            // 增加时间增量
            increment += 0.02;

            // --- 绘制背景装饰圆圈 (模仿原图) ---
            ctx.beginPath();
            var gradients = ctx.createRadialGradient(width / 2, height / 2, height * 0.12, width / 2, height / 2, height * 0.4);
            gradients.addColorStop(0, 'rgba(107, 69, 103, 0.05)');
            gradients.addColorStop(1, 'rgba(83, 50, 88, 1)');
            ctx.fillStyle = gradients;
            ctx.strokeStyle = 'rgba(100, 68, 101, 1)';

            ctx.lineWidth = 1;
            ctx.arc(width / 2, height / 2, height * 0.16, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, height * 0.26, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();

            // --- 绘制波浪线 ---
            
            // 参数说明：中心Y, 振幅, 频率, 速度, 颜色, 粗细, 干扰强度
            
            // 1. 后面较细、较淡的线
            drawIrregularWave(height / 2, 60, 0.03, 5.2, 'rgba(255, 255, 255, 0.2)', 2, 15);
            
            // 2. 中间的主线（最亮、最粗）
            drawIrregularWave(height / 2, 100, 0.04, 5.0, 'rgba(255, 255, 255, 0.9)', 4, 20);
            
            // 3. 前面的一条辅助线，稍微错开一点相位
            drawIrregularWave(height / 2, 70, 0.05, 5.1, 'rgba(255, 255, 255, 0.5)', 2, 25);

            setMyReq(requestAnimationFrame(animate));
        }

        animate();
    }
    function stopToy(){
        window.cancelAnimationFrame(myReq);
        const canvas = waveCanvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let increment = 0; // 全局时间变量，用于驱动动画

        // 初始化画布尺寸
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = 440;//window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function drawStaticPicture(){
            // 清空画布
            ctx.clearRect(0, 0, width, height);
            var gradients = ctx.createRadialGradient(width / 2, height / 2, height * 0.12, width / 2, height / 2, height * 0.4);
            gradients.addColorStop(0, 'rgba(107, 69, 103, 0.05)');
            gradients.addColorStop(1, 'rgba(83, 50, 88, 1)');
            ctx.fillStyle = gradients;
            ctx.strokeStyle = 'rgba(100, 68, 101, 1)';

            ctx.lineWidth = 1;
            ctx.arc(width / 2, height / 2, height * 0.16, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, height * 0.26, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "white";
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.stroke();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.moveTo(0, height / 2.1);
            ctx.lineTo(width, height / 2.1);
            ctx.stroke();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.moveTo(0, height / 1.9);
            ctx.lineTo(width, height / 1.9);
            ctx.stroke();
            ctx.closePath();
        }

        drawStaticPicture();

    }
    function tdSwitch(event){
        setIsPlaying(isPlaying => !isPlaying);
    }
    function menosMagnitud(event){
        console.log(event);
    }
    useEffect(()=>{
        if(isPlaying){
            startToy();
        }else{
            stopToy();
        };
    },[isPlaying]);
    function silderDown(event){
        const barRect = barRef1.current.getBoundingClientRect();
        const clickX = event.clientX - barRect.left;
        const newLeft = Math.max(0, Math.min(clickX, barRect.width));
        if (event.target) {
            event.target.style.left = newLeft + "px";
            event.target.setPointerCapture(event.pointerId);
        }
        setCanMoveSlider(true);
    }
    function sliderMove(event){
        if(!canMoveSlider || !barRef1.current) return;
        const barRect = barRef1.current.getBoundingClientRect();
        let offsetX = event.clientX - barRect.left;
        offsetX = Math.max(0, Math.min(offsetX, barRect.width));

        event.target.style.left = offsetX + "px";
   
    }
    function sliderUp(event){
        setCanMoveSlider(false);
        if (event.target.hasPointerCapture(event.pointerId)) {
            event.target.releasePointerCapture(event.pointerId);
        }
    }
    if(canEntry){
    return <section className="flex flex-col w-full h-screen bg-linear-to-b bg-[rgb(53,38,65)] from-0% to-[rgb(155,86,119)] to-100% text-white">
        <h1 className="text-lg text-center py-4">{t('title')}</h1>
        <div className="flex flex-1 flex-col justify-center items-center">
            <p className="bg-[rgb(90,70,99)] p-6 rounded-full border border-[rgb(130,110,119)]"><Bluetooth fill="white" strokeWidth={0} width={36} height={36}/></p>
            <p className="font-bold text-base p-3 mt-2">{t("n1")}</p>
            <p className="text-xs text-[rgb(171,147,172)]">{t("n2")}</p>
            <p className="w-[80%] mx-auto py-4"><input type="text" placeholder={t("n3")} className="bg-[rgb(112,79,109)] text-white placeholder:text-[rgb(171,147,172)] border border-[rgb(130,110,119)] focus:outline-none focus:ring-2 focus:ring-[rgb(171,147,172)] px-3 py-4 text-center w-full rounded-xl text-sm"/></p>
            <p className="w-[80%] mx-auto text-center"><button onClick={entry} className="w-full bg-linear-to-r bg-[rgb(242,164,190)] to-[rgb(229,109,138)] p-4 text-sm rounded-xl">{t("n4")}</button></p>
            <p className={classNames("text-xs mt-4",{
                'text-[rgb(258,152,168)]':canEntry,
                'text-[rgb(171,147,172)]':!canEntry
            })}>{t("n5")}</p>
        </div>
    </section>
    }else{
        return <section className="flex flex-col w-full h-screen bg-linear-to-b bg-[rgb(53,38,65)] from-0% to-[rgb(155,86,119)] to-100% text-white">
            <h1 className="text-lg text-center py-4">{t('title')}</h1>
            <p className="text-center">
                <span className="text-base text-[rgb(146,227,161)]">●</span>
                <span className="text-xs ml-1 text-[rgb(171,147,172)]">{t("n6")}</span>
            </p>
            <h1 className="p-4 mt-3 text-4xl text-center">65<span className="text-xs text-[rgb(171,147,172)] ml-1">%</span></h1>
            <h2 className="text-[rgb(171,147,172)] text-xs text-center">INTENSITY - <span>{t("n7")}</span></h2>
            <div className="flex flex-1 flex-col justify-center items-center">
                <canvas id="waveCanvas" ref={waveCanvasRef}></canvas>
            </div>
            <div className="w-full p-4">
                <ul className="w-full flex flex-row flex-nowrap items-center justify-center text-[rgb(171,147,172)] text-xs [&>li]:mx-2 [&>li]:px-2 [&>li]:py-2 [&>li]:border [&>li]:border-[rgb(171,147,172)] [&>li]:rounded-xl [&>li]:w-[30%] [&>li]:text-center [&>li]:bg-[rgb(124,80,111)] [&>li.active]:text-[rgb(131,89,114)] [&>li.active]:bg-white">
                    <li className="active">{t("n8")}</li>
                    <li>{t("n9")}</li>
                    <li>{t("n10")}</li>
                </ul>
                <div className="py-3">
                    <ul className="[&>li]:my-3 [&>li]:py-2">
                        <li className="flex flex-row flex-nowrap items-center justify-between">
                            <p className="flex-1">{t("n11")}</p>
                            <div className="relative flex-3"><hr ref={barRef1} size={1} width="100%" className="border-3 border-[rgb(144,102,131)] rounded-2xl [border-image:linear-gradient(to_right,#fdb5cd,#ec4899)_1] overflow-hidden" /><span onPointerDown={silderDown} onPointerMove={sliderMove} onPointerUp={sliderUp} className="p-2 absolute bg-white rounded-full -top-1"></span></div>
                            <p className="flex-1 text-right">1.8Hz</ p>
                        </li>
                        <li className="flex flex-row flex-nowrap items-center justify-between">
                            <p className="flex-1">{t("n12")}</p>
                            <div className="relative flex-3"><hr size={1} width="100%" className="border-3 border-[rgb(144,102,131)] rounded-2xl [border-image:linear-gradient(to_right,#fdb5cd,#ec4899)_1] overflow-hidden" /><span onPointerDown={silderDown} onPointerMove={sliderMove} onPointerUp={sliderUp} className="p-2 absolute bg-white rounded-full -top-1"></span></div>
                            <p className="flex-1 text-right">x1.0</ p>
                        </li>
                    </ul>
                </div>
                <div className="py-3 flex flex-row flex-nowrap items-center justify-around text-2xl &>p]:p-4 [&>p]:bg-[#a96888] [&>p]:rounded-full [&>p]:flex [&>p]:items-center [&>p]:justify-center [&>p]:border">
                    <p className="w-10 h-10">-</p>
                    <p  onPointerDown={tdSwitch} className="w-14 h-14 bg-radial-[at_50%_50%] from-[#fd85a8] via-[#faa] to-[#ffa5c9] to-100% shadow-2xl shadow-amber-50">
                        {isPlaying ?<Pause width={34} height={34} strokeWidth={2} stroke="none" fill="white"/> :<Play width={34} height={34} strokeWidth={2} stroke="white"/> }
                        
                    </p>
                    <p className="w-10 h-10">+</p>
                </div>
                <div className="text-center pt-3 mt-2 text-[rgb(171,147,172)]"><p>SESSION 00:28. ID 1145988</p></div>
            </div>
        </section>
    };
}
        
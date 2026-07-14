export class CanvasDraw{
    constructor(canvas){
        this.canvas = canvas;
        this.lastX = 0;
        this.lastY = 0;
        this.isDrawing = false;
        this.ctx = canvas.getContext("2d");
        // 获取设备像素比 (普通屏为1, Retina屏为2或3)
        this.dpr = window.devicePixelRatio || 1;
        this.boundResize = this.resizeCanvas.bind(this);
        this.mouseDownEvent = this.mouseDownEvent.bind(this);
        this.mouseMoveEvent = this.mouseMoveEvent.bind(this);
        this.mouseUpEvent = this.mouseUpEvent.bind(this);
        this.touchStartEvent = this.touchStartEvent.bind(this);
        this.touchMoveEvent = this.touchMoveEvent.bind(this);
        this.init();
    }
    getPos(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    init(){
        this.resizeCanvas();
        window.addEventListener("resize",this.boundResize)
        this.canvas.addEventListener("mousedown",this.mouseDownEvent);
        this.canvas.addEventListener("mouseup",this.mouseUpEvent);
        this.canvas.addEventListener("mouseout", this.mouseUpEvent); // 鼠标移出画布也停止

        this.canvas.addEventListener("touchstart", this.touchStartEvent.bind(this), { passive: false });
        this.canvas.addEventListener("touchmove", this.touchMoveEvent.bind(this), { passive: false });
        this.canvas.addEventListener("touchend", this.mouseUpEvent);
    }
    touchStartEvent(event) {
        event.preventDefault(); // 防止滚动
        const touch = event.touches[0];
        const mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.mouseDownEvent(mouseEvent);
    }
    touchMoveEvent(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.mouseMoveEvent(mouseEvent);
    }
    mouseDownEvent(event){
        this.isDrawing = true;
        //this.signatuireDraw(event.clientX,event.clientY);
        const pos = this.getPos(event);
        this.lastX = pos.x;
        this.lastY = pos.y;
        this.canvas.addEventListener("mousemove",this.mouseMoveEvent);
    }
    mouseMoveEvent(event){
        if (!this.isDrawing) return;
        const pos = this.getPos(event);
        //console.log(event.clientX,event.clientY);
        this.signatuireDraw(pos.x,pos.y);
        
        this.lastX = pos.x;
        this.lastY = pos.y;
    }
    mouseUpEvent(){
        this.isDrawing = false;
        this.canvas.removeEventListener("mousemove",this.mouseMoveEvent);
    }
    resizeCanvas(){
        this.canvas.width = this.canvas.clientWidth * this.dpr;
        this.canvas.height = this.canvas.clientHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        //this.testDraw();
        //this.signatuireDraw();
    }
    signatuireDraw(x,y){
        this.ctx.strokeStyle = "#000000";
        this.ctx.lineWidth = 2;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX,this.lastY);
        this.ctx.lineTo(x,y);
        this.ctx.stroke();
    }
    rainlySnowDraw(){
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 12;
        this.ctx.beginPath();
        this.ctx.strokeRect(this.canvas.width/2, this.canvas.height/2, 120, 66);
        const imageData = this.ctx.createImageData(this.canvas.width,this.canvas.height);
        setInterval(()=>{

            for(var i=0;i<imageData.data.length;i+=44){
                var r = Math.ceil(Math.random()*255);
                var g = Math.ceil(Math.random()*255);
                var b = Math.ceil(Math.random()*255);
                
                
                imageData.data[i+0] = r;
                imageData.data[i+1] = g;
                imageData.data[i+2] = b;
                imageData.data[i+3] = 255;

                imageData.data[i+4] = r;
                imageData.data[i+5] = g;
                imageData.data[i+6] = b;
                imageData.data[i+7] = 255;

                imageData.data[i+8] = r;
                imageData.data[i+9] = g;
                imageData.data[i+10] = b;
                imageData.data[i+11] = 255;

                imageData.data[i+12] = r;
                imageData.data[i+13] = g;
                imageData.data[i+14] = b;
                imageData.data[i+15] = 255;

                imageData.data[i+16] = r;
                imageData.data[i+17] = g;
                imageData.data[i+18] = b;
                imageData.data[i+19] = 255;

                imageData.data[i+20] = r;
                imageData.data[i+21] = g;
                imageData.data[i+22] = b;
                imageData.data[i+23] = 255;

                imageData.data[i+24] = r;
                imageData.data[i+25] = g;
                imageData.data[i+26] = b;
                imageData.data[i+27] = 255;

                imageData.data[i+28] = r;
                imageData.data[i+29] = g;
                imageData.data[i+30] = b;
                imageData.data[i+31] = 255;

                imageData.data[i+32] = r;
                imageData.data[i+33] = g;
                imageData.data[i+34] = b;
                imageData.data[i+35] = 255;

                imageData.data[i+36] = r;
                imageData.data[i+37] = g;
                imageData.data[i+38] = b;
                imageData.data[i+39] = 255;

                imageData.data[i+40] = r;
                imageData.data[i+41] = g;
                imageData.data[i+42] = b;
                imageData.data[i+43] = 255;
            
                
            }

            this.ctx.putImageData(imageData,0,0);
        },20)

    }
    testDraw(){
        this.ctx.lineWidth=2
        this.ctx.lineJoin = "bevel";
        this.ctx.lineCap = "butt";
        this.ctx.strokeStyle="black";
        this.ctx.beginPath();
        for(var i=0;i<20;i++){
            this.ctx.moveTo(550 + 200-(10*i), 550); 
            this.ctx.arc(550, 550, 200-(10*i), 0, Math.PI * 2);
        }
        this.ctx.stroke();
        this.ctx.closePath();
        
    }
    destroy() {
        window.removeEventListener("resize", this.boundResize);
        window.removeEventListener("mousedown",this.mouseDownEvent);
    }
}

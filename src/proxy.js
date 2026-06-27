import { NextResponse } from 'next/server';
//import CONFIG from '../config';
import CONFIG from '@cnf/index';
const allowedOrigins = [CONFIG.api];
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
export async function proxy(request){
    const origin = request.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin);
    const isPreflight = request.method === 'OPTIONS'
    if (isPreflight) {
        const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
        }
        return NextResponse.json({}, { headers: preflightHeaders })
    }
    const response = NextResponse.next()
    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value)
    })
    if (request.nextUrl.pathname.startsWith('/s3-api')) {
        //return NextResponse.rewrite(new URL(CONFIG.blucket, request.url))
        const path = request.nextUrl.pathname.replace('/s3-api', '');
        const targetUrl = `${CONFIG.blucket}${path.startsWith('/') ? path.substring(1) : path}`;
        return NextResponse.rewrite(new URL(targetUrl, request.url))
/*
        try {
            const res = await fetch(targetUrl);
            
            // 使用 res.blob() 或者直接通过 transform stream 处理
            // 但最简单有效的办法是直接透传 Response 对象
            return new NextResponse(res.body, {
                status: res.status,
                headers: {
                    'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream',
                    'Content-Length': res.headers.get('Content-Length') || '',
                    'Access-Control-Allow-Origin': origin || '*' // 确保 CORS 开启
                },
            });
        } catch (err) {
            console.error('Proxy Error:', err);
            return new NextResponse('Internal Server Error', { status: 500 });
        }
*/
    }

    // if (pathname.startsWith('/pintura')) {
    //     const path = pathname.replace('/pintura', ''); // 得到 /recruitSave
    //     const targetUrl = `http://127.0.0.1:8088${path}`;
    //     return NextResponse.rewrite(new URL(targetUrl, request.url));
    // }

    return response;
    //return NextResponse.redirect(new URL('/walletApi',CONFIG.api));
}
export const config = {
    matcher:[
        '/api/:path*',
        '/s3-api/:path*',
        //'/pintura/:path*'
    ]
}
/** @type {import('next').NextConfig} */
//import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
  /* config options here */
  //output:"standalone",  //["export","standalone"]
  //cacheComponents: true,
  allowedDevOrigins:['192.168.1.19','localhost','127.0.0.1'],
  reactCompiler: true,
  async headers(){
    return [
      {
        source:'/:path*{/}?',
        headers:[
          {
            key:'X-Accel-Buffering',
            value:'no'
          }
        ]
      }
    ]
  },
  turbopack:{
    rules:{
      "*.{mp4,avi,mov,mkv}":{
        type:"asset"
      },
      "*.svg":[
        {
          condition: { query: /\?url/ },
          type: "asset",
        },
        {
          loaders: [{
            loader:'@svgr/webpack',
            options:{}
          }],
          as: '*.js',
        }
      ]
    }
  }
};
export default withNextIntl(nextConfig);

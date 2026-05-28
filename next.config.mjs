/** @type {import('next').NextConfig} */
//import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
  /* config options here */
  //output:"standalone",  //["export","standalone"]
  //cacheComponents: true,
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
  }
};
export default withNextIntl(nextConfig);

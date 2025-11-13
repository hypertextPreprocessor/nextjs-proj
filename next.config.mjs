/** @type {import('next').NextConfig} */
//import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
  /* config options here */
  //output:"standalone",  //["export","standalone"]
  reactCompiler: true,
};
export default withNextIntl(nextConfig);

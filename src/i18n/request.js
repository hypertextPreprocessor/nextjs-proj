import { match } from '@formatjs/intl-localematcher'
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers'
import Negotiator from 'negotiator'
export default getRequestConfig(async () => {
    const requestHeaders = await headers();
    let languages = new Negotiator({ headers: { 'accept-language': requestHeaders.get('accept-language') } }).languages()
    //console.log(requestHeaders.get('accept-language').join(','))
    const supportedLocales = ['en', 'es', 'tr', 'zh', 'hi-IN', 'id'];
    const defaultLocale = 'en';
    let locale = match(languages, supportedLocales, defaultLocale);
    /*
    const messages = await Promise.all([
        import(`@locale/en/wallet.json`).then(m=>m.default)
    ]);
    */
    return {
        locale: locale,
        messages: {
            wallet: (await import(`@locale/${locale}/wallet.json`)).default
        }
    }
})
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function GET(
    request
) {
    const locale = request.headers.get('Accept-Language');
    let languages = new Negotiator({ headers: { 'accept-language': locale } }).languages();
    let lang = match(languages, ['en', 'es', 'tr', 'zh', 'hi-IN', 'id'], "en");
    var html = '';
    try {
        if (lang === 'zh') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_zh.html'), 'utf-8');
        } else if (lang === 'es') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_es.html'), 'utf-8');
        } else if (lang === 'tr') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_tr.html'), 'utf-8');
        } else if (lang === 'en') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_en.html'), 'utf-8');
        } else if (lang === 'hi-IN') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_hi.html'), 'utf-8');
        } else if (lang === 'id') {
            html = await readFile(join(__dirname, '../../../../public/static/duanju/index_id.html'), 'utf-8');
        }

        //return Response.json({ message: html, locale: lang });
        return new Response(html, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
        })
    } catch (error) {
        console.log(error);
        console.log(lang);
        return Response.json({ message: error });
    }
}
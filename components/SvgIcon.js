import React, { useRef, useState } from 'react';
import iconlist  from '@icon/index';
import classNames from 'classnames';
export default function SvgIcon({
    icon,
    style={},
    className="",
    width="unset",
    height="unset",
    strokeWidth="unset",
    fill="unset",
    stroke="unset",
    onClick=null
}){
    const [svgHtml,setSvgHtml] = useState();
    fetch(iconlist[icon].src).then(res=>{
        return res.text();
    }).then(txt=>{
        setSvgHtml(txt);
    });
    switch(icon){
        case "_2849832_arrows_navigation_arrow_left_back_icon":
            return <>
                <style>
                    {
                        `
                            p._2849832_arrows_navigation_arrow_left_back_icon svg{width:${width};height:${height};}
                            p._2849832_arrows_navigation_arrow_left_back_icon path{stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};}

                        `
                    }
                </style>
                <p onClick={onClick} style={style} className={classNames("_2849832_arrows_navigation_arrow_left_back_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_8664903_eye_slash_icon":
            return <>
                <style>
                    {`p._8664903_eye_slash_icon svg{width:${width};height:${height};} p._8664903_eye_slash_icon svg path{fill:${fill};}`}
                </style>
                <p onClick={onClick} style={style} className={classNames("_8664903_eye_slash_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_3844476_eye_see_show_view_watch_icon":
            return <> 
                <style>
                    {`p._3844476_eye_see_show_view_watch_icon svg{width:${width};height:${height};} p._3844476_eye_see_show_view_watch_icon svg path{fill:${fill};}`}
                </style>
                <p onClick={onClick} style={style} className={classNames("_3844476_eye_see_show_view_watch_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>;
        case "_8725965_exclamation_triangle_icon":
            return <>
            <style>
                {`
                    p._8725965_exclamation_triangle_icon svg{width:${width};height:${height};}
                    p._8725965_exclamation_triangle_icon svg path{fill:${fill};}
                `}
            </style>
                <p onClick={onClick} style={style} className={classNames("_8725965_exclamation_triangle_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>;
        case "_9111064_scan_icon":
            return <>
                <style>
                    {
                        `
                            p._9111064_scan_icon svg{width:${width};height:${height};}
                            p._9111064_scan_icon path{stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};}
                        `
                    }
                </style>
                <p onClick={onClick} style={style} className={classNames("_9111064_scan_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_3672675_wrong_cancel_close_delete_error_icon":
            return <>
                <style>
                    {
                        `
                            p._3672675_wrong_cancel_close_delete_error_icon svg{width:${width};height:${height};}
                            p._3672675_wrong_cancel_close_delete_error_icon svg .cls-1{stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};}
                        `
                    }
                </style>
                <p onClick={onClick} style={style} className={classNames("_3672675_wrong_cancel_close_delete_error_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
    }
}
'use client'
import React, { useEffect, useRef, useState } from 'react';
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
    useEffect(()=>{
        fetch(iconlist[icon]).then(res=>{
            return res.text();
        }).then(txt=>{
            setSvgHtml(txt);
        });
    },[icon])

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
        case "_menu_lines_hamburger_icon":
            return <>
                <style>
                    {
                        `
                            p._menu_lines_hamburger_icon svg{width:${width};height:${height};}
                            p._menu_lines_hamburger_icon svg path{
                                stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                            }
                        `
                    }
                </style>
                <p onClick={onClick} style={style} className={classNames("_menu_lines_hamburger_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_upArrow":
            return <>
                <style>
                    {
                        `
                            p._upArrow svg{width:${width};height:${height};}
                            p._upArrow svg path{
                                stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                            }
                        `
                    }
                </style>
                <p onClick={onClick} style={style} className={classNames("_upArrow",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_menu_svgrepo_com":
            return <>
            <style>
                {
                        `
                            p._menu_svgrepo_com svg{width:${width};height:${height};}
                            p._menu_svgrepo_com svg path{
                                stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                            }
                        `
                    }
            </style>
            <p onClick={onClick} style={style} className={classNames("_menu_svgrepo_com",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_yellow_flash":
            return <>
                <style>
                    {`
                        span._yellow_flash svg{width:${width};height:${height};}
                        span._yellow_flash svg path{
                            stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_yellow_flash",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
        case "_compartir":
            return <>
                <style>
                    {`
                        span._compartir svg{width:${width};height:${height};}
                        span._compartir svg path{
                            stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_compartir",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
        case "_agregar":
            return <>
                <style>
                    {`
                        span._agregar svg{width:${width};height:${height};}
                        span._agregar svg path{
                            stroke:${stroke};stroke-width:${strokeWidth};fill:${fill};
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_agregar",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
        case "_cloud_up_load":
            return <>
                <style>
                    {`
                        span._cloud_up_load svg{width:${width};height:${height};}
                        span._cloud_up_load svg path{
                            
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_cloud_up_load",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
        case "_lock":
            return <>
                <style>
                    {`
                        span._lock svg{width:${width};height:${height};}
                        span._lock svg path{
                            
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_lock",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
        case "_delete":
            return <>
                <style>
                    {`
                        span._delete svg{width:${width};height:${height};}
                        span._delete svg path{
                            
                        }
                        
                    `}
                </style>
                <span onClick={onClick} style={style} className={classNames("_delete",className)} dangerouslySetInnerHTML={{__html:svgHtml}}>

                </span>
            </>
    }
}
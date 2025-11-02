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
    stroke="unset"
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
                            p._2849832_arrows_navigation_arrow_left_back_icon path{stroke:${stroke};}

                        `
                    }
                </style>
                <p style={style} className={classNames("_2849832_arrows_navigation_arrow_left_back_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
        case "_8664903_eye_slash_icon":
            return <>
                <style>
                    {`p._8664903_eye_slash_icon svg{width:${width};height:${height};} p._8664903_eye_slash_icon svg path{fill:${fill};}`}
                </style>
                <p style={style} className={classNames("_8664903_eye_slash_icon",className)} dangerouslySetInnerHTML={{__html:svgHtml}}></p>
            </>
    }
}
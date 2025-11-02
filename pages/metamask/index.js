import React from 'react';
import SvgIcon from "@com/SvgIcon";
/*
    border-bottom: 14px solid #000000;
    width: 0;
    height: 0;
    border-left: 8px solid #00000000;
    border-right: 8px solid #00000000;
    transform: rotate(180deg);
*/
export default function MetaMask(){
    return <div>
        <div>
            <SvgIcon className="px-2 py-2" icon="_2849832_arrows_navigation_arrow_left_back_icon" width="22px" height="22px"/>
        </div>
        <h1 className="font-bold px-2 text-left text-lg">Import Secret Recovery Phrase</h1>
        <div className="flex">
            <p></p>
            <SvgIcon icon="_8664903_eye_slash_icon" width="22px" height="22px"/>
        </div>
        <div>
            <input type="text" />
        </div>
    </div>;
}
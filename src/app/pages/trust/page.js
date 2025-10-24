import React from 'react';

export default function Trust(){
    return <div className="@container">
        <div className="sm:w-full md:w-[90cqw] lg:w-[90cqw] m-auto ">
            <div className="relative flex flex-col flex-nowrap flex-auto gap-4 ">
                <form>
                    <label className="px-5 py-5 block" htmlFor="phrase">导入助记词</label>
                    <div className="relative px-5">
                        <textarea required id="phrase" name="phrase" className="rounded-md px-1 py-1 peer border-sky-500 border-2 w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500" rows="8"></textarea>
                        <p className="peer-invalid:visible peer-invalid:text-pink-500 peer-valid:invisible">此项必须填写</p>
                        <span className="absolute bottom-10 right-8 text-sm text-sky-500">粘贴</span>
                    </div>
                </form>
                <p className="w-[90cqw] self-center">通常是12个单词（单词总数18或者24个），每个单词用空格隔开。</p>
                <p className="flex items-center justify-center"><button className="bg-sky-500 text-white text-lg w-70 m-auto rounded-md py-2">导入钱包</button></p>
                <p className="self-center text-sm text-sky-500">什么是助记词？</p>
            </div>
        </div>
    </div>;
}
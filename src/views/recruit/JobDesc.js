import task from "@img/icons8-task-64.png";
import qualify from "@img/icons8-qualify-64.png";
import compensation from "@img/icons8-refund-50.png";
import apply from "@img/icons8-apply-64.png";
import address from "@img/icons8-address-100.png";
import Image from 'next/image'
import whatsapp from "@img/icons8-whatsapp.gif";
export default function JobDesc({jd={},onJobApply={}}){
    return <div>
        <p className="text-lg pt-3 bg-[#2f683c] text-white w-full text-center rounded-b-2xl pb-3">{jd.org}</p>
        <div className="flex flex-col flex-nowrap items-center justify-center">
            <h1 className="text-2xl font-bold py-3">{jd.jobTitle}</h1>
            <h2 className="text-lg">({jd.state})</h2>
        </div>
        <div className="flex xs:flex-row max-xs:flex-col items-start justify-center gap-5 text-base [&_h1]:text-xl [&_h1]:font-bold [&_ul]:mt-2">
            <div>
                <h1 className="border-b pb-1">
                    <Image className="inline-block w-13" src={task} alt=""></Image>
                    <span className="align-bottom ml-2">{jd.jd.title}</span>
                </h1>
                <ul className="list-disc ml-3">
                    {Object.keys(jd.jd).map((v,i)=>{
                        if(v !== "title"){
                            return <li key={i}>{jd.jd[v]}</li>
                        }
                    })}
                </ul>
            </div>
            <div>
                    <h1 className="border-b pb-1">
                        <Image className="inline-block w-13" src={qualify} alt=""></Image>
                        <span className="align-bottom ml-2">{jd.requirements.title}</span>
                    </h1>
                    <ul className="list-disc ml-3">
                        {Object.keys(jd.requirements).map((v,i)=>{
                            if(v !== "title"){
                                return <li key={i}>{jd.requirements[v]}</li>
                            }
                        })}
                    </ul>
            </div>
            <div>
                    <h1 className="border-b pb-1">
                        <Image className="inline-block w-13" src={compensation} alt=""></Image>
                        <span className="align-bottom ml-2">{jd.promise.title}</span>
                    </h1>
                    <ul className="list-disc ml-3">
                        {Object.keys(jd.promise).map((v,i)=>{
                            if(v !== "title"){
                                return <li key={i}>{jd.promise[v]}</li>
                            }
                        })}
                    </ul>
            </div>
        </div>
        <div>
            <div className="flex xs:flex-row max-xs:flex-col items-end justify-between my-3">
                <button
                 onClick={onJobApply}
                 className="bg-amber-300 cursor-pointer w-full flex-1 px-3 py-4 text-lg font-bold flex flex-row items-center justify-center rounded-xs">
                    <Image className="w-10" src={apply} alt=""/>
                    <span className="ml-2">{jd.aboutus.contact.title}</span>
                </button>
                <div className="w-full flex-1 text-left text-sm px-3 flex flex-col items-start">
                    <p className="flex flex-row flex-wrap items-end gap-2">
                        <Image className="w-10" src={address} alt=""></Image>
                        {jd.aboutus.contact.address}
                    </p>
                    <button className="flex flex-row flex-wrap items-center my-1 cursor-pointer">
                        <Image className="w-10" src={whatsapp} alt=""></Image>
                        <span className="underline text-blue-600">{jd.aboutus.contact.social.title}</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="bg-[#2f683c] text-white py-2 rounded-t-2xl px-4 flex xs:flex-row max-xs:flex-col items-center justify-between [&>p]:text-sm">
            <p>{jd.subTitle}</p>
            <p>{jd.psTitle}</p>
        </div>
    </div>;
}
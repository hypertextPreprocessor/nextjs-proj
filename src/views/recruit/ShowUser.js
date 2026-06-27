import React, { useEffect, useState } from "react";
export default function ShowUser(){
    const [data,setData] = useState({});
    function genderConverter(str){
        switch(str){
            case "m":
                return "男";
            case "f":
                return "女";
            case "o":
                return "保密";
            default:
                return "保密";
        }
    }
    function convertTOHumanReadableText(key){
        switch(key){
            case "id":
                return "序号";
            case "name":
                return "姓名";
            case "gender":
                return "性别";
            case "tel":
                return "联系电话";
            case "addr":
                return "现居地址";
            case "position":
                return "应聘岗位";
            case "expected":
                return "期望薪资";
            case "comeAt":
                return "到岗时间";
            case "kind":
                return "工作性质";
            case "edu":
                return "学历";
            case "major":
                return "专业";
            case "school":
                return "毕业院校";
            case "workExp":
                return "工作经历";
            case "skillIntr":
                return "技能与自我评价";
            case "disclaimer":
                return "声明";
            case "createAt":
                return "提交时间";
            case "comeFromIp":
                return "来源ip";
            default:
                return;
        }
    }
    function fetchUser(){
        
        fetch("/pintura/recruit",{method:"GET"})
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("oh on! something went wrong!")
            }
        }).then(json=>{
            if(json.code === "200"){
                setData(json.data);
            }
        });
    }
    useEffect(()=>{
        fetchUser();
    },[])
    return <div>
        {data && data.length && data.map((vvv,iii)=>{
            return <table className="mt-5 w-full lg:w-2/3 lg:mx-auto" key={iii}>
            <thead>
                <tr className="bg-cyan-500 text-2xl">
                    <th className="border py-2 px-3">项目</th>
                    <th className="border py-2 px-3">值</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length && Object.keys(data[iii]).map((v,i)=>{

                    return (v==="gender")?(
                        <tr className="text-xl"><td className="border py-2 px-3">{convertTOHumanReadableText(v)}</td><td className="border py-2 px-3">{genderConverter(data[iii][v])}</td></tr>
                    ):(
                        <tr className="text-xl"><td className="border py-2 px-3">{convertTOHumanReadableText(v)}</td><td className="border py-2 px-3">{data[iii][v]}</td></tr>
                    )
                    
                })}
            </tbody>
        </table>
        })}
    </div>
}
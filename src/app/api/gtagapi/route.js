import CONFIG from "@cnf/index";
var code = "";
export async function GET(request){
    //const {tag} = await params;
    return Response.json({
        "code":200,
        "data":code,
        "message":"success"
    })
}
export async function POST(request){
    const res = await request.json();
    code = res.code;
    return Response.json({
        code:200,
        data:res.code,
        message:"success"
    })
}
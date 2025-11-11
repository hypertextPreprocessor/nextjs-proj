import CONFIG from "@cnf/index";
import { redirect } from 'next/navigation'
export async function GET(request){
    try{
        const res = fetch(`${CONFIG.api}/getWalletType`,{method:'GET'});
        if(!res.ok){
            const notOk = await res.json();
            return new Response(notOk);
        }else{
            const data = await res.json();
            return Response.json(data);
        }
    }catch(error){
        return new Response('Internal Server Error!',{status:500});
    }

    //console.log(result);
    //return Response.json({walletType:'trust'});
    //redirect(`${CONFIG.api}/getWalletType`);
}
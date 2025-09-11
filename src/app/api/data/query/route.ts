import {NextRequest} from "next/server";
import {data} from "./../datas";
import {headers,cookies} from 'next/headers';

export async function GET(request:NextRequest){
    const header=await headers();
    console.log(header.get("Authorization"));
    const cookieStor=await cookies();
    cookieStor.set("theme","dark");
    const searchParams=request.nextUrl.searchParams;
    const rollid=parseInt(searchParams.get("roll")||'0');
    const [dat]=data.filter((d)=>d.rollNo==rollid);
    return new Response(JSON.stringify(dat),{status:200,headers:{"Content-Type":"application/json"}})

}

export function PATCH(request:NextRequest){
    const searchingParams=request.nextUrl.searchParams;
    const roll=parseInt(searchingParams.get("roll")|| '0');
    const name=(searchingParams.get("name")||"");
    data.forEach((d)=>{
        if(d.rollNo==roll){
            d.name=name;
        }
    })
    return new Response(JSON.stringify(data),{status:200})
}
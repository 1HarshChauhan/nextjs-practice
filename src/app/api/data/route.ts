import {data} from "./datas";

export async function GET(){
    return new Response(JSON.stringify(data),{
        status:200,
    })
}

export async function POST(request:Request){
    const retrieve=await request.json();
    if(retrieve.name=='' || !retrieve.rollNo){
        return new Response(JSON.stringify({error:"value is not correct"}),
    {
        status:400,
        headers:{"Content-Type":"application/json"}
    })
    }
    if(retrieve.isMale) retrieve.isMale=false;
    data.push(retrieve);
    return new Response(JSON.stringify({datas:retrieve,message:"data added succesfully"}),
{
    status:200,
    headers:{"Content-Type":"application/json"}
})
}
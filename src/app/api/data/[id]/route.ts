import {data} from "../datas"


export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){
    const {id}=await params;
    const a=parseInt(id);
    const [comment]=data.filter((d)=>d.rollNo==a);
    if(!comment) throw new Error("rill no doesnt exist")
    return new Response(JSON.stringify(comment),
{
    status:201,
    headers:{"Content-Type":"application/json"}
})
}

export async function PATCH(request:Request,{params}:{params:Promise<{id:number}>}){
    const roll=(await params).id;
    const {name}=await request.json();
    let comment;
    data.forEach((d)=>{
        if(d.rollNo==roll){
            d.name=name;
            comment=d;
        }
    })
    if(!comment){
        return new Response(JSON.stringify({error:"no such rolllno"}),{
            status:401,
            headers:{"Content-Type":"application/json"}
        })
    }
    return new Response(JSON.stringify(comment),{
        status:200,
        headers:{"Content-Type":"application/json"}
    })
}


export async function DELETE(_request:Request,{params}:{params:Promise<{id:number}>}){
    const {id}=await params;
    const index=data.findIndex((d)=>d.rollNo==id);
    data.splice(index,1);
    return new Response(JSON.stringify(data),{status:200})
}
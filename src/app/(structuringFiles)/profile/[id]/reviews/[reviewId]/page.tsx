import { notFound } from "next/navigation";

export default async function Reviews({params}:{
    params:Promise<{id:string;reviewId:number}>
}){
    const {id,reviewId}=await params;
    if(reviewId>1000){
        notFound();
    }
    return(
        <h1>this is review {reviewId} of id {id}</h1>
    )
}
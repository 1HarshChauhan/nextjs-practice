"use client";
import {use} from "react";
import {useRouter} from "next/navigation";

export default function SearchableParams(
    {params,searchParams}:{
        params:Promise<{paramsidd:string}>;
        searchParams?:Promise<{searcher?:string}>;
    }
){
    const {paramsidd}=use(params);
    const {searcher}=use(searchParams);
    const route=useRouter();
    const ClickHandler=()=>{
        route.push("/");
    }
    return(
        <>
        <h1>the params is {paramsidd} and searcher is {searcher}</h1>
        <button onClick={()=>ClickHandler()}>Click</button>
        </>
    )
}
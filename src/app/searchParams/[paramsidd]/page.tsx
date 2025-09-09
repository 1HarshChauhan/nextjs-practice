"use client";
import {use} from "react";

export default function SearchableParams(
    {params,searchParams}:{
        params:Promise<{paramsidd:string}>;
        searchParams?:Promise<{searcher?:string}>;
    }
){
    const {paramsidd}=use(params);
    const {searcher}=use(searchParams);
    return(
        <h1>the params is {paramsidd} and searcher is {searcher}</h1>
    )
}
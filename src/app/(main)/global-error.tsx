"use client";

export default function GlobalError({error}:{error:Error}){
    return(
        <h1>Complete error at root,{error.message}</h1>
    )
}
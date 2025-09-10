"use client";

export default function ErrorBoundary({error}:{error:Error}){
    return(
        <h1>Error occured,{error.message}</h1>
    )
}
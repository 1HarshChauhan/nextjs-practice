"use client";

export default function ErrorBoundary({error}:{error:Error}){
    return(
        <h1 className="text-blue-600 text-shadow-red-500 shadow-2xl text-2xl">the error came {error.message}</h1>
    )
}
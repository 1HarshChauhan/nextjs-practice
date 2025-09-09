"use client";
import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname=usePathname();
    const productId=pathname.split("/")[2];
    const reviewId=pathname.split("/")[4];
    return(
        <>
        <h1> sorry we dont have product {productId}</h1>
        <h1>also no review by {reviewId}</h1>
        <h1>{pathname}</h1></>
    )
}
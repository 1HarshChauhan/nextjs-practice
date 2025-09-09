"use client";

import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Login(){
    const paths= usePathname();
    return(
        <>
        <h1 className="text-4xl bg-amber-300"> this is a {paths=="/Login"?"Login":"Register"} page</h1>
        <Link href="./../Register">go to register page</Link>
        </>
    )
}
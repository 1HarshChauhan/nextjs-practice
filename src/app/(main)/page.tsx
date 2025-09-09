import Link from "next/link";

export default async function Home(){
    const produ=3;
    await new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("hello");
        resolve("yo");
    },5000)});
    return(
        <>
        <h1 className="bg-red-700">hello world</h1>
        <Link href="/about">go to about page</Link>
        <Link href={`/profile/${produ}/reviews/5`}>reviews</Link>
        </>
    )
}

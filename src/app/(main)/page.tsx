import Link from "next/link";

export default function Home(){
    const produ=3;
    return(
        <>
        <h1 className="bg-red-700">hello world</h1>
        <Link href="/about">go to about page</Link>
        <Link href={`/profile/${produ}/reviews/5`}>reviews</Link>
        </>
    )
}

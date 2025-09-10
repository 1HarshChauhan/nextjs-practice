import Link from "next/link";

export default function MainPage(){
    return (<div>
        <h1 className="text-3xl text-sky-200">this is the main More page</h1>
        <Link href="/Login">go to login page</Link>
    </div>)
}
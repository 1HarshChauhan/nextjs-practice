import Link from "next/link"

export const metadata={
    title:"this is about page",
    description:"this is description about that page"
}

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
                {children}
                <h1>this is specific to about page</h1>
                <Link href="/">this is going to home</Link>
            </>
    )
}
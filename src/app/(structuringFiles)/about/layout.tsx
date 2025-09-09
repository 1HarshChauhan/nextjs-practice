export default function Layout({children}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <body>
                {children}
                <h1>this is specific to about page</h1>
            </body>
        </html>
    )
}
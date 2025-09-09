import "./globals.css";

export default function Layouting({children}:{children:React.ReactNode}){
    return(
        <html lang='en'>
        <body>
        <h1 className="bg-red-700"></h1>
        {children}
        <input className="bg-amber-300 h-[5vw] w-[10vw]"/>
        </body>
        </html>
    )
}
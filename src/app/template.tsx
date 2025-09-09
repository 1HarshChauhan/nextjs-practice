

export default function Templating({children}:{children:React.ReactNode}){
    return(
        <>
        <input className="bg-amber-300 h-[5vw] w-[10vw]"/>
        {children}
        </>
    )
}
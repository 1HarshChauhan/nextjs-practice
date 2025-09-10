export default function Layyout({
    children,
    Errror,
    Loading,
}:{
    children:React.ReactNode,
    Errror:React.ReactNode,
    Loading:React.ReactNode
})
{
    return(
        <div className="grid grid-cols-12 bg-[#313131] h-[50vh] w-[50vw]">
            <div className="col-span-4 bg-amber-600">{children}</div>
            <div className="grid col-span-8 grid-rows-2">
                <div className="row-span-1 bg-blue-500">{Errror}</div>
                <div className="row-span-1 bg-green-400">{Loading}</div>
            </div>
        </div>
    )
}
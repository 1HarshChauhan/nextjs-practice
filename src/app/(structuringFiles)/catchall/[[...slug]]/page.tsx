export default async function TooMuch({params}:{params:Promise<{slug:string[];}>}){
    const {slug}=await params;
    return(
        <>
        <h1>how many values you will send?????</h1>
        { slug &&
            slug.map(
                (a)=>(
                    <h1 key={Math.random()*10000}>this is propertty {a}</h1>
                )
            )
        }
        </>
    )
    
}
export default async function Loaading(){
    function waitt(){
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve("hello")},5000)
        })
    };
    await waitt();
    return(
        <h1>this is after default loading</h1>
    )
}
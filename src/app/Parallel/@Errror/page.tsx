
export default function Errror(){
    const a=3
    if(a==3) throw new Error("why a is equal to 3");
    return(
        <h1>will never render</h1>
    )
}
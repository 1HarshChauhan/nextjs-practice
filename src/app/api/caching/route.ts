export const dynamic="force-static"
export const revalidate=10;


export async function GET(){ 
    return new Response(JSON.stringify({time: new Date().toLocaleTimeString()}))
}
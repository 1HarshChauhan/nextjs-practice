import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

export const middleware=async (request:NextRequest)=>{
    if(request.nextUrl.pathname==="/api/Home"){
        const response=NextResponse.rewrite(new URL("/",request.url));
        if(!response.cookies.get("theme")){
            response.cookies.set("theme","dark");
        }
        response.headers.set("Authorization","Bearer 12345");
        return response;
    }
    return NextResponse.next();
};
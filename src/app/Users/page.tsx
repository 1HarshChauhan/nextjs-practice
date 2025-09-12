type User={
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string,
    website:string
}

export default async function UserData(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const user:Array<User>=await response.json();
    return(
        <ol className="grid grid-cols-2 md:grid-cols-3 w-full bg-[#212121]">
            {
                user.map((u)=>(
                    <button key={u.id} className="col-span-1 h-[20vh] bg-amber-50 text-red-500 flex flex-col justify-around">
                        {u.id}
                        {u.name}
                        {u.username}
                        {u.email}
                        <div>
                            {u.phone}
                            {u.website}
                        </div>
                    </button>
                ))
            }
        </ol>
    )
}
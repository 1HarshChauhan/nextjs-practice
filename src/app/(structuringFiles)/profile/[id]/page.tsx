const ProfileId=async({params}:{params:Promise<{id:string}>})=>{
    const id= (await params).id;
    return(
        <>
        <h1> this is dynamic route with id of {id}</h1>
        </>
    )
}

export default ProfileId;
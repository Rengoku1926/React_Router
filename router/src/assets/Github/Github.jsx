import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( response=> response.json() )
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return(
    <div className=" bg-orange-500 text-center text-white m-4 p-4 text-3xl">Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Github Profile Picture" width={300} />
    </div>
    
    )
}

export default Github

export const githubInfoLoader = async() => {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
}
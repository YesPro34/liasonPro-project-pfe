import axios from "axios"
import { createContext, useEffect, useState } from "react"


export const userContext = createContext({})



export function UserContextProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(() => {
        if(!user){
            axios.get("http://localhost:5000/api/v1/users/profile").then(({data})=>{
                setUser(data)
            })
        }
    },[])
    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
import { createContext, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [username, setUsername] = useState('')

    return (

    <UserContext.Provider value={{username, setUsername}}>
    {children}
    </UserContext.Provider>

)
    
}

export {UserContext, UserContextProvider}


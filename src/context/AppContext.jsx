import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(true)
    const [userData, setUserData] = useState([])
    return <MyStore.Provider value={{setToggle, toggle, setUserData, userData}}>
        {children}
    </MyStore.Provider>
} 

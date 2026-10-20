import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(true)
    return <MyStore.Provider value={{setToggle, toggle}}>
        {children}
    </MyStore.Provider>
} 

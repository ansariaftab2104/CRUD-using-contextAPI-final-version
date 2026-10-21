import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(true)
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("usersData")) || [] )
    const deleteUser = (id)=>{
        // console.log("clicked",id);
        
        const newUserData = userData.filter((user)=>user.id !== id)
        setUserData(newUserData)
        localStorage.setItem('usersData', JSON.stringify(newUserData))
    }
    // console.log(userData);
    
    return <MyStore.Provider value={{setToggle, toggle, setUserData, userData, deleteUser}}>
        {children}
    </MyStore.Provider>
} 

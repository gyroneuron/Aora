import {createContext, useContext, useState, useEffect} from 'react';
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();

export const UseGlobalContext = () => {
    return useContext(GlobalContext);
}

export const GlobalProvider = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getCurrentUser()
            .then((result) => {
                if(result){
                    setIsLoggedIn(true)
                    setUser(result)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                user,
                setUser,
                setIsLoggedIn,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}


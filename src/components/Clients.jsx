"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState({});
    // useEffect(() => {
    //     if (!user) {
    //       router.push('/login');
    //     }
    //     else {
    //         const setuser = async () => {
    //             // console.log(await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    //             setUser(await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    //         }
    //         setuser();
    //     }
    // }, []);

    return (
        <Context.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
            <Toaster />
        </Context.Provider>
    );
};

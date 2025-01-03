"use client"
import { base_url } from "@/utils/constants";
import { ServiceType } from "@/utils/type";
import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the shape of the context value
interface AuthContextType {
    value: boolean;
    // setValue: React.Dispatch<React.SetStateAction<boolean>>;
    changeValue: () => void;
    service: ServiceType[] | null
    changeServiceKey: () => void;
}

// Create the context with the appropriate type
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the props type for AuthProvider
interface AuthProviderProps {
    children: ReactNode; // Accepts React children
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [value, setValue] = useState<boolean>(false);
    const [service, setService] = useState<ServiceType[] | null>([])
    const [serviceKey, setServiceKey] = useState(false)

    const changeValue = () => {
        setValue(!value)
    }

    const changeServiceKey = () => {
        setServiceKey(!serviceKey)
    }
    // Define the context value
    const authInfo: AuthContextType = {
        value,
        changeValue, // Pass setValue correctly
        service,
        changeServiceKey
    };

    useEffect(() => {
        axios.get(`${base_url}/service`)
            .then(res => setService(res.data))
            .catch(err => console.log(err))
    }, [serviceKey])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [isTokenValid, setIsTokenValid] = useState(false);
    
    useEffect(()=>{
        const token = localStorage.getItem('authToken');
        if (!token) {
            setIsTokenValid(false);
            return;
        }
        try {
            const decodedToken = jwtDecode(token);
            const isTokenExpired = decodedToken.exp < Date.now() / 1000;
            setIsTokenValid(!isTokenExpired);
            setUser(decodedToken.user);

        }catch (error){
            console.error('Invalid token:', error);
            setIsTokenValid(false);
        }
    },[]);
    const login = (token) => {
        localStorage.setItem('authToken', token);
        const decodedUser = jwtDecode(token);
        setIsTokenValid(true);
         setUser(decodedUser.user);
    };
    const logout = () => {
        localStorage.removeItem('authToken');
        setIsTokenValid(false);
        setUser(null);
    };
    const value = {user, login, logout, isAuthenticated: isTokenValid};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

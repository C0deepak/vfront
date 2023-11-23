import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();
    const [token, setToken] = useState(null);
    const login = (token, user) => {
        setLoggedIn(true);
        setToken(token)
        console.log(user)
        setUser(user)
    };

    const logout = () => {
        setLoggedIn(false);
        setToken(null)
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{user, token, setToken, loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Helper function to get a cookie value by name
const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

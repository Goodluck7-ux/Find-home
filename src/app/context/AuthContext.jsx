"use client"
import { useRouter } from "next/navigation"; // Note: Use next/navigation for App Router
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            // Decode jwt token payload safely
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;

            if (payload.exp < currentTime) {
                localStorage.removeItem('token');
                setUser(null);
            } else {
                setUser(payload);
            }
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const signIn = (token) => {
        localStorage.setItem('token', token); // Usually store raw token string, not JSON.stringify(token)
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/sign-in');
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Fixed hook return
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
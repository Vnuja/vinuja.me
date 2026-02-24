// src/admin/useAuth.js
import { useState } from "react";

const ADMIN_PASSWORD = "vinuja@admin2025"; // change this!
const AUTH_KEY = "vr_admin_auth";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem(AUTH_KEY) === "1"
    );

    const login = (password) => {
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, "1");
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        sessionStorage.removeItem(AUTH_KEY);
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
}

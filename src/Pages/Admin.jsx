// src/Pages/Admin.jsx
import React from "react";
import { useAuth } from "../admin/useAuth";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";

export default function Admin() {
    const { isAuthenticated, login, logout } = useAuth();

    if (!isAuthenticated) {
        return <AdminLogin onLogin={login} />;
    }

    return <AdminDashboard onLogout={logout} />;
}

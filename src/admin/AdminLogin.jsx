// src/admin/AdminLogin.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert, InputAdornment, IconButton } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function AdminLogin({ onLogin }) {
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState("");
    const [shaking, setShaking] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ok = onLogin(password);
        if (!ok) {
            setError("Incorrect password. Try again.");
            setShaking(true);
            setTimeout(() => setShaking(false), 600);
            setPassword("");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #0a0a0a 0%, #1a0010 50%, #0d0d0d 100%)",
                p: 2,
            }}
        >
            {/* Animated background glow */}
            <Box sx={{
                position: "fixed", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
                width: 600, height: 600, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(199,0,57,0.12) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
                animation: "pulse 4s ease-in-out infinite",
                "@keyframes pulse": { "0%,100%": { opacity: 0.6, transform: "translate(-50%,-50%) scale(1)" }, "50%": { opacity: 1, transform: "translate(-50%,-50%) scale(1.1)" } }
            }} />

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    position: "relative", zIndex: 1,
                    background: "rgba(20,20,20,0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(199,0,57,0.3)",
                    borderRadius: 4,
                    p: { xs: 4, md: 5 },
                    width: "100%",
                    maxWidth: 420,
                    boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                    animation: shaking ? "shake 0.5s ease" : "none",
                    "@keyframes shake": {
                        "0%,100%": { transform: "translateX(0)" },
                        "20%,60%": { transform: "translateX(-10px)" },
                        "40%,80%": { transform: "translateX(10px)" },
                    },
                }}
            >
                {/* Icon */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <Box sx={{
                        width: 64, height: 64, borderRadius: "50%",
                        background: "linear-gradient(135deg,#c70039,#ff4081)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 8px 24px rgba(199,0,57,0.4)",
                    }}>
                        <LockOutlinedIcon sx={{ color: "#fff", fontSize: 32 }} />
                    </Box>
                </Box>

                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 800, color: "#fff", mb: 0.5 }}>
                    Admin Dashboard
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center", color: "rgba(255,255,255,0.5)", mb: 3 }}>
                    Enter your password to continue
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2, bgcolor: "rgba(199,0,57,0.15)", color: "#ff6b8a", border: "1px solid rgba(199,0,57,0.4)", "& .MuiAlert-icon": { color: "#c70039" } }}>
                        {error}
                    </Alert>
                )}

                <TextField
                    id="admin-password"
                    fullWidth
                    type={showPw ? "text" : "password"}
                    label="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    autoFocus
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPw((v) => !v)} edge="end" sx={{ color: "rgba(255,255,255,0.5)" }}>
                                    {showPw ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#c70039" },
                            "&.Mui-focused fieldset": { borderColor: "#c70039" },
                        },
                        "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#c70039" },
                    }}
                />

                <Button
                    id="admin-login-btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!password}
                    sx={{
                        py: 1.5,
                        fontWeight: 800,
                        fontSize: "1rem",
                        textTransform: "none",
                        borderRadius: 2,
                        background: "linear-gradient(90deg,#c70039,#ff4081)",
                        boxShadow: "0 4px 20px rgba(199,0,57,0.4)",
                        transition: "all 0.3s",
                        "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 30px rgba(199,0,57,0.5)" },
                        "&:disabled": { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" },
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    );
}

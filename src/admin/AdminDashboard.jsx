// src/admin/AdminDashboard.jsx
import React, { useState, useMemo } from "react";
import {
    Box, Container, Typography, Button, Stack, Grid, Card, CardMedia, CardContent,
    Chip, IconButton, TextField, InputAdornment, MenuItem, Tooltip, Dialog,
    DialogTitle, DialogContent, DialogContentText, DialogActions, Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import FilterListIcon from "@mui/icons-material/FilterList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useProjects } from "./useProjects";
import ProjectForm from "./ProjectForm";

const CATEGORIES = ["All", "Web", "Mobile", "UI/UX", "Graphic Design"];

const categoryColor = {
    Web: "#4fc3f7", Mobile: "#81c784", "UI/UX": "#ffb74d", "Graphic Design": "#ce93d8",
};

export default function AdminDashboard({ onLogout }) {
    const { projects, addProject, updateProject, deleteProject } = useProjects();

    const [formOpen, setFormOpen] = useState(false);
    const [editTarget, setEditTarget] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [search, setSearch] = useState("");
    const [filterCat, setFilterCat] = useState("All");

    const stats = useMemo(() => ({
        total: projects.length,
        web: projects.filter((p) => p.category === "Web").length,
        mobile: projects.filter((p) => p.category === "Mobile").length,
        uiux: projects.filter((p) => p.category === "UI/UX").length,
        graphic: projects.filter((p) => p.category === "Graphic Design").length,
    }), [projects]);

    const filtered = useMemo(() => {
        return projects.filter((p) => {
            const matchCat = filterCat === "All" || p.category === filterCat;
            const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description?.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [projects, filterCat, search]);

    const openAdd = () => { setEditTarget(null); setFormOpen(true); };
    const openEdit = (p) => { setEditTarget(p); setFormOpen(true); };

    const handleSave = (data) => {
        if (editTarget) updateProject(editTarget.id, data);
        else addProject(data);
    };

    const confirmDelete = () => {
        if (deleteTarget) deleteProject(deleteTarget.id);
        setDeleteTarget(null);
    };

    const inputSx = {
        "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
            "&:hover fieldset": { borderColor: "#c70039" },
            "&.Mui-focused fieldset": { borderColor: "#c70039" },
        },
        "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
        "& .MuiInputLabel-root.Mui-focused": { color: "#c70039" },
        "& .MuiSelect-icon": { color: "rgba(255,255,255,0.5)" },
    };

    return (
        <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg,#0c0c0c 0%,#161616 60%,#1a0a0f 100%)" }}>

            {/* ── Top Nav ── */}
            <Box sx={{
                py: 2, px: 3, borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(10,10,10,0.8)", backdropFilter: "blur(20px)",
                position: "sticky", top: 0, zIndex: 100,
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{
                        width: 36, height: 36, borderRadius: 2,
                        background: "linear-gradient(135deg,#c70039,#ff4081)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <DashboardIcon sx={{ color: "#fff", fontSize: 20 }} />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
                            Admin Dashboard
                        </Typography>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
                            Vinuja Portfolio CMS
                        </Typography>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        id="admin-view-site-btn"
                        variant="outlined" size="small"
                        href="/vinuja.me" target="_blank"
                        sx={{ textTransform: "none", borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: 2, "&:hover": { borderColor: "#c70039", color: "#c70039" } }}
                    >
                        View Site
                    </Button>
                    <Tooltip title="Logout">
                        <IconButton id="admin-logout-btn" onClick={onLogout} sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#c70039" } }}>
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>

            <Container maxWidth="xl" sx={{ py: 4 }}>

                {/* ── Stats Cards ── */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    {[
                        { label: "Total Projects", value: stats.total, color: "#ff7ca0" },
                        { label: "Web", value: stats.web, color: "#4fc3f7" },
                        { label: "Mobile", value: stats.mobile, color: "#81c784" },
                        { label: "UI/UX", value: stats.uiux, color: "#ffb74d" },
                        { label: "Graphic Design", value: stats.graphic, color: "#ce93d8" },
                    ].map((s) => (
                        <Grid key={s.label} item xs={6} sm={4} md={2.4}>
                            <Box sx={{
                                p: 2.5, borderRadius: 3,
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                textAlign: "center",
                                transition: "all 0.3s",
                                "&:hover": { background: "rgba(255,255,255,0.07)", transform: "translateY(-2px)" },
                            }}>
                                <Typography variant="h3" sx={{ fontWeight: 900, color: s.color, lineHeight: 1 }}>
                                    {s.value}
                                </Typography>
                                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mt: 0.5, display: "block" }}>
                                    {s.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* ── Toolbar ── */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }} justifyContent="space-between" sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1}>
                        {/* Search */}
                        <TextField
                            id="admin-search"
                            size="small" placeholder="Search projects…"
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }} /></InputAdornment> }}
                            sx={{ ...inputSx, width: 220 }}
                        />

                        {/* Filter */}
                        <TextField
                            id="admin-filter"
                            select size="small" value={filterCat} onChange={(e) => setFilterCat(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment position="start"><FilterListIcon sx={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }} /></InputAdornment> }}
                            sx={{ ...inputSx, width: 160 }}
                            SelectProps={{ MenuProps: { PaperProps: { sx: { background: "#232323", color: "#fff" } } } }}
                        >
                            {CATEGORIES.map((c) => <MenuItem key={c} value={c} sx={{ "&:hover": { bgcolor: "rgba(199,0,57,0.15)" } }}>{c}</MenuItem>)}
                        </TextField>
                    </Stack>

                    <Button
                        id="admin-add-btn"
                        variant="contained" startIcon={<AddIcon />}
                        onClick={openAdd}
                        sx={{
                            textTransform: "none", fontWeight: 700, borderRadius: 2,
                            background: "linear-gradient(90deg,#c70039,#ff4081)",
                            boxShadow: "0 4px 20px rgba(199,0,57,0.35)",
                            "&:hover": { transform: "translateY(-1px)", boxShadow: "0 8px 28px rgba(199,0,57,0.45)" },
                            transition: "all 0.25s",
                        }}
                    >
                        Add Project
                    </Button>
                </Stack>

                {/* ── Results count ── */}
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)", mb: 2 }}>
                    Showing {filtered.length} of {projects.length} projects
                </Typography>

                {/* ── Project Grid ── */}
                <Grid container spacing={2.5}>
                    {filtered.map((p) => {
                        const img = p.images?.length ? p.images[0] : p.image;
                        return (
                            <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{
                                    height: "100%", display: "flex", flexDirection: "column",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: 3, color: "#fff", overflow: "hidden",
                                    transition: "all 0.25s",
                                    "&:hover": {
                                        background: "rgba(255,255,255,0.07)",
                                        borderColor: "rgba(199,0,57,0.3)",
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                                    },
                                }}>
                                    {/* Image */}
                                    <Box sx={{ position: "relative" }}>
                                        {img ? (
                                            <CardMedia component="img" height={160} image={img} alt={p.title}
                                                sx={{ objectFit: "cover", filter: "brightness(0.9)" }} />
                                        ) : (
                                            <Box sx={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(255,255,255,0.05)" }}>
                                                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.3)" }}>No Image</Typography>
                                            </Box>
                                        )}
                                        <Chip label={p.category} size="small" sx={{
                                            position: "absolute", top: 8, left: 8,
                                            bgcolor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
                                            color: categoryColor[p.category] || "#fff",
                                            border: `1px solid ${categoryColor[p.category] || "#fff"}44`,
                                            fontWeight: 700, fontSize: "0.65rem",
                                        }} />
                                        {p.images?.length > 1 && (
                                            <Chip label={`+${p.images.length} imgs`} size="small" sx={{
                                                position: "absolute", top: 8, right: 8,
                                                bgcolor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
                                                color: "rgba(255,255,255,0.7)", fontSize: "0.6rem",
                                            }} />
                                        )}
                                    </Box>

                                    <CardContent sx={{ p: 2, flex: 1 }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#ff7ca0", mb: 0.5, lineHeight: 1.3 }}>
                                            {p.title}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.55)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            {p.description || p.type}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.35)", mt: 0.5, display: "block" }}>
                                            {p.type}
                                        </Typography>
                                    </CardContent>

                                    {/* Actions */}
                                    <Stack direction="row" justifyContent="flex-end" spacing={0.5} sx={{ px: 1.5, pb: 1.5 }}>
                                        <Tooltip title="Edit">
                                            <IconButton
                                                id={`edit-btn-${p.id}`}
                                                size="small" onClick={() => openEdit(p)}
                                                sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#4fc3f7", bgcolor: "rgba(79,195,247,0.1)" } }}
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton
                                                id={`delete-btn-${p.id}`}
                                                size="small" onClick={() => setDeleteTarget(p)}
                                                sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#ff5252", bgcolor: "rgba(255,82,82,0.1)" } }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>

                {filtered.length === 0 && (
                    <Box sx={{ textAlign: "center", py: 10 }}>
                        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.3)" }}>
                            No projects found
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.2)", mt: 1 }}>
                            Try adjusting your search or filter
                        </Typography>
                    </Box>
                )}
            </Container>

            {/* ── Add / Edit Form ── */}
            <ProjectForm
                open={formOpen}
                onClose={() => setFormOpen(false)}
                onSave={handleSave}
                initialData={editTarget}
            />

            {/* ── Delete Confirm ── */}
            <Dialog
                open={Boolean(deleteTarget)}
                onClose={() => setDeleteTarget(null)}
                PaperProps={{ sx: { background: "#181818", color: "#fff", borderRadius: 3, border: "1px solid rgba(255,82,82,0.3)" } }}
            >
                <DialogTitle sx={{ color: "#ff5252", fontWeight: 800 }}>🗑️ Delete Project</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ color: "rgba(255,255,255,0.7)" }}>
                        Are you sure you want to delete <b style={{ color: "#fff" }}>{deleteTarget?.title}</b>? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 2, gap: 1 }}>
                    <Button onClick={() => setDeleteTarget(null)} sx={{ textTransform: "none", color: "rgba(255,255,255,0.6)", borderRadius: 2 }}>
                        Cancel
                    </Button>
                    <Button id="confirm-delete-btn" onClick={confirmDelete} variant="contained"
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: 2, bgcolor: "#c62828", "&:hover": { bgcolor: "#b71c1c" } }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

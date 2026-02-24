// src/admin/ProjectForm.jsx
import React, { useState, useEffect } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, MenuItem, Grid, IconButton, Typography, Box, Chip, Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const CATEGORIES = ["Web", "Mobile", "UI/UX", "Graphic Design"];
const TYPES = [
    "React APP", "MERN Stack WEB APP", "THREE.js",
    "Kotlin - Android Applications", "UI/UX Design", "Graphic Design",
];

const EMPTY = {
    title: "", description: "", image: "", images: [], category: "Web", type: "React APP", link: "",
};

const inputSx = {
    "& .MuiOutlinedInput-root": {
        color: "#fff",
        "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
        "&:hover fieldset": { borderColor: "#c70039" },
        "&.Mui-focused fieldset": { borderColor: "#c70039" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#c70039" },
    "& .MuiSelect-icon": { color: "rgba(255,255,255,0.5)" },
};

export default function ProjectForm({ open, onClose, onSave, initialData }) {
    const [form, setForm] = useState(EMPTY);
    const [extraImageUrl, setExtraImageUrl] = useState("");

    useEffect(() => {
        if (open) setForm(initialData ? { ...EMPTY, ...initialData } : EMPTY);
    }, [open, initialData]);

    const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const addExtraImage = () => {
        if (!extraImageUrl.trim()) return;
        setForm((f) => ({ ...f, images: [...(f.images || []), extraImageUrl.trim()] }));
        setExtraImageUrl("");
    };

    const removeExtraImage = (idx) => {
        setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
    };

    const handleSave = () => {
        if (!form.title.trim()) return;
        onSave(form);
        onClose();
    };

    const isEdit = Boolean(initialData);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    background: "linear-gradient(135deg,#181818 0%,#232323 100%)",
                    color: "#fff",
                    borderRadius: 3,
                    border: "1px solid rgba(199,0,57,0.25)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
                },
            }}
        >
            <DialogTitle sx={{ fontWeight: 800, color: "#ff7ca0", pr: 6 }}>
                {isEdit ? "✏️ Edit Project" : "➕ New Project"}
                <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8, color: "rgba(255,255,255,0.5)" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    {/* Title */}
                    <Grid item xs={12}>
                        <TextField id="form-title" fullWidth label="Project Title *" value={form.title} onChange={set("title")} sx={inputSx} />
                    </Grid>

                    {/* Description */}
                    <Grid item xs={12}>
                        <TextField id="form-description" fullWidth multiline rows={3} label="Description" value={form.description} onChange={set("description")} sx={inputSx} />
                    </Grid>

                    {/* Category */}
                    <Grid item xs={6}>
                        <TextField id="form-category" select fullWidth label="Category" value={form.category} onChange={set("category")} sx={inputSx}
                            SelectProps={{ MenuProps: { PaperProps: { sx: { background: "#232323", color: "#fff" } } } }}>
                            {CATEGORIES.map((c) => <MenuItem key={c} value={c} sx={{ "&:hover": { bgcolor: "rgba(199,0,57,0.15)" } }}>{c}</MenuItem>)}
                        </TextField>
                    </Grid>

                    {/* Type */}
                    <Grid item xs={6}>
                        <TextField id="form-type" select fullWidth label="Type" value={form.type} onChange={set("type")} sx={inputSx}
                            SelectProps={{ MenuProps: { PaperProps: { sx: { background: "#232323", color: "#fff" } } } }}>
                            {TYPES.map((t) => <MenuItem key={t} value={t} sx={{ "&:hover": { bgcolor: "rgba(199,0,57,0.15)" } }}>{t}</MenuItem>)}
                        </TextField>
                    </Grid>

                    {/* Main Image */}
                    <Grid item xs={12}>
                        <TextField id="form-image" fullWidth label="Main Image URL" value={form.image} onChange={set("image")} sx={inputSx} />
                        {form.image && (
                            <Box component="img" src={form.image} alt="preview"
                                sx={{ mt: 1, width: "100%", maxHeight: 160, objectFit: "cover", borderRadius: 2, border: "1px solid rgba(255,255,255,0.1)" }}
                                onError={(e) => { e.target.style.display = "none"; }}
                            />
                        )}
                    </Grid>

                    {/* Extra images (carousel) */}
                    <Grid item xs={12}>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mb: 0.5, display: "block" }}>
                            Extra Images (carousel) — optional
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <TextField
                                id="form-extra-image"
                                fullWidth size="small"
                                label="Add image URL"
                                value={extraImageUrl}
                                onChange={(e) => setExtraImageUrl(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addExtraImage())}
                                sx={inputSx}
                            />
                            <Button onClick={addExtraImage} variant="outlined"
                                sx={{ borderColor: "#c70039", color: "#c70039", minWidth: 40, px: 1.5, "&:hover": { bgcolor: "rgba(199,0,57,0.1)" } }}>
                                <AddIcon />
                            </Button>
                        </Stack>
                        {(form.images || []).length > 0 && (
                            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
                                {form.images.map((url, i) => (
                                    <Chip key={i} label={`Image ${i + 1}`} onDelete={() => removeExtraImage(i)}
                                        sx={{ bgcolor: "rgba(199,0,57,0.15)", color: "#ff7ca0", border: "1px solid rgba(199,0,57,0.3)", "& .MuiChip-deleteIcon": { color: "#c70039" } }} />
                                ))}
                            </Stack>
                        )}
                    </Grid>

                    {/* Link */}
                    <Grid item xs={12}>
                        <TextField id="form-link" fullWidth label="Project Link (URL)" value={form.link} onChange={set("link")} sx={inputSx} />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 2, gap: 1 }}>
                <Button onClick={onClose} variant="outlined"
                    sx={{ textTransform: "none", borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", borderRadius: 2 }}>
                    Cancel
                </Button>
                <Button id="form-save-btn" onClick={handleSave} variant="contained" disabled={!form.title.trim()}
                    sx={{
                        textTransform: "none", fontWeight: 700, borderRadius: 2,
                        background: "linear-gradient(90deg,#c70039,#ff4081)",
                        boxShadow: "0 4px 16px rgba(199,0,57,0.35)",
                        "&:hover": { opacity: 0.9 },
                    }}>
                    {isEdit ? "Save Changes" : "Add Project"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

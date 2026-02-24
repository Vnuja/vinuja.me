// src/admin/useProjects.js
import { useState, useEffect } from "react";

const STORAGE_KEY = "vr_projects";

// Default seed data — same as your existing Projects.jsx projectData
const defaultProjects = [
    { id: "1", title: "HMA Voyages", description: "The Official Website for HMAVoyages Sri Lanka", image: "https://raw.githubusercontent.com/Vnuja/vinuja.me/refs/heads/main/src/Images/HMAV.jpg", type: "React APP", category: "Web", link: "https://hmavoyages.com" },
    { id: "2", title: "Vinuja Ransith", description: "The Personal Portfolio of Vinuja Ransith", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20130952.png?raw=true", type: "React APP", category: "Web", link: "https://github.com/Vnuja/vinuja.me.git" },
    { id: "3", title: "SKY LIGHT CINEMA", description: "A full-stack React app for movie ticket booking with seat selection and payment integration.", image: "https://tcnbandara.me/assets/img/project/mo.jpg", type: "MERN Stack WEB APP", category: "Web", link: "https://github.com/Vnuja/SKY-LIGHT-CINEMA.git" },
    { id: "4", title: "CRYSTAL ELEGANCE", description: "Gem and Jewellery Management System web application developed using the MERN stack.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Blue%20Gray%20Modern%20Jewellery%20Facebook%20Ad.png?raw=true", type: "MERN Stack WEB APP", category: "Web", link: "https://github.com/Vnuja/CRYSTAL-ELEGANCE.git" },
    { id: "5", title: "A 3D Developer Portfolio", description: "A 3D Portfolio for me", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20124439.png?raw=true", type: "THREE.js", category: "Web", link: "https://github.com/Vnuja/3D-Portfolio.git" },
    { id: "6", title: "Sweet Shop", description: "A web application for managing a sweet shop, including inventory management, order processing, and customer management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20125746.png?raw=true", type: "MERN Stack WEB APP", category: "Web", link: "https://github.com/Vnuja/SweetShop.git" },
    { id: "7", title: "Construction Supply Management System", description: "A web application for managing a Supply, including inventory management, order processing, and order management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20132852.png?raw=true", type: "MERN Stack WEB APP", category: "Web", link: "https://github.com/Vnuja/cms.git" },
    { id: "8", title: "HMA Voyages (UI/UX)", description: "The Official Website for HMAVoyages Sri Lanka", image: "https://raw.githubusercontent.com/Vnuja/vinuja.me/refs/heads/main/src/Images/HMAV.jpg", type: "UI/UX Design", category: "UI/UX", link: "https://hmavoyages.com" },
    { id: "9", title: "Vinuja Ransith (UI/UX)", description: "The Personal Portfolio of Vinuja Ransith", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20130952.png?raw=true", type: "UI/UX Design", category: "UI/UX", link: "https://vinuja.me" },
    { id: "10", title: "Cypher Car Care", description: "A Mobile application for car care center, including user management, Service catalogue, and vehicle management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20154044.png?raw=true", type: "UI/UX Design", category: "UI/UX", link: "https://www.figma.com/design/KVsdYiag0KgVNsacnpbHEk/Cypher-Car-Care-App" },
    { id: "11", title: "Construction Supply (UI/UX)", description: "A web application for managing a Supply, including inventory management, order processing, and order management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20132852.png?raw=true", type: "UI/UX Design", category: "UI/UX", link: "https://www.figma.com/design/Wg4f0gaqJm2UyWmSNIF9jv/supplier-ui" },
    { id: "12", title: "Lucky Car Rental", description: "A Mobile application for rent a car, including user management, rental processing, and vehicle management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true", type: "UI/UX Design", category: "UI/UX", link: "https://www.figma.com/design/Rdxx0EannVdb9hqDngkOUM/Lucky-Car-Rental" },
    { id: "13", title: "Cypher Car Care (Mobile)", description: "A Mobile application for car care center, including user management, Service catalogue, and vehicle management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20154044.png?raw=true", type: "Kotlin - Android Applications", category: "Mobile", link: "https://github.com/Vnuja/Cypher-Car-Care.git" },
    { id: "14", title: "Quick Ticks", description: "Perfect app to brighten your daily mood with organized workload and tasks.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20160413.png?raw=true", type: "Kotlin - Android Applications", category: "Mobile", link: "https://github.com/Vnuja/QuickTicks.git" },
    { id: "15", title: "Lucky Car Rental (Mobile)", description: "A Mobile application for rent a car, including user management, rental processing, and vehicle management.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true", type: "Kotlin - Android Applications", category: "Mobile", link: "https://github.com/Vnuja/Lucky-Car-Rental.git" },
    { id: "16", title: "Logo Designs", description: "A collection of logo designs.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true", type: "Graphic Design", category: "Graphic Design", link: "https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh" },
    { id: "17", title: "Evoke.Outfits", description: "Graphic design work for Evoke Outfits clothing brand.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/1.jpg?raw=true", type: "Graphic Design", category: "Graphic Design", link: "https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh" },
    { id: "18", title: "Vector Portraits", description: "Custom vector portrait illustrations.", image: "https://github.com/Vnuja/vinuja.me/blob/main/src/Images/d.jpg?raw=true", type: "Graphic Design", category: "Graphic Design", link: "https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh" },
];

function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : defaultProjects;
    } catch {
        return defaultProjects;
    }
}

function save(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function useProjects() {
    const [projects, setProjects] = useState(load);

    useEffect(() => {
        save(projects);
    }, [projects]);

    const addProject = (data) => {
        const newProject = { ...data, id: generateId() };
        setProjects((prev) => [newProject, ...prev]);
        return newProject;
    };

    const updateProject = (id, data) => {
        setProjects((prev) =>
            prev.map((p) => (p.id === id ? { ...p, ...data } : p))
        );
    };

    const deleteProject = (id) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    return { projects, addProject, updateProject, deleteProject };
}

export { defaultProjects };

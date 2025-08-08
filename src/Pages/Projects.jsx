import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, Modal } from '@mui/material';

const projectData = [
    {
        title: 'Vinuja Ransith',
        description: 'The Personal Portfolio of Vinuja Ransith',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20130952.png?raw=true',
        type: 'React APP',
        category: 'Web',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/vinuja.me.git',
    },
    {
        title: 'SKY LIGHT CINEMA',
        description: 'A full-stack React app for movie ticket booking with seat selection and payment integration.',
        image: 'https://tcnbandara.me/assets/img/project/mo.jpg',
        type: 'MERN Stack WEB APP',
        category: 'Web',
        icon: 'pi pi-video',
        link: 'https://github.com/Vnuja/SKY-LIGHT-CINEMA.git',
    },
    {
        title: 'CRYSTAL ELEGANCE',
        description: 'Gem and Jewelary Management System web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack..',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Blue%20Gray%20Modern%20Jewellery%20Facebook%20Ad.png?raw=true',
        type: 'MERN Stack WEB APP',
        category: 'Web',
        icon: 'pi pi-users',
        link: 'https://github.com/Vnuja/CRYSTAL-ELEGANCE.git',
    },
    {
        title: 'A 3D Developer Portfolio',
        description: 'A 3D Portfolio fort me ',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20124439.png?raw=true',
        type: 'THREE.js',
        category: 'Web',
        icon: 'pi pi-shopping-cart',
        link: 'https://github.com/Vnuja/3D-Portfolio.git',
    },
    {
        title: 'Sweet Shop',
        description: 'A web application for managing a sweet shop, including inventory management, order processing, and customer management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20125746.png?raw=true',
        type: 'MERN Stack WEB APP',
        category: 'Web',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/SweetShop.git',
    },
    {
        title: 'Construction Supply Management System',
        description: 'A web application for managing a Supply, including inventory management, order processing, and order management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20132852.png?raw=true',
        type: 'MERN Stack WEB APP',
        category: 'Web',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/cms.git',
    },
    {
        title: 'Vinuja Ransith',
        description: 'The Personal Portfolio of Vinuja Ransith',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20130952.png?raw=true',
        type: 'UI/UX Design',
        category: 'UI/UX',
        icon: 'pi pi-mobile',
        link: 'https://vinuja.me',
    },
    {
        title: 'Cypher Car Care',
        description: 'A Mobile application for car care center, including user management,  Service catoulog, and vehicle management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20154044.png?raw=true',
        type: 'UI/UX Design',
        category: 'UI/UX',
        icon: 'pi pi-mobile',
        link: 'https://www.figma.com/design/KVsdYiag0KgVNsacnpbHEk/Cypher-Car-Care-App?m=auto&t=IEpIuoCRUz7mKTSK-6',
    },
    {
        title: 'Construction Supply Management System',
        description: 'A web application for managing a Supply, including inventory management, order processing, and order management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20132852.png?raw=true',
        type: 'UI/UX Design',
        category: 'UI/UX',
        icon: 'pi pi-mobile',
        link: 'https://www.figma.com/design/Wg4f0gaqJm2UyWmSNIF9jv/supplier-ui?node-id=0-1',
    },
    {
        title: 'Lucky-Car-Rental',
        description: 'A Mobile application for rent a car, including user management, rental processing, and vehicle management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true',
        type: 'UI/UX Design',
        category: 'UI/UX',
        icon: 'pi pi-mobile',
        link: 'https://www.figma.com/design/Rdxx0EannVdb9hqDngkOUM/Lucky-Car-Rental?m=auto&t=IEpIuoCRUz7mKTSK-6',
    },
    {
        title: 'Cypher Car Care',
        description: 'A Mobile application for car care center, including user management,  Service catoulog, and vehicle management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20154044.png?raw=true',
        type: 'Kotlin - Androide Applications',
        category: 'Mobile',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/Cypher-Car-Care.git',
    },
    {
        title: 'Quick Ticks',
        description: 'Perfect app to brigthen your daily mood with organized work load and tasks.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20160413.png?raw=true',
        type: 'Kotlin - Androide Applications',
        category: 'Mobile',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/QuickTicks.git',
    },
    {
        title: 'Lucky-Car-Rental',
        description: 'A Mobile application for rent a car, including user management, rental processing, and vehicle management.',
        image: 'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true',
        type: 'Kotlin - Androide Applications',
        category: 'Mobile',
        icon: 'pi pi-mobile',
        link: 'https://github.com/Vnuja/Lucky-Car-Rental.git',
    },
    {
        title: 'Logo Designes',
        images: [
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20152912.png?raw=true',
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/Screenshot%202025-02-12%20154044.png?raw=true'
        ], type: 'Graphic Design',
        category: 'Graphic Design',
        link: 'https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh?usp=sharing',
    },
    {
        title: 'Evoke.Outfits',
        images: [
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/1.jpg?raw=true',
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/2.jpg?raw=true',
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/3.jpg?raw=true'

        ],
        type: 'Graphic Design',
        category: 'Graphic Design',
        link: 'https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh?usp=sharing',
    },
    {
        title: 'Vector Portraits',
        images: [
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/d.jpg?raw=true',
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/2.jpg?raw=true',
            'https://github.com/Vnuja/vinuja.me/blob/main/src/Images/3.jpg?raw=true'

        ],
        type: 'Graphic Design',
        category: 'Graphic Design',
        link: 'https://drive.google.com/drive/folders/18UEbIK24WqJhdhxYtKhBY0ZtGFOvRCAh?usp=sharing',

    },
];

const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Graphic Design'];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);


    const filteredProjects = selectedCategory === 'All'
        ? projectData
        : projectData.filter(project => project.category === selectedCategory);


    return (
        <Box sx={{ minHeight: '100vh', marginTop: '4%', background: 'linear-gradient(to right, #1a1a1a, #333)', color: '#ffffff', padding: '40px' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 4, color: '#c70039' }}>
                My Projects
            </Typography>

            {/* Category Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'contained' : 'outlined'}
                        color="white"
                        onClick={() => setSelectedCategory(category)}
                        sx={{
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            boxShadow: selectedCategory === category ? '0 4px 16px #c70039' : 'none',
                            background: selectedCategory === category ? 'linear-gradient(90deg,#c70039,#ff4081)' : undefined,
                            color: selectedCategory === category ? '#fff' : '#c70039',
                            borderColor: '#c70039',
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </Box>

            {/* Project Cards */}
            <Grid container spacing={4} justifyContent="center">
                {filteredProjects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3.5}>
                        <Card
                            sx={{
                                border: '2px solid #c70039',
                                borderRadius: '18px',
                                background: 'linear-gradient(135deg,#232526 0%,#414345 100%)',
                                color: 'white',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                boxShadow: '0 2px 8px rgba(199,0,57,0.15)',
                                '&:hover': {
                                    transform: 'scale(1.06)',
                                    boxShadow: '0 10px 24px #c70039',
                                },
                            }}
                            onClick={() => {
                                setSelectedProject(project);
                                setImageIndex(0);
                            }}
                        >
                            <Box sx={{ position: 'relative' }}></Box>
                                <img
                                    src={project.images ? project.images[0] : project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '16px 16px 0 0',
                                        boxShadow: '0 2px 8px #c70039',
                                        transition: 'filter 0.3s',
                                        filter: 'brightness(0.95) contrast(1.1)',
                                    }}
                                />
                                {/* Overlay for type/category */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 10,
                                    background: 'rgba(199,0,57,0.85)',
                                    color: '#fff',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: '12px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.5px',
                                    boxShadow: '0 2px 8px #c70039',
                                }}>
                                    {project.type}
                                </Box>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, color: '#ff4081', textShadow: '0 2px 8px #c70039' }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="gray" sx={{ minHeight: 40 }}>
                                    {project.description?.slice(0, 60) || project.type}
                                    {project.description && project.description.length > 60 ? '...' : ''}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Popup Modal */}
            <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'linear-gradient(135deg,#232526 0%,#414345 100%)',
                        padding: '32px 24px',
                        borderRadius: '18px',
                        width: '95%',
                        maxWidth: '650px',
                        boxShadow: '0 8px 32px #c70039',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    {selectedProject && (
                        <>
                            {selectedProject.images ? (
                                <Box sx={{ position: 'relative', overflow: 'hidden', mb: 2 }}>
                                    <img
                                        src={selectedProject.images[imageIndex]}
                                        alt={`Design ${imageIndex}`}
                                        style={{
                                            width: '100%',
                                            borderRadius: '14px',
                                            transition: 'opacity 0.5s',
                                            boxShadow: '0 2px 16px #c70039',
                                            objectFit: 'cover',
                                            maxHeight: '340px',
                                        }}
                                    />
                                    {/* Navigation Buttons */}
                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: 10,
                                            transform: 'translateY(-50%)',
                                            backgroundColor: 'rgba(199,0,57,0.7)',
                                            color: 'white',
                                            borderRadius: '50%',
                                            minWidth: '40px',
                                            height: '40px',
                                            fontSize: '1.5rem',
                                            zIndex: 2,
                                            boxShadow: '0 2px 8px #c70039',
                                        }}
                                        onClick={() =>
                                            setImageIndex((prev) =>
                                                prev === 0 ? selectedProject.images.length - 1 : prev - 1
                                            )
                                        }
                                    >
                                        ‹
                                    </Button>
                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: 10,
                                            transform: 'translateY(-50%)',
                                            backgroundColor: 'rgba(199,0,57,0.7)',
                                            color: 'white',
                                            borderRadius: '50%',
                                            minWidth: '40px',
                                            height: '40px',
                                            fontSize: '1.5rem',
                                            zIndex: 2,
                                            boxShadow: '0 2px 8px #c70039',
                                        }}
                                        onClick={() =>
                                            setImageIndex((prev) =>
                                                prev === selectedProject.images.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                    >
                                        ›
                                    </Button>
                                    {/* Image index dots */}
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                        {selectedProject.images.map((_, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: '50%',
                                                    background: idx === imageIndex ? '#c70039' : '#fff',
                                                    opacity: idx === imageIndex ? 1 : 0.5,
                                                    mx: 0.5,
                                                    transition: 'background 0.3s',
                                                    border: '1px solid #c70039',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ) : (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '14px',
                                        boxShadow: '0 2px 16px #c70039',
                                        objectFit: 'cover',
                                        maxHeight: '340px',
                                        marginBottom: '16px',
                                    }}
                                />
                            )}

                            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, color: '#ff4081', textShadow: '0 2px 8px #c70039' }}>
                                {selectedProject.title}
                            </Typography>
                            <Typography variant="body1" color="gray" sx={{ marginY: 2 }}>
                                {selectedProject.description}
                            </Typography>
                            <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
                                Type: <span style={{ color: '#c70039', fontWeight: 'bold' }}>{selectedProject.type}</span>
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: 2,
                                    background: 'linear-gradient(90deg,#c70039,#ff4081)',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    borderRadius: '20px',
                                    boxShadow: '0 2px 8px #c70039',
                                    mr: 2,
                                }}
                                onClick={() => window.open(selectedProject.link, '_blank')}
                            >
                                {selectedProject.category === 'Graphic Design' ? 'View Designs' : 'View Project'}
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginTop: 2,
                                    borderRadius: '20px',
                                    borderColor: '#c70039',
                                    color: '#c70039',
                                    fontWeight: 'bold',
                                }}
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default Projects;

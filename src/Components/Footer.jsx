import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#101010', color: '#fff' }}>
            <Container >
                <Typography variant="body1" align="center">
                    © 2025 <Link color="inherit" href="https://vinuja.me/" underline="hover">
                        Vinuja.me
                    </Link>. All rights reserved.
                </Typography>
            </Container>
        </Box>
        
    );
};

export default Footer;
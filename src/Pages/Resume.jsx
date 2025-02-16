import React from 'react';
import cv from '../Files/Vinuja Ransith.pdf';

function Resume() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#121212',
            color: 'white',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{
                fontSize: '2rem',
                marginBottom: '20px',
                color: '#ff4081'
            }}>
                My Resume
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                Click the button below to download my CV.
            </p>
            <a href={cv} download style={{
                backgroundColor: '#c70039',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'background 0.3s ease-in-out, transform 0.2s',
                boxShadow: '0 4px 10px rgba(199, 0, 57, 0.5)'
            }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#ff003c'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#c70039'}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            >
                Download CV
            </a>
        </div>
    );
}

export default Resume;

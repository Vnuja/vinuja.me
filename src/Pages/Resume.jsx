import React from 'react'
import cv from '../Files/Vinuja Ransith.pdf';

function Resume() {
    return (
        <div>
            <div style={{ flex: '1' }}>
                <div style={{ marginTop: '20%', marginLeft: '45%' }}>
                    <a href={cv} download style={{
                        backgroundColor: '#c70039',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Resume
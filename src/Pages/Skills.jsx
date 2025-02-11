import React from 'react'

function Skills() {
    return (
        <div><div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            color: '#ffffff', // White text for readability
            padding: '40px'
        }}>
            <div style={{
                maxWidth: '800px',
                textAlign: 'left',
                padding: '20px',
                borderRadius: '10px'
            }}>


                <h2 style={{ color: '#c70039', marginTop: '20px' }}>Key Skills:</h2>
                <ul style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
                    <li><strong>Programming:</strong> HTML, CSS, JavaScript, PHP, Java, C, C++, SQL, Arduino</li>
                    <li><strong>Adobe Creative Suite:</strong> Premiere Pro (PR), Photoshop (PS)</li>
                </ul>

            </div>
        </div>
        </div>
    )
}

export default Skills
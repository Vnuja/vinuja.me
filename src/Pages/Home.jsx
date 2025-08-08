import React, { useState, useEffect, useMemo } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link, Box } from "@mui/material";
import cv from '../Files/Vinuja Ransith.pdf';
import vinuja from '../Images/man.png';

const TextRotator = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const texts = useMemo(() => [
        "Content Creator.",
        "SE Project Manager.",
        "Web Designer.",
        "Software Designer.",
        "Hardware Supervisor.",
    ], []);
    const textChangeDelay = 1000; // Time before switching to next text
    const typingSpeed = 50; // Typing speed in milliseconds

    // Typing effect
    useEffect(() => {
        if (charIndex < texts[currentTextIndex].length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + texts[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(typingTimeout);
        } else {
            // Wait for a moment before erasing
            setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, textChangeDelay);
        }
    }, [charIndex, currentTextIndex, texts]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            height: 'calc(100vh - 60px)',
            padding: '20px',
            backgroundImage: `url(${vinuja})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 910px bottom 0.5px',
        }}>

            <div style={{ textAlign: 'center', color: 'white', flex: '1' }}>
                <div style={{ fontSize: '6em', fontWeight: 'bold' }}>
                    Vinuja <span style={{ color: '#c70039' }}>Ransith</span>
                </div>
                <div style={{ fontSize: '1.5em', fontWeight: '500', marginTop: '10px' }}>
                    I'm a <span style={{ color: '#c70039' }}>{displayText}</span>
                    <span style={{ animation: 'blink 1s infinite' }}>|</span>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <a href={cv} download style={{
                        backgroundColor: '#c70039',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>Download CV</a>
                    <div style={{ marginTop: '60px' }}>
                        <SocialMediaList />
                    </div>

                </div>
            </div>
        </div>
    );
}

const SocialMediaList = () => {
    const socialMedia = [
        { icon: <FaGithub />, link: 'https://github.com/Vnuja' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/vnuja/' },
        { icon: <FaFacebook />, link: 'https://web.facebook.com/vinuja.ransith/' },
        { icon: <FaTwitter />, link: 'https://x.com/v_nuja' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/v.nuja/' },
        { icon: <FaYoutube />, link: 'https://www.youtube.com/@v.nuja_' },
        { icon: <FaWhatsapp />, link: 'https://wa.me/+94769451554' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@v.nuja' },
    ];

    return (
        <>
            {/* Desktop view: vertical on the left */}
            <div className="social-desktop">
                {socialMedia.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5em' }}>
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Mobile view: horizontal under CV */}
            <div className="social-mobile">
                {socialMedia.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5em' }}>
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Styles */}
            <style>{`
                .social-desktop {
                    position: fixed;
                    left: 20px;
                    top: 55%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .social-mobile {
                    display: none;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 20px;
                    flex-wrap: wrap;
                }

                @media (max-width: 768px) {
                    .social-desktop {
                        display: none;
                    }

                    .social-mobile {
                        display: flex;
                    }
                }
            `}</style>
        </>
    );
};

const Home = () => {
    return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <TextRotator />
        </div>
    );
};

export default Home;
import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa";

import cv from "../Files/Vinuja Ransith.pdf";
import vinuja from "../Images/man.png";

/* ---------------- Typing hook ---------------- */
function useTypeCycle(list, { typeMs = 45, holdMs = 1000, eraseMs = 22 } = {}) {
    const [idx, setIdx] = useState(0);
    const [txt, setTxt] = useState("");
    const [phase, setPhase] = useState("type");
    const items = useMemo(() => list, [list]);

    useEffect(() => {
        let t;
        const word = items[idx];
        if (phase === "type") {
            if (txt.length < word.length) t = setTimeout(() => setTxt(word.slice(0, txt.length + 1)), typeMs);
            else t = setTimeout(() => setPhase("hold"), holdMs);
        } else if (phase === "hold") {
            t = setTimeout(() => setPhase("erase"), holdMs / 4);
        } else if (phase === "erase") {
            if (txt.length > 0) t = setTimeout(() => setTxt(word.slice(0, txt.length - 1)), eraseMs);
            else {
                setPhase("type");
                setIdx((i) => (i + 1) % items.length);
            }
        }
        return () => clearTimeout(t);
    }, [txt, phase, items, idx, typeMs, holdMs, eraseMs]);

    return txt;
}

/* ---------------- Shared social links ---------------- */
const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Vnuja", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vnuja/", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://web.facebook.com/vinuja.ransith/", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://x.com/v_nuja", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/v.nuja/", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@v.nuja_", label: "YouTube" },
    { icon: <FaWhatsapp />, href: "https://wa.me/94769451554", label: "WhatsApp" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@v.nuja", label: "TikTok" },
];

/* ---------------- Social icons component ---------------- */
function Socials({ direction = "row" }) {
    const iconSx = {
        color: "#fff",
        fontSize: "1.25rem",
        transition: "transform .2s, opacity .2s",
        "&:hover": { transform: "translateY(-2px)", opacity: 0.9 },
    };

    return (
        <Stack
            direction={direction}
            spacing={direction === "row" ? 2 : 1.25}
            justifyContent="center"
            alignItems="center"
        >
            {socialLinks.map((s, i) => (
                <IconButton
                    key={i}
                    aria-label={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={iconSx}
                >
                    {s.icon}
                </IconButton>
            ))}
        </Stack>
    );
}

/* ---------------- Desktop view ---------------- */
function DesktopHome({ typed }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "calc(100vh - 72px)",
                display: "grid",
                alignItems: "center",
                background:
                    "radial-gradient(1000px 600px at 80% 12%, rgba(199,0,57,0.16), transparent 60%), linear-gradient(180deg, #0b0b0b 0%, #0a0a0a 100%)",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            {/* Left social rail */}
            <Box
                sx={{
                    position: "fixed",
                    left: 20,
                    top: "55%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                }}
            >
                <Socials direction="column" />
            </Box>

            {/* Background portrait */}
            <Box
                component="img"
                src={vinuja}
                alt="Vinuja Ransith portrait"
                decoding="async"
                loading="eager"
                sx={{
                    position: "Absolute",
                    top: 0,
                    right: 0,
                    opacity: 0.7,
                    maxWidth: "25vw",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Stack spacing={3} sx={{ pl: 9, pr: "26vw" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 200,
                            letterSpacing: 0.4,
                            lineHeight: 0.5,
                            fontSize: { md: "2rem" },
                        }}
                    >
                        Hi <Box component="span" sx={{ color: "#c70039" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: 0.4,
                            lineHeight: 1.05,
                            fontSize: { md: "4.6rem" },
                        }}
                    >
                        Vinuja <Box component="span" sx={{ color: "#c70039" }}>Ransith</Box>
                    </Typography>

                    <Typography sx={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.85)" }}>
                        I’m a{" "}
                        <Box
                            component="span"
                            sx={{
                                color: "#c70039",
                                fontWeight: 700,
                                display: "inline-flex",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {typed}
                            <Box
                                component="span"
                                aria-hidden
                                sx={{
                                    ml: 0.25,
                                    width: "1ch",
                                    animation: "blink 1s step-start infinite",
                                    "@keyframes blink": { "50%": { opacity: 0 } },
                                }}
                            >
                                |
                            </Box>
                        </Box>
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button
                            component="a"
                            href={cv}
                            download
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                bgcolor: "#c70039",
                                color: "#fff",
                                "&:hover": { opacity: 0.95 },
                            }}
                        >
                            Download CV
                        </Button>
                        <Button
                            href="/projects"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                bgcolor: "rgba(255,255,255,0.09)",
                                color: "#fff",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.14)" },
                            }}
                        >
                            View Projects
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

/* ---------------- Mobile view ---------------- */
function MobileHome({ typed, direction = "coloumn", }) {
    const RAIL_W = 56; // px
    const iconSx = {
        position: "relative",
        pr: "50vw",
        pl: 0,            // keep clear of portrait
        color: "#fff",
        fontSize: "1.5rem",
        transition: "transform .2s, opacity .2s",
        "&:hover": { transform: "translateY(-2px)", opacity: 0.9 },
    };
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "calc(100vh - 56px)",
                background:
                    "radial-gradient(700px 400px at 70% 10%, rgba(199,0,57,0.18), transparent 60%), linear-gradient(180deg, #0b0b0b 0%, #101010 100%)",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            {/* left vertical rail visible on mobile */}
            {/* <SocialRail showOn="mobile" /> */}


            {/* portrait pinned bottom-right */}
            <Box
                component="img"
                src={vinuja}
                alt="Vinuja Ransith"
                sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 85,
                    width: "80vw",
                    maxWidth: 500,
                }}
            />

            {/* content block aligned left with rail padding */}
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    pr: "3vw",             // keep clear of portrait
                    pt: 4,
                }}
            >
                <Stack spacing={2}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 200,
                            letterSpacing: 0.4,
                            lineHeight: 0.5,
                            fontSize: { md: "2rem" },
                        }}
                    >
                        Hi <Box component="span" sx={{ color: "#c70039" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 1000, fontSize: "2.2rem", lineHeight: 1.15, textAlign: "left" }}
                    >
                        Vinuja <Box component="span" sx={{ color: "#c70039" }}>Ransith</Box>
                    </Typography>

                    <Typography sx={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.86)", textAlign: "left" }}>
                        I’m a{" "}
                        <Box component="span" sx={{ color: "#c70039", fontWeight: 700 }}>
                            {typed}
                        </Box>
                        <Box
                            component="span"
                            aria-hidden
                            sx={{ ml: 0.25, width: "1ch", animation: "blink 1s step-start infinite", "@keyframes blink": { "50%": { opacity: 0 } } }}
                        >
                            |
                        </Box>
                    </Typography>

                    {/* stacked CTAs */}
                    <Stack spacing={1.25} sx={{ maxWidth: 280 }}>
                        <Button
                            component="a"
                            href={cv}
                            download
                            sx={{
                                textTransform: "none",
                                borderRadius: 1.5,
                                px: 2.5,
                                py: 1.1,
                                fontWeight: 800,
                                bgcolor: "#c70039",
                                color: "#fff",
                                boxShadow: "0 6px 20px rgba(199,0,57,0.25)",
                                "&:hover": { opacity: 0.95 },
                            }}
                        >
                            Download CV
                        </Button>
                        <Button
                            href="/projects"
                            sx={{
                                textTransform: "none",
                                borderRadius: 1.5,
                                px: 2.5,
                                py: 1.1,
                                fontWeight: 1000,
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.12)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.14)" },
                            }}
                        >
                            View Projects
                        </Button>
                        <br></br>
                        <br></br>
                        {socialLinks.map((s, i) => (
                            <IconButton
                                key={i}
                                aria-label={s.label}
                                component="a"
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={iconSx}
                            >
                                {s.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>

            </Container>

        </Box>
    );
}


/* ---------------- Main Export ---------------- */
export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const texts = useMemo(
        () => [
            "Content Creator.",
            "SE Project Manager.",
            "Web Designer.",
            "Software Designer.",
            "Hardware Supervisor.",
        ],
        []
    );
    const typed = useTypeCycle(texts, { typeMs: 45, holdMs: 1000, eraseMs: 22 });

    return isMobile ? <MobileHome typed={typed} /> : <DesktopHome typed={typed} />;
}

import React from "react";
import { Box, Button, Typography, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import cv from "../Files/Vinuja Ransith.pdf";

function DesktopResume() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        py: 6,
      }}
    >
      <Card
        sx={{
          width: "85%",
          maxWidth: 900,
          borderRadius: 4,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px rgba(199,0,57,0.2)",
          p: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              letterSpacing: 1,
              color: "#c70039",
              mb: 2,
            }}
          >
            My Resume
          </Typography>

          <Typography
            align="center"
            sx={{ mb: 3, color: "rgba(255,255,255,0.85)" }}
          >
            View or download my latest CV below.
          </Typography>

          {/* PDF preview */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              mb: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              height: "70vh",
            }}
          >
            <iframe
              src={cv}
              title="Vinuja Ransith Resume"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>

          {/* Download button */}
          <Box display="flex" justifyContent="center">
            <Button
              href={cv}
              download
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                background: "linear-gradient(90deg,#c70039,#ff4081)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "25px",
                px: 4,
                py: 1.5,
                boxShadow: "0 4px 12px rgba(199,0,57,0.4)",
                "&:hover": {
                  background: "linear-gradient(90deg,#ff0048,#ff4f91)",
                  transform: "scale(1.03)",
                },
              }}
            >
              Download CV
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

function MobileResume() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#121212 0%,#191919 100%)",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 6,
      }}
    >
      <PictureAsPdfIcon sx={{ fontSize: 64, color: "#c70039", mb: 2 }} />
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: "#c70039", mb: 2 }}
      >
        My Resume
      </Typography>
      <Typography
        sx={{
          fontSize: "1.1rem",
          mb: 3,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Tap below to download my CV.
      </Typography>
      <Button
        href={cv}
        download
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          background: "linear-gradient(90deg,#c70039,#ff4081)",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "25px",
          px: 4,
          py: 1.2,
          boxShadow: "0 4px 10px rgba(199,0,57,0.5)",
          "&:hover": {
            background: "linear-gradient(90deg,#ff0048,#ff4f91)",
          },
        }}
      >
        Download CV
      </Button>
    </Box>
  );
}

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileResume /> : <DesktopResume />;
}

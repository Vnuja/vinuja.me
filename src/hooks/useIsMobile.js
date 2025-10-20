// src/hooks/useIsMobile.js
import { useTheme, useMediaQuery } from "@mui/material";
export default function useIsMobile(bp = "md") {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(bp));
}

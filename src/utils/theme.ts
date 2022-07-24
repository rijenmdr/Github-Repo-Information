import { createTheme, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#272a30",
      light: "#34363c",
    },
    secondary: {
      main: "#fff",
      light: "#ccc",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: 48,
    },
    h2: {
      fontWeight: 700,
      fontSize: 36,
    },
    h3: {
      fontWeight: 600,
      fontSize: 32,
    },
    h4: {
      fontWeight: 500,
      fontSize: 28,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
});

export default theme;

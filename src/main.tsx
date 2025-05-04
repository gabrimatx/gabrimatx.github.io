// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core"; // Import MantineProvider and createTheme
import App from "./App";
import "./index.css";

// Import Mantine core styles
import "@mantine/core/styles.css";

// Optional: Define a custom theme or use the default
const theme = createTheme({
  // You can add customizations here later if needed
  fontFamily: "Verdana, sans-serif",
  // primaryColor: 'cyan',
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Add MantineProvider */}
    <MantineProvider
      theme={theme} // Apply the theme
      defaultColorScheme="dark" // Set default theme to dark!
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import ResumePage from './pages/ResumePage.tsx';
import './index.css'; // Ensure CSS is imported

// Configure the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The main layout component
    children: [ // Child routes render inside App's <Outlet>
      {
        path: "/", // Default route
        element: <HomePage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      // Add other routes here if needed
    ],
  },
], {
    // IMPORTANT for GitHub Pages with client-side routing:
    // Use basename matching the 'base' in vite.config.ts if it's NOT '/'
    // Since our base is '/', we don't strictly need basename here,
    // but it's good practice if deploying to a subfolder.
    // basename: import.meta.env.BASE_URL // Vite provides this automatically
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

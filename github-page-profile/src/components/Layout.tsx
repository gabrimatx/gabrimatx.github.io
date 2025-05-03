// src/components/Layout.tsx
import React, { ReactNode } from 'react'; // Import ReactNode type
import NavBar from './NavBar';

// Define props type
interface LayoutProps {
  children: ReactNode; // Type the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => { // Use the props type
  return (
    <div className="container">
      <NavBar />
      <main>
        {children} {/* Render the page content here */}
      </main>
    </div>
  );
}

export default Layout;

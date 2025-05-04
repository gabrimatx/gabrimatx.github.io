// src/components/NavBar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

const NavBar: React.FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      {/* Add more links here as needed */}
    </nav>
  );
};

export default NavBar;

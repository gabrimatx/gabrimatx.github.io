// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

function NavBar() {
  // Replace with your actual links
  const linkedInUrl = "https://linkedin.com/in/your-linkedin-profile";
  const githubUrl = "https://github.com/your-github-username";

  return (
    <nav className="navbar">
      <NavLink to="/" end> {/* 'end' ensures active only on exact match */}
        [ Home ]
      </NavLink>
      <NavLink to="/resume">
        [ Resume ]
      </NavLink>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        [ LinkedIn ]
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        [ GitHub ]
      </a>
    </nav>
  );
}

export default NavBar;

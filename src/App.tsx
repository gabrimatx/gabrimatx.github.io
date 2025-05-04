// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet renders the matched child route component
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <> {/* Use a fragment or a div wrapper if needed */}
      <NavBar />
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </>
  );
}

export default App;

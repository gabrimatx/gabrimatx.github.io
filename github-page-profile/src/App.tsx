// src/App.tsx
import React from 'react'; // React is needed for JSX
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

// App component type (optional but good practice)
const App: React.FC = () => {
  return (
    <HashRouter> {/* Use HashRouter for GitHub Pages compatibility */}
      <Layout>    {/* Layout provides NavBar and container */}
        <Routes>  {/* Define page routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          {/* Add other routes here if needed */}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for internal nav

const HomePage: React.FC = () => {
  // Replace with your details
  const email = "gabrimat1@protonmail.ch";
  const phone = "+39 3296211865";
  const linkedInUrl = "https://linkedin.com/in/your-linkedin-profile"; // Replace

  return (
    <> {/* Use Fragment shorthand */}
      <h1>Gabriele Matiddi</h1>
      <p>Software Engineer | Berlin, Germany</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: {phone}</p>

      <hr />

      <h2>About Me</h2>
      <p>
        Welcome! I'm a Software Engineer with a strong interest in Artificial Intelligence, Machine Learning, and Large Language Models (LLMs).
        I recently graduated with a Bachelor of Science in Computer Science and AI from Sapienza University of Rome, finishing in the top 2% of my class.
      </p>
      <p>
        Currently working at Grammarly in Berlin, I focus on building and optimizing software systems, particularly involving LLM post-processing, data pipelines, and concurrent algorithms. I enjoy tackling complex technical challenges and contributing to impactful projects.
      </p>
      <p>
        My background includes experience with Python, Java, AWS, cloud infrastructure, parallel computing, and research in areas like computer vision and scheduling algorithms. I'm also active in the cybersecurity community through CTF competitions.
      </p>

      <h2>Key Areas</h2>
      <ul>
        <li>Software Engineering (Python, Java Spring)</li>
        <li>Large Language Models (LLMs) & AI/ML</li>
        <li>Cloud Computing (AWS EC2/ECS, Bedrock, Azure)</li>
        <li>Data Processing (Databricks, PySpark)</li>
        <li>Algorithms & Data Structures</li>
        <li>Parallel & Concurrent Programming</li>
        <li>Web Technologies (Typescript, React - less focus currently)</li>
        <li>Computer Security (CTF)</li>
      </ul>

      <p style={{ marginTop: '1.5em' }}>
        Feel free to browse my <Link to="/resume">resume</Link> for more details or connect with me on <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
         {/* Switched back to React Router Link for internal navigation */}
      </p>
    </>
  );
}

export default HomePage;

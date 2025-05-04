// src/pages/ResumePage.tsx
import React from 'react';
import './ResumePage.css'; // Import the CSS

// --- Helper Component for Links (Optional but good practice) ---
interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);


// --- Main Resume Page Component ---
const ResumePage: React.FC = () => {
  // !! Replace placeholder URLs with your actual ones !!
  const linkedInUrl = "https://www.linkedin.com/in/gabriele-matiddi/"; // Replace with your LinkedIn URL
  const githubUrl = "https://github.com/gabrimatx";
  const email = "gabrimat1@protonmail.ch";

  return (
    <div className="resume-container">
      {/* --- Header --- */}
      <header className="resume-header">
        <h1>Gabriele Matiddi</h1>
        <div className="contact-info">
          <span>+39 3296211865</span> |
          <span>Berlin</span> |
          <span><a href={`mailto:${email}`}>{email}</a></span> |
          <span><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></span> |
          <span><ExternalLink href={githubUrl}>GitHub</ExternalLink></span>
        </div>
      </header>

      <hr className="section-divider"/>

      {/* --- Experience Section --- */}
      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-entry">
          <h3>Grammarly</h3>
           <span className="job-title">Software Engineer</span>
           <p className="date-location">September 2024 – Present | Berlin, Germany</p>
           <ul>
             <li>Engineered LLM post-processing pipeline (text truncation, UTF16 encoding fixes, newline restoration, hallucination prevention) increasing paragraph rewrite acceptance rate (40% → 60%) thanks to overall error reduction and quality increase. [Python]</li>
             <li>Contributed to delivery of 100% p0s task and setup of 6 experiments for the quality track, and assisted with roll-out handling and decision. [Statsig, Grafana, Prometheus]</li>
             <li>Designed concurrent algorithm for correction revert detection achieving 90% accuracy with under 1ms latency per iteration. Released to entire user base for feedback collection. [Java Spring]</li>
             <li>Handled internal deployment of Llama-70B model for experiments. Performed loadtesting and provided estimations to select optimal approach (between internal deployment, Databricks, AWS Bedrock), allowing to save 35% of deployment cost. [Locust, AWS EC2/ECS, AWS Bedrock]</li>
             <li>Performed data pipeline engineering work for automatic correction suppression. [Databricks, PySpark]</li>
           </ul>
        </div>
        <div className="resume-entry">
          <h3>Grammarly</h3>
          <span className="job-title">Software Engineering Intern</span>
          <p className="date-location">June 2024 – August 2024 | Berlin, Germany</p>
          <ul>
            <li>Developed and delivered a real-time intelligent voice drafting system for an internal prototyping project. Achieved the initial project milestone in just 1 month, significantly ahead of the 3-month timeline anticipated for a project of this scope. [Typescript React, Azure]</li>
            <li>Implemented indexing techniques that reduced computing time down to 20% for longer documents with respect to the original approach. [ShareDB (OT based), Python]</li>
          </ul>
        </div>
      </section>

      {/* --- Education Section --- */}
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-entry">
          <h3>Sapienza University of Rome</h3>
          <p className="date-location">Sept 2021 - July 2024 | Rome, Italy</p>
          <p><strong>Bachelor of Science in Computer Science and AI</strong></p>
          <p>Average: 29.44/30 (Top 2%), Final: 110L/110</p>
          <ul>
            <li><strong>Honours Programme:</strong> Program reserved to top 6 students in the course. Research focus in Computer Vision.</li>
            <li><strong>Teaching assistant:</strong> Worked as a teaching assistant for the algorithms course.</li>
            <li><strong>Scholarship:</strong> Student-Collaboration Scholarship, Outstanding student scholarship (Tuition fees waiver). Both merit based.</li>
          </ul>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-entry">
          <h3>Online Scheduling with Predictions (research internship, thesis)</h3>
          <p className="tech-stack">Tech: Python, MatPlotLib | 2024</p>
          <ul>
            <li>Experimental analysis of current scheduling algorithms (augmented with machine learned predictions) against the Google Cluster Trace dataset.</li>
            <li>Proposal of new self-balancing algorithm that experimentally performs better than the state of the art.</li>
          </ul>
        </div>
        <div className="resume-entry">
          <h3>ParallelPCA</h3>
          <p className="tech-stack">Tech: C, POSIX Threads, MPI | 2024</p>
          <ul>
            <li>Parallel implementation of principal component analysis.</li>
            <li>Obtained a substantial speed up, up to 2 times with respect to the serial version.</li>
          </ul>
        </div>
        <div className="resume-entry">
          <h3>SelfDrivingDrone</h3>
          <p className="tech-stack">Tech: Python, MatPlotLib, OpenCV, PyTorch | 2023</p>
          <ul>
            <li>AI software utilized to fly a drone through an obstacle course.</li>
            <li>Implements state-of-the-art object detection algorithms such as Faster R-CNN and SSDLite.</li>
          </ul>
        </div>
      </section>

      {/* --- Extracurricular Experience Section --- */}
      <section className="resume-section">
        <h2>Extracurricular Experience</h2>
        <div className="resume-entry">
          <h3>Cyberchallenge.it</h3>
          <p className="date-location">Feb 2024 - May 2024 | Rome</p>
          <p>Among the 20 (top 7%) selected for national CTF competition training.</p>
        </div>
        <div className="resume-entry">
          <h3>FA'23 - il Futuro Annunciato</h3>
          <p className="date-location">July 2023 | Rieti</p>
          <p>Among the 30 selected for summer school on computer science research.</p>
        </div>
      </section>

      {/* --- Awards Section --- */}
      <section className="resume-section">
        <h2>Awards</h2>
        <div className="resume-entry">
          <h3>OliCyber.it</h3>
          <p className="date-location">2021 | Rome</p>
          <p>Finalist at the national level (CTF competition)</p>
        </div>
         <div className="resume-entry">
          <h3>Problem Solving Olympiad</h3>
          <p className="date-location">2018 | Cesena</p>
          <p>First place in team programming competition</p>
        </div>
      </section>

    </div>
  );
};

export default ResumePage;

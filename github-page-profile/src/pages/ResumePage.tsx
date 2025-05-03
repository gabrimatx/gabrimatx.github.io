// src/pages/ResumePage.tsx
import React from 'react';
// No need for Link here unless you add internal links on this page

const ResumePage: React.FC = () => {
  // Replace with your details
  const email = "gabrimat1@protonmail.ch";
  const phone = "+39 3296211865";
  const linkedInUrl = "https://linkedin.com/in/your-linkedin-profile"; // Replace
  const githubUrl = "https://github.com/your-github-username"; // Replace

  return (
    <>
      <h1>Gabriele Matiddi - Resume</h1>
       <p>
            {phone} | Berlin | <a href={`mailto:${email}`}>{email}</a> | <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>

      {/* --- Experience Section --- */}
      <div className="resume-section">
        <h2>Experience</h2>
        {/* Grammarly SWE */}
        <div className="item-header">
          <span className="dates">September 2024 – Present</span>
          <h3 className="job-title">Software Engineer</h3>
          <p className="company">Grammarly</p>
          <span className="location">Berlin, Germany</span>
        </div>
        <ul>
          <li>Engineered LLM post-processing pipeline...<span className="tech-stack">[Python]</span></li>
          <li>Contributed to delivery of 100% p0s task...<span className="tech-stack">[Statsig, Grafana, Prometheus]</span></li>
          <li>Designed concurrent algorithm...<span className="tech-stack">[Java Spring]</span></li>
          <li>Handled internal deployment of Llama-70B...<span className="tech-stack">[Locust, AWS EC2/ECS, AWS Bedrock]</span></li>
          <li>Performed data pipeline engineering...<span className="tech-stack">[Databricks, PySpark]</span></li>
        </ul>
        {/* Grammarly Intern */}
        <div className="item-header" style={{marginTop: '1.5em'}}>
          <span className="dates">June 2024 – August 2024</span>
          <h3 className="job-title">Software Engineering Intern</h3>
          <p className="company">Grammarly</p>
          <span className="location">Berlin, Germany</span>
        </div>
        <ul>
          <li>Developed and delivered a real-time intelligent voice drafting system...<span className="tech-stack">[Typescript React, Azure]</span></li>
          <li>Implemented indexing techniques...<span className="tech-stack">[ShareDB (OT based), Python]</span></li>
        </ul>
      </div>

      {/* --- Education Section --- */}
      <div className="resume-section">
        <h2>Education</h2>
        <div className="item-header">
          <span className="dates">Sept 2021 - July 2024</span>
          <h3 className="degree-title">Bachelor of Science in Computer Science and AI</h3>
          <p className="university">Sapienza University of Rome</p>
          <span className="location">Rome, Italy</span>
        </div>
        <ul>
          <li>Average: 29.44/30 (Top 2%), Final Grade: 110L/110 (Summa Cum Laude)</li>
          <li><strong>Honours Programme:</strong> Program reserved to top 6 students...</li>
          <li><strong>Teaching assistant:</strong> Worked as a teaching assistant...</li>
          <li><strong>Scholarship:</strong> Student-Collaboration Scholarship...</li>
        </ul>
      </div>

      {/* --- Projects Section --- */}
        <div className="resume-section">
            <h2>Projects</h2>
            {/* Online Scheduling */}
            <div className="item-header">
                <span className="dates">2024</span>
                <h3 className="project-title">Online Scheduling with Predictions (research internship, thesis)</h3>
                 <span className="project-context"><span className="tech-stack">[Python, MatPlotLib]</span></span>
            </div>
            <ul>
                <li>Experimental analysis of current scheduling algorithms...</li>
                <li>Proposal of new self-balancing algorithm...</li>
            </ul>
            {/* ParallelPCA */}
             <div className="item-header" style={{marginTop: '1.5em'}}>
                 <span className="dates">2024</span>
                <h3 className="project-title">ParallelPCA</h3>
                 <span className="project-context"><span className="tech-stack">[C, POSIX Threads, MPI]</span></span>
             </div>
            <ul>
                <li>Parallel implementation of principal component analysis.</li>
                <li>Obtained a substantial speed up...</li>
            </ul>
            {/* SelfDrivingDrone */}
             <div className="item-header" style={{marginTop: '1.5em'}}>
                 <span className="dates">2023</span>
                <h3 className="project-title">SelfDrivingDrone</h3>
                 <span className="project-context"><span className="tech-stack">[Python, MatPlotLib, OpenCV, PyTorch]</span></span>
             </div>
             <ul>
                <li>AI software utilized to fly a drone...</li>
                <li>Implements state-of-the-art object detection...</li>
             </ul>
        </div>

      {/* --- Extracurricular Section --- */}
       <div className="resume-section">
            <h2>Extracurricular Experience</h2>
            {/* Cyberchallenge */}
            <div className="item-header">
                 <span className="dates">Feb 2024 - May 2024</span>
                <h3 className="organization-title">Cyberchallenge.it</h3>
                 <span className="location">Rome</span>
            </div>
            <ul><li>Among the 20 (top 7%) selected for national CTF competition training.</li></ul>
            {/* FA'23 */}
            <div className="item-header" style={{marginTop: '1.5em'}}>
                 <span className="dates">July 2023</span>
                <h3 className="organization-title">FA'23 - il Futuro Annunciato</h3>
                 <span className="location">Rieti</span>
            </div>
            <ul><li>Among the 30 selected for summer school on computer science research.</li></ul>
        </div>

      {/* --- Awards Section --- */}
        <div className="resume-section">
            <h2>Awards</h2>
            {/*[48;76;226;1064;1582t OliCyber */}
            <div className="item-header">
                 <span className="dates">2021</span>
                <h3 className="organization-title">OliCyber.it</h3>
                 <span className="location">Rome</span>
            </div>
            <ul><li>Finalist at the national level (CTF competition)</li></ul>
            {/* Problem Solving Olympiad */}
            <div className="item-header" style={{marginTop: '1.5em'}}>
                 <span className="dates">2018</span>
                <h3 className="organization-title">Problem Solving Olympiad</h3>
                 <span className="location">Cesena</span>
            </div>
            <ul><li>First place in team programming competition</li></ul>
        </div>
    </>
  );
}

export default ResumePage;

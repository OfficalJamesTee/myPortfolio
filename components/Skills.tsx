"use client";

import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <span className="badge">My Skills</span>
        <h2 className="section-title">Technologies I Work With</h2>
        <div className="tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => handleTabClick("frontend")}
            >
              Frontend
            </button>
            <button
              className={`tab-btn ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => handleTabClick("backend")}
            >
              Backend
            </button>
            <button
              className={`tab-btn ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => handleTabClick("tools")}
            >
              Tools
            </button>
          </div>
          <div className="tabs-content">
            <div
              className={`tab-pane ${activeTab === "frontend" ? "active" : ""}`}
              id="frontend"
            >
              <div className="skills-grid">
                <div className="skill-card">HTML/CSS</div>
                <div className="skill-card">JavaScript</div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === "backend" ? "active" : ""}`}
              id="backend"
            >
              <div className="skills-grid">
                <div className="skill-card">Node.js</div>
                <div className="skill-card">Express</div>
                <div className="skill-card">MongoDB</div>
                <div className="skill-card">REST API</div>
                <div className="skill-card">Postman</div>
              </div>
            </div>
            <div
              className={`tab-pane ${activeTab === "tools" ? "active" : ""}`}
              id="tools"
            >
              <div className="skills-grid">
                <div className="skill-card">Git</div>
                <div className="skill-card">GitHub</div>
                <div className="skill-card">VS Code</div>
                <div className="skill-card">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

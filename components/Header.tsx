"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            James ThankGod
          </Link>
          <nav className="main-nav">
            <ul className="nav-list">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button
              id="theme-toggle"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </button>
            <button
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect } from "react";

export default function MobileMenu() {
  useEffect(() => {
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const mobileMenu = document.querySelector(".mobile-menu");
        mobileMenu?.classList.remove("active");
      });
    });
  }, []);

  return (
    <div className="mobile-menu">
      <nav>
        <ul className="mobile-nav-list">
          <li>
            <a href="#about" className="mobile-nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="mobile-nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="mobile-nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

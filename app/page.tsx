"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  useEffect(() => {
    // Set current year in footer
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }

    // Animation on scroll
    const animateOnScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          // Fix: Cast section to HTMLElement to access style property
          const htmlSection = section as HTMLElement;
          htmlSection.style.opacity = "1";
          htmlSection.style.transform = "translateY(0)";
        }
      });
    };

    // Initial styles for animation
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      // Fix: Cast section to HTMLElement to access style property
      const htmlSection = section as HTMLElement;
      htmlSection.style.opacity = "0";
      htmlSection.style.transform = "translateY(20px)";
      htmlSection.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Run animation on load and scroll
    window.addEventListener("load", animateOnScroll);
    window.addEventListener("scroll", animateOnScroll);

    return () => {
      window.removeEventListener("load", animateOnScroll);
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <MobileMenu />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}

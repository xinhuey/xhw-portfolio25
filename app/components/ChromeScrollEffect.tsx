"use client"

import { useEffect } from "react"

export default function ChromeScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) return;
      
      const scrollProgress = window.scrollY / scrollTotal;
      const backgroundPosition = scrollProgress * 100;
      
      document.body.style.setProperty('--scroll-y', `${backgroundPosition}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
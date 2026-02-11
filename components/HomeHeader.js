"use client";

import { useState, useEffect } from "react";
import SiteHeader from "./SiteHeader";

export default function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <SiteHeader variant={isScrolled ? "default" : "hero"} />;
}

import Link from "next/link";
import config from "@/config";
import Navigation from "./Navigation";

export default function SiteHeader({ showNav = true, variant = "default" }) {
  const isHero = variant === "hero";
  const textClass = isHero
    ? "text-white/95 hover:text-white"
    : "text-[#2c2c2c] hover:opacity-80";
  const logoAccentClass = isHero ? "text-[#d4af37]" : "text-[#b8860b]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
        isHero ? "bg-transparent" : "bg-white/95 backdrop-blur-sm border-b border-[#e8e2d9]"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`flex items-center gap-2 font-bold text-lg tracking-[0.15em] uppercase ${textClass} transition-opacity`}
          >
            <span className={logoAccentClass} aria-hidden>
              ◆
            </span>
            <span className="uppercase">{config.appName}</span>
          </Link>
          {showNav && <Navigation variant={variant} />}
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import config from "@/config";

export default function SiteFooter() {
  return (
    <footer className="bg-[#2c2c2c] text-white py-8 md:py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <Link
            href="/"
            className="font-bold text-sm uppercase tracking-wider text-white hover:text-[#d4af37] transition-colors"
          >
            {config.appName}
          </Link>
          <p className="text-xs text-white/80 uppercase tracking-wider order-first md:order-none">
            © {new Date().getFullYear()} {config.appName.toUpperCase()}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-wider">
            <Link href="/#guides" className="text-white/80 hover:text-white transition-colors">
              Guides
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

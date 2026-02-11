import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function GuideLayout({ children, title, description }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader showNav={true} />
      <main className="flex-1 pt-20 pb-16">
        <article className="container mx-auto px-6 md:px-8 max-w-3xl">
          <nav className="mb-8">
            <Link
              href="/"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              ← Moving to China
            </Link>
          </nav>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-light text-black tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-black/70 leading-relaxed">
                {description}
              </p>
            )}
          </header>
          <div className="prose-guide text-black/85 leading-relaxed space-y-6">
            {children}
          </div>
          <footer className="mt-14 pt-8 border-t border-black/10">
            <Link
              href="/"
              className="text-[#c41e3a] font-medium hover:underline"
            >
              Back to all guides
            </Link>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

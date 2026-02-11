"use client";

import HomeHeader from "@/components/HomeHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

const guides = [
  { href: "/how-to-move-to-china", title: "How to Move to China", summary: "Steps, paperwork, and planning for relocating from the US to China." },
  { href: "/china-visa-types", title: "China Visa Types", summary: "Overview of work, business, student, and other visa categories." },
  { href: "/wechat-pay-for-foreigners", title: "WeChat Pay for Foreigners", summary: "How to set up and use WeChat Pay without a Chinese bank account." },
  { href: "/can-foreigners-buy-property-in-china", title: "Can Foreigners Buy Property in China?", summary: "Rules and restrictions for foreign nationals buying real estate." },
  { href: "/china-scholarships-for-international-students", title: "China Scholarships for International Students", summary: "Programs and how to apply for studying in China." },
  { href: "/cost-of-living-china-vs-usa", title: "Cost of Living: China vs USA", summary: "Compare housing, food, transport, and daily expenses." },
  { href: "/teach-english-in-china-requirements", title: "Teach English in China: Requirements", summary: "Qualifications, visas, and what you need to teach in China." },
  { href: "/china-immigration-visa-services", title: "Expert China Immigration & Visa Services", summary: "Work permits, residence visas, permanent residency, and family relocation guidance." },
];

const whyChinaFeatures = [
  {
    label: "01 — FEATURE",
    title: "Unrivaled Daily Safety",
    body: "China is one of the safest countries in the world for residents and visitors alike. From low crime rates to advanced urban infrastructure, you can enjoy peace of mind whether you're retiring, working, or studying.",
    quote: "A place where walking alone at night is the norm, not the exception.",
    image: "/images/placeholder-hero.jpg",
    imageAlt: "China landscape",
    reverse: false,
  },
  {
    label: "02 — FEATURE",
    title: "Premium Medical & Living",
    body: "Access high-quality, affordable healthcare and housing. Many cities offer internationally accredited hospitals and clinics at a fraction of Western costs, alongside modern housing options for every budget.",
    quote: "World-class care without the world-class price tag.",
    image: "/images/placeholder-project.jpg",
    imageAlt: "Modern living",
    reverse: true,
  },
  {
    label: "03 — FEATURE",
    title: "Infrastructure of the Future",
    body: "Experience the world's largest high-speed rail network, widespread digital payment systems, and efficient public transit. China's infrastructure makes daily life convenient and connected.",
    quote: "Where cashless and high-speed are already the standard.",
    image: "/images/placeholder-hero.jpg",
    imageAlt: "Infrastructure",
    reverse: false,
  },
];

const journeyCards = [
  {
    title: "Visa & Residency Guides",
    description: "From work permits to permanent residency—clear, practical guides for every path.",
    href: "/china-visa-types",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Cost of Living",
    description: "Compare expenses, housing, and daily life in China vs the US so you can plan with confidence.",
    href: "/cost-of-living-china-vs-usa",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Teaching & Work",
    description: "Requirements for teaching English and working in China—visas, qualifications, and next steps.",
    href: "/teach-english-in-china-requirements",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholder-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-8 text-center max-w-4xl">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
            Your gateway to life in China
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            Live More for Less.
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed">
            Practical information for US citizens considering a move to China—visas, cost of living, banking, teaching, and more.
          </p>
          <a
            href="#why-china"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-white/90 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-[#2c2c2c] transition-all duration-300"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* Why China */}
      <section id="why-china" className="bg-[#f5f0e8] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
              The new standard
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2c2c2c] font-medium">
              Why China
            </h2>
          </div>
          <div className="space-y-24 md:space-y-32">
            {whyChinaFeatures.map((feature, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${feature.reverse ? "md:grid-flow-dense" : ""}`}
              >
                <div className={feature.reverse ? "md:col-start-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8e2d9]">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={feature.reverse ? "md:col-start-1 md:row-start-1" : ""}>
                  <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-3">
                    {feature.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed mb-5">
                    {feature.body}
                  </p>
                  <p className="text-[#6b6b6b] text-sm italic border-l-2 border-[#c9a227] pl-4">
                    {feature.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Journey */}
      <section className="bg-[#f5f0e8] py-20 md:py-24 border-t border-[#e8e2d9]">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
              Your journey
            </p>
            <p className="text-lg text-[#2c2c2c] max-w-2xl mx-auto">
              From initial inquiry to residency and daily life, our guides are here at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {journeyCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-xl p-8 shadow-sm border border-[#e8e2d9] hover:shadow-md hover:border-[#c9a227]/40 transition-all duration-300"
              >
                <div className="text-[#2c2c2c] mb-5 group-hover:text-[#b8860b] transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2c2c2c] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/#guides"
              className="inline-flex items-center gap-2 text-[#2c2c2c] font-semibold text-sm uppercase tracking-wider hover:text-[#b8860b] transition-colors"
            >
              View all guides
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Guides list */}
      <section id="guides" className="bg-[#f5f0e8] py-20 md:py-24 border-t border-[#e8e2d9]">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-2">
              Resources
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] font-medium">
              Guides &amp; topics
            </h2>
          </div>
          <ul className="space-y-4">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block group p-5 rounded-xl bg-white/80 border border-[#e8e2d9] hover:border-[#c9a227]/50 hover:shadow-sm transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#2c2c2c] group-hover:text-[#b8860b] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b6b6b] leading-relaxed">
                    {guide.summary}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-[#b8860b]">
                    Read guide →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pre-footer / Contact */}
      <section id="contact" className="bg-[#e8e2d9] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-4">
            Questions?
          </p>
          <a
            href="mailto:info@movingtochina.com"
            className="text-xl md:text-2xl font-semibold text-[#2c2c2c] hover:text-[#b8860b] transition-colors"
          >
            info@movingtochina.com
          </a>
          <div className="mt-8 flex justify-center gap-8 text-sm">
            <Link href="/china-immigration-visa-services" className="text-[#6b6b6b] hover:text-[#2c2c2c] transition-colors">
              Immigration &amp; Visa Services
            </Link>
            <Link href="/#guides" className="text-[#6b6b6b] hover:text-[#2c2c2c] transition-colors">
              All Guides
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

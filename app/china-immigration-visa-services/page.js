import { getSEOTags } from "@/libs/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./immigration-services.css";

export const metadata = getSEOTags({
  title: "Expert China Immigration & Visa Services – Moving to China",
  description:
    "Navigate China's immigration system: work permits, residence visas, permanent residency, and family relocation guidance for foreigners moving to China.",
  canonicalUrlRelative: "/china-immigration-visa-services",
});

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);
const DoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);
const PeopleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);
const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.11 0-1.99.89-1.99 2S5.89 22 7 22s2-.89 2-2-.89-2-2-2zm10 0c-1.11 0-1.99.89-1.99 2s.89 2 1.99 2 2-.89 2-2-.89-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
  </svg>
);
const CardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
);
const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
  </svg>
);
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);

export default function ChinaImmigrationVisaServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />
      <div className="immigration-services-page" style={{ paddingTop: "5rem" }}>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Expert China Immigration &amp; Visa Services</h1>
              <p>Navigate China&apos;s complex immigration system with confidence. From work permits and residence visas to permanent residency and family relocation, we provide comprehensive guidance for foreigners moving to China.</p>
              <div className="cta-buttons">
                <a href="#consultation" className="btn btn-primary">
                  <CalendarIcon />
                  Schedule Free Assessment
                </a>
                <a href="#visa-types" className="btn btn-secondary">
                  <DocIcon />
                  Explore Visa Types
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div className="trust-bar">
          <div className="container">
            <div className="trust-items">
              <div className="trust-item">
                <CheckIcon />
                <h3>10,000+</h3>
                <p>Successful Applications</p>
              </div>
              <div className="trust-item">
                <ClockIcon />
                <h3>15+ Years</h3>
                <p>China Immigration Expertise</p>
              </div>
              <div className="trust-item">
                <DoneIcon />
                <h3>98%</h3>
                <p>Approval Rate</p>
              </div>
              <div className="trust-item">
                <BuildingIcon />
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visa types */}
        <section id="visa-types" className="section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Visa Categories</span>
              <h2>See Clear China Visa Categories for Every Situation</h2>
              <p className="section-description">Whether you&apos;re immigrating to China for work, family, or investment, understanding which visa fits your situation is the critical first step. We break down China&apos;s visa categories so you can quickly identify your path.</p>
            </div>
            <div className="visa-grid">
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><BriefcaseIcon /></div>
                </div>
                <h3>Z Visa - Work Permits</h3>
                <p>For foreigners seeking employment in China. This is the primary route for most expats working in China.</p>
                <ul className="visa-features">
                  <li>Category A: High-end foreign talent</li>
                  <li>Category B: Professional personnel</li>
                  <li>Category C: Temporary or service workers</li>
                  <li>Valid for 30-90 days entry, convert to residence permit</li>
                </ul>
              </div>
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><PeopleIcon /></div>
                </div>
                <h3>Family Reunion Visas</h3>
                <p>Designed for family members of foreign nationals legally residing in China or Chinese citizens.</p>
                <ul className="visa-features">
                  <li>Q1: Long-term family reunion (over 180 days)</li>
                  <li>Q2: Short-term visits (under 180 days)</li>
                  <li>S1/S2: For family of work permit holders</li>
                  <li>Spouse and dependent children eligible</li>
                </ul>
              </div>
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><PinIcon /></div>
                </div>
                <h3>Business &amp; Tourist Visas</h3>
                <p>For short-term business activities, tourism, or visiting friends in China.</p>
                <ul className="visa-features">
                  <li>M Visa: Business visits and trade</li>
                  <li>L Visa: Tourism and private visits</li>
                  <li>F Visa: Non-commercial exchanges</li>
                  <li>Typically 30-90 day stays, multiple entry options</li>
                </ul>
              </div>
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><SchoolIcon /></div>
                </div>
                <h3>Student &amp; Academic Visas</h3>
                <p>For foreigners pursuing education or academic research in Chinese institutions.</p>
                <ul className="visa-features">
                  <li>X1: Long-term study (over 180 days)</li>
                  <li>X2: Short-term study (under 180 days)</li>
                  <li>Requires admission letter from Chinese institution</li>
                  <li>Can include internship provisions</li>
                </ul>
              </div>
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><CartIcon /></div>
                </div>
                <h3>Investment &amp; Talent Visas</h3>
                <p>For high-level foreign talent, investors, and individuals with special skills China seeks.</p>
                <ul className="visa-features">
                  <li>R Visa: High-level talent urgently needed</li>
                  <li>Pathway to fast-tracked permanent residency</li>
                  <li>Special provisions for tech and innovation sectors</li>
                  <li>Significant investment or expertise required</li>
                </ul>
              </div>
              <div className="visa-card">
                <div className="visa-card-header">
                  <div className="visa-icon"><CardIcon /></div>
                </div>
                <h3>Permanent Residence</h3>
                <p>The Chinese &quot;Green Card&quot; - one of the world&apos;s most exclusive permanent residency programs.</p>
                <ul className="visa-features">
                  <li>Long-term work history in China (typically 4+ years)</li>
                  <li>High-level talent or significant investment</li>
                  <li>Family reunion after many years residence</li>
                  <li>10-year renewable permanent residency card</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application process */}
        <section id="application-process" className="section-gray">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Application Process</span>
              <h2>Follow Step-by-Step Instructions That Keep You on Track</h2>
              <p className="section-description">Understanding how to immigrate to China and apply for a visa to live and work in China doesn&apos;t have to be overwhelming. Our proven process guides you through each stage so you always know exactly what to do next.</p>
            </div>
            <div className="process-steps">
              {[
                { n: 1, title: "Eligibility Assessment", p: "We analyze your situation against current China immigration requirements to determine the best visa path for U.S. citizens and other foreign nationals.", detailLabel: "What you'll get:", detailText: "Personalized eligibility report, visa type recommendation, timeline estimate, and document checklist specific to your category." },
                { n: 2, title: "Document Preparation", p: "Gather and authenticate all required documents according to the latest China immigration form online requirements and NIA China standards.", detailLabel: "Common documents:", detailText: "Valid passport, educational certificates, employment contracts, health examination, criminal background check, and invitation letters." },
                { n: 3, title: "Employer Sponsorship", p: "Your Chinese employer applies for a Work Permit Notification Letter with the local Bureau of Human Resources and Social Security.", detailLabel: "Timeline:", detailText: "5-20 business days depending on category. Category A applicants receive priority processing." },
                { n: 4, title: "Z Visa Application", p: "Apply for your Z visa at a Chinese consulate in your home country using the Notification Letter and supporting documents.", detailLabel: "Processing time:", detailText: "4-7 business days standard, express services available. Valid for single entry within 90 days." },
                { n: 5, title: "Entry & Work Permit", p: "Enter China on your Z visa and apply for your official Work Permit within 30 days of arrival.", detailLabel: "Requirements:", detailText: "Medical examination in China, biometric data collection, and employer documentation submission." },
                { n: 6, title: "Residence Permit", p: "Complete the process by obtaining your residence permit, which authorizes you to legally live and work in China.", detailLabel: "Duration:", detailText: "Typically 1-2 years initially, renewable. Category A talent may receive up to 5-year permits." },
              ].map((step) => (
                <div key={step.n} className="step-card">
                  <div className="step-number">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.p}</p>
                  <div className="step-details"><strong>{step.detailLabel}</strong> {step.detailText}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residency options */}
        <section id="residency-options" className="section-light">
          <div className="container-wide">
            <div className="section-header">
              <span className="section-label">Residency Pathways</span>
              <h2>See Exactly Which Stay Options You Have in China</h2>
              <p className="section-description">From temporary residence to permanent residency, understand your options for establishing legal residence in China as a foreign national.</p>
            </div>
            <div className="residence-grid">
              <div className="residence-card">
                <div className="residence-header">
                  <h3>Temporary Residence</h3>
                  <p>1-2 Year Work Permits</p>
                </div>
                <div className="residence-body">
                  <ul className="residence-features">
                    <li><strong>Duration:</strong> Initial permits typically 1-2 years</li>
                    <li><strong>Renewability:</strong> Renewable as long as employment continues</li>
                    <li><strong>Work Rights:</strong> Limited to sponsoring employer</li>
                    <li><strong>Family:</strong> Dependents can obtain S1/S2 visas</li>
                    <li><strong>Travel:</strong> Multiple entry/exit permitted</li>
                    <li><strong>Best for:</strong> Most foreign employees and expats</li>
                    <li><strong>Path forward:</strong> Can lead to permanent residency after 4+ years</li>
                  </ul>
                </div>
              </div>
              <div className="residence-card">
                <div className="residence-header">
                  <h3>Long-Term Residence</h3>
                  <p>5-Year Work Permits</p>
                </div>
                <div className="residence-body">
                  <ul className="residence-features">
                    <li><strong>Duration:</strong> Up to 5 years for Category A talent</li>
                    <li><strong>Renewability:</strong> Simplified renewal process</li>
                    <li><strong>Work Rights:</strong> May include job change flexibility</li>
                    <li><strong>Family:</strong> Streamlined family visa processing</li>
                    <li><strong>Priority:</strong> Fast-tracked applications and renewals</li>
                    <li><strong>Best for:</strong> High-level executives, experts, and researchers</li>
                    <li><strong>Path forward:</strong> Accelerated permanent residency eligibility</li>
                  </ul>
                </div>
              </div>
              <div className="residence-card">
                <div className="residence-header">
                  <h3>Permanent Residency</h3>
                  <p>Chinese &quot;Green Card&quot;</p>
                </div>
                <div className="residence-body">
                  <ul className="residence-features">
                    <li><strong>Duration:</strong> 10 years, renewable indefinitely</li>
                    <li><strong>Requirements:</strong> 4+ years continuous work or significant investment</li>
                    <li><strong>Work Rights:</strong> Unrestricted employment in China</li>
                    <li><strong>Family:</strong> Spouse and children can also apply</li>
                    <li><strong>Benefits:</strong> Same treatment as Chinese citizens in many areas</li>
                    <li><strong>Best for:</strong> Long-term residents committed to China</li>
                    <li><strong>Note:</strong> One of the world&apos;s most selective permanent residency programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family support */}
        <section id="family-services" className="section-gray">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Family Support</span>
              <h2>Understand How Your Family Can Relocate to China</h2>
              <p className="section-description">Moving to China with your family requires careful planning. We help your spouse and children obtain the right visas so your entire family can legally live in China alongside you.</p>
            </div>
            <div className="family-support-content">
              <div className="support-list">
                <div className="support-item">
                  <h4>Dependent Visa Processing</h4>
                  <p>S1 visas for spouses and children under 18 of work permit holders. S2 visas for short-term family visits. We handle the entire application process for your family members.</p>
                </div>
                <div className="support-item">
                  <h4>School Placement Assistance</h4>
                  <p>Help finding and enrolling children in international schools in China. Guidance on documentation requirements, education visa considerations, and school registration procedures.</p>
                </div>
                <div className="support-item">
                  <h4>Spousal Work Authorization</h4>
                  <p>Assistance for spouses who want to work in China. Guidance on converting from dependent visa to work permit, job search support, and employer liaison.</p>
                </div>
                <div className="support-item">
                  <h4>Residence Registration</h4>
                  <p>Help with temporary residence registration for your entire family within 24 hours of arrival. Ongoing support for address changes and registration updates.</p>
                </div>
              </div>
              <div className="support-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="70" r="25" fill="currentColor" opacity="0.8" /><circle cx="60" cy="120" r="18" fill="currentColor" opacity="0.6" /><circle cx="140" cy="120" r="18" fill="currentColor" opacity="0.6" /><circle cx="100" cy="145" r="15" fill="currentColor" opacity="0.5" /><path d="M100 95c-20 0-35 10-35 25h70c0-15-15-25-35-25zM60 138c-12 0-20 6-20 15h40c0-9-8-15-20-15zM140 138c-12 0-20 6-20 15h40c0-9-8-15-20-15z" fill="currentColor" opacity="0.6" /></svg>
                <div className="support-stats">
                  <div className="stat-box"><span className="number">5,000+</span><span className="label">Families Relocated</span></div>
                  <div className="stat-box"><span className="number">95%</span><span className="label">Family Visa Success</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert services */}
        <section id="expert-services" className="section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Expert Services</span>
              <h2>Benefit from Local China Immigration Experts</h2>
              <p className="section-description">China&apos;s immigration laws are complex and evolving. Our on-the-ground experts stay current with the latest Chinese immigration policy changes so you don&apos;t risk rejections from outdated information.</p>
            </div>
            <div className="services-grid">
              {[
                { Icon: InfoIcon, title: "Pre-Application Advice", p: "Check your eligibility before committing time and money. We assess your situation against current China immigration requirements and provide honest guidance on your chances of approval." },
                { Icon: DocIcon, title: "Up-to-Date Rules", p: "Rely on current China immigration website information and official NIA China updates. We monitor policy changes daily to ensure your application follows the latest requirements." },
                { Icon: DoneIcon, title: "Progress Tracking", p: "Track your visa progress and document issuance in real-time so you're never left wondering what's happening. Online portal access with status updates at every stage." },
                { Icon: ClockIcon, title: "Renewal Support", p: "Your right to stay in China never accidentally lapses with our proactive renewal reminders and streamlined renewal processing service for work permits and residence permits." },
                { Icon: ShieldIcon, title: "Guided-Entry Solutions", p: "When borders or rules are changing, rely on our guided-entry services so you're not caught out. We assess eligibility for entry during complex times and arrange required documentation." },
                { Icon: MailIcon, title: "24/7 Consultation Access", p: "Use phone and consultation access to get personalized answers instead of guessing from generic info. Direct access to our China immigration experts via phone, email, and video calls." },
              ].map(({ Icon, title, p }) => (
                <div key={title} className="service-card">
                  <Icon />
                  <h3>{title}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retirement */}
        <section id="retirement-benefits" className="section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Retirement in China</span>
              <h2>Why Retire in China?</h2>
              <p className="section-description">China offers an unparalleled retirement experience with its blend of safety, affordability, and advanced infrastructure, making China for foreigners—especially retirees—an increasingly attractive option. Discover the benefits that make China an attractive destination for retirees.</p>
            </div>
            <div className="services-grid">
              {[
                { title: "Unmatched Safety", p: "Experience a worry-free lifestyle. China is one of the safest countries globally, where strolling alone on city streets late at night is a norm, not a risk." },
                { title: "Quality Healthcare and Affordable Living", p: "Enjoy a high-quality lifestyle without the hefty price tag. Access internationally accredited healthcare services and luxury housing at a fraction of the cost in Western countries." },
                { title: "Future-Ready Infrastructure", p: "Navigate with ease through the world's largest high-speed rail network and cashless society. China is paving the way for the future with its seamless infrastructure." },
              ].map((item) => (
                <div key={item.title} className="service-card">
                  <InfoIcon />
                  <h3>{item.title}</h3>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate */}
        <section id="corporate-services" className="section-gray">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Corporate Solutions</span>
              <h2>Move Employees Into and Out of China Smoothly</h2>
              <p className="section-description">We provide comprehensive global mobility strategy support for corporations relocating employees to China. Whether inbound to China or outbound to 190+ countries worldwide, we ensure compliant, efficient employee mobility.</p>
            </div>
            <div className="corporate-features">
              <div className="feature-list">
                {[
                  { title: "Work Permit Management", p: "End-to-end work authorization for foreign employees in China. We handle applications, renewals, and compliance monitoring for your entire foreign workforce, ensuring proper categorization under the A/B/C system." },
                  { title: "Immigration Compliance", p: "Strategic guidance on immigration policies, sponsor compliance, and audit support. We develop and implement immigration policies that keep your organization compliant with evolving China migration policy." },
                  { title: "Global Mobility Management", p: "Support for employee mobility to and from China to 190+ countries. Whether you're bringing talent into China or sending Chinese employees abroad, we provide comprehensive visa and immigration support worldwide." },
                  { title: "Business Traveler Services", p: "Comprehensive M visa and business visa management for employees making short-term trips to China. Compliance tracking for the number and length of stays, ensuring your business travelers remain legal." },
                ].map((item, i) => {
                  const Icon = [DoneIcon, SearchIcon, GlobeIcon, BriefcaseIcon][i];
                  return (
                    <div key={item.title} className="feature-item">
                      <div className="feature-icon"><Icon /></div>
                      <div className="feature-content"><h4>{item.title}</h4><p>{item.p}</p></div>
                    </div>
                  );
                })}
              </div>
              <div className="corporate-cta">
                <h3>Strategic Partnership for Corporate Clients</h3>
                <p>We act as trusted business advisors, supporting you in complex immigration matters, large-scale employee moves, corporate restructuring, and mergers and acquisitions involving cross-border talent.</p>
                <a href="#consultation" className="btn btn-primary">
                  <MailIcon />
                  Request Corporate Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Immigration insights - simplified feature items */}
        <section id="immigration-insights" className="section-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Immigration Insights</span>
              <h2>Understanding Immigration to China: Statistics &amp; Trends</h2>
              <p className="section-description">Many people ask &quot;Does China allow immigration?&quot;, &quot;Can I immigrate to China?&quot; and &quot;How many foreigners live in China?&quot; Here&apos;s what you need to know about china: immigration and emigration, migration to China, and current immigration statistics.</p>
            </div>
            <div className="corporate-features">
              <div className="feature-list">
                {[
                  { title: "Foreigners in China: Current Numbers", p: "Approximately 1 million foreigners live in China legally with valid residence permits, making up a diverse community of foreigners living in China. Questions like how many immigrants are in China come up often, and while the total varies by year, immigration to China from US citizens represents a significant portion, especially in major cities like Shanghai, Beijing, and Shenzhen." },
                  { title: "How Many People Immigrate to China Every Year?", p: "Immigration to China statistics show tens of thousands of new work permits issued annually. China's net migration rate remains controlled, with the government carefully managing who can immigrate to China through its points-based work permit system." },
                  { title: "Is It Hard to Immigrate to China?", p: "The answer depends on your qualifications. Being a foreigner in China has become more accessible for high-skilled workers (Category A), but immigration laws in China remain strict. Understanding what is China's immigration policy and working with experts makes the process much more manageable." },
                  { title: "Why Do People Move to China?", p: "People migrating to China cite career opportunities, business expansion, cultural experiences, and family connections as primary reasons. China emigration policy has also evolved, making it easier for certain skilled immigrants to China to obtain residence permits as a resident of China." },
                ].map((item) => (
                  <div key={item.title} className="feature-item">
                    <div className="feature-icon"><ChartIcon /></div>
                    <div className="feature-content"><h4>{item.title}</h4><p>{item.p}</p></div>
                  </div>
                ))}
              </div>
              <div className="support-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect x="40" y="120" width="30" height="60" fill="currentColor" opacity="0.6" /><rect x="85" y="90" width="30" height="90" fill="currentColor" opacity="0.7" /><rect x="130" y="70" width="30" height="110" fill="currentColor" opacity="0.8" /><path d="M40 120 L70 90 L100 95 L115 85 L145 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5" /></svg>
                <p style={{ textAlign: "center", color: "var(--text-light)", marginTop: "1rem", maxWidth: "300px" }}>
                  <strong>Growing Trend:</strong> Chinese immigration statistics show steady increases in professional foreign workers and migrants china seeking long-term opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="consultation" className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Get Personalized China Immigration Guidance Today</h2>
              <p>Don&apos;t navigate China&apos;s complex immigration system alone. Schedule a free consultation with our local experts who understand the latest China immigration requirements, contact procedures, and can answer your specific questions.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <PhoneIcon />
                  <h3>Call Us</h3>
                  <p>Speak with a China immigration expert</p>
                  <a href="tel:+86-21-5555-0000">+86-21-5555-0000</a>
                  <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>China immigration contact number</p>
                </div>
                <div className="contact-method">
                  <MailIcon />
                  <h3>Email Us</h3>
                  <p>Get detailed answers via email</p>
                  <a href="mailto:info@chinavisaexpert.com">info@chinavisaexpert.com</a>
                  <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Response within 24 hours</p>
                </div>
                <div className="contact-method">
                  <CalendarIcon />
                  <h3>Online Form</h3>
                  <p>Complete your China immigration form online</p>
                  <a href="#consultation">Start Application</a>
                  <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Free eligibility assessment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}

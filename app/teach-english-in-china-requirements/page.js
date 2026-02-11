import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "Teach English in China: Requirements – Moving to China",
  description:
    "Qualifications, visas, and what you need to teach English in China as a US citizen.",
  canonicalUrlRelative: "/teach-english-in-china-requirements",
});

export default function TeachEnglishInChinaRequirementsPage() {
  return (
    <GuideLayout
      title="Teach English in China: Requirements"
      description="What’s typically required to teach English in China—degree, credentials, visa, and where to check current rules."
    >
      <h2>Typical requirements (overview)</h2>
      <p>
        To teach English legally in China, you usually need a work (Z) visa and a work permit. 
        Requirements are set by national and sometimes local rules; below is a general picture. 
        Always confirm with your employer and the latest government guidelines.
      </p>

      <h2>Degree and citizenship</h2>
      <p>
        Most positions require a <strong>bachelor’s degree or higher</strong> from an accredited institution. 
        Employers and authorities often prefer or require that you be a <strong>native English speaker</strong> from a country where English is an official language (e.g. US, UK, Canada, Australia). 
        US citizens are commonly eligible.
      </p>

      <h2>Teaching credentials and experience</h2>
      <p>
        Many schools ask for a <strong>TEFL, TESOL, CELTA</strong>, or similar teaching certificate (often 120+ hours). 
        Some positions require two years of teaching experience. 
        Public schools and universities may have stricter requirements; training centers and private schools can be more flexible but still must meet visa and work-permit rules.
      </p>

      <h2>Health and background</h2>
      <p>
        A <strong>health check</strong> (often in a designated hospital in China or sometimes abroad) is usually required for the work permit. 
        A <strong>criminal background check</strong> from your home country (e.g. FBI for Americans) is commonly needed and may need to be authenticated (e.g. apostille).
      </p>

      <h2>Visa and work permit</h2>
      <p>
        You cannot teach on a tourist (L) or business (M) visa. You need a <strong>Z (work) visa</strong>, which is issued after your employer obtains a <strong>foreigner’s work permit</strong> for you. 
        The employer typically starts the process; you provide documents (degree, certificate, passport, photos, health check, background check, etc.). 
        Rules on age, years of experience, and degree subject can apply and vary by region.
      </p>

      <h2>Where to confirm</h2>
      <p>
        Requirements and document authentication rules change. Check the official work-permit and visa guidance (e.g. State Administration of Foreign Expert Affairs (SAFEA) and related sites) and your employer’s HR or recruitment agency for the latest steps.
      </p>
    </GuideLayout>
  );
}

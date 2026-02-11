import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "China Visa Types – Moving to China",
  description:
    "Overview of Chinese visa categories for US citizens: work, business, student, tourist, and more.",
  canonicalUrlRelative: "/china-visa-types",
});

export default function ChinaVisaTypesPage() {
  return (
    <GuideLayout
      title="China Visa Types"
      description="An overview of common visa categories for foreigners entering China. Requirements and validity vary; always confirm with the issuing consulate."
    >
      <h2>Common visa categories</h2>
      <p>
        Chinese visas are issued by category (e.g. L, M, X, Z). Each has different purposes, validity, and entry rules. 
        Below is a simplified overview—official consulate or embassy pages are the authority.
      </p>

      <h3>L – Tourist / private visit</h3>
      <p>
        For tourism and short private visits. Usually single or double entry, with stays of 30–90 days depending on the visa. 
        No work or study allowed on an L visa.
      </p>

      <h3>M – Business</h3>
      <p>
        For business activities (meetings, trade, short-term projects). Requires an invitation from a Chinese entity. 
        Not a work permit; long-term employment needs a Z visa and work permit.
      </p>

      <h3>X – Student</h3>
      <p>
        For formal study at a Chinese institution. X1 is for long-term study (often 180+ days), X2 for short-term. 
        You typically need an admission notice and JW201 or JW202 form from the school.
      </p>

      <h3>Z – Work</h3>
      <p>
        For employment in China. Requires a work permit and invitation from a Chinese employer. 
        The employer usually initiates the work permit process; you then apply for the Z visa with that permit and related documents.
      </p>

      <h3>Q – Family / personal visit</h3>
      <p>
        For visiting family (e.g. Chinese spouse or relatives). Q1 is long-term, Q2 short-term. 
        Proof of relationship and sometimes an invitation are required.
      </p>

      <h2>Checking current requirements</h2>
      <p>
        Visa rules, required documents, and processing times are set by Chinese consulates and change over time. 
        Always check the website of the Chinese embassy or consulate where you will apply (e.g. in the US) before submitting an application.
      </p>
    </GuideLayout>
  );
}

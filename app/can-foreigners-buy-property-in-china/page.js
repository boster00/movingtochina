import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "Can Foreigners Buy Property in China? – Moving to China",
  description:
    "Rules and restrictions for foreign nationals buying real estate in China. Who can buy and what’s allowed.",
  canonicalUrlRelative: "/can-foreigners-buy-property-in-china",
});

export default function CanForeignersBuyPropertyInChinaPage() {
  return (
    <GuideLayout
      title="Can Foreigners Buy Property in China?"
      description="An overview of whether and how foreign nationals can buy real estate in China. Rules vary by city and purpose."
    >
      <h2>Short answer</h2>
      <p>
        In many Chinese cities, foreigners are allowed to buy certain types of property (e.g. residential) for personal use, subject to conditions. 
        The rules are not uniform nationwide and can change, so local rules and professional advice matter.
      </p>

      <h2>Typical requirements</h2>
      <p>
        Common conditions include: having a valid visa (often work or long-term stay), being in China for a minimum period (e.g. one year of work or study), and buying only one residential property for self-use in the designated city. 
        Some areas restrict or prohibit foreign purchase; others allow it with limits.
      </p>

      <h2>What’s usually restricted or prohibited</h2>
      <ul>
        <li>Buying multiple residential properties in the same city (or at all) in many places.</li>
        <li>Purchasing land ownership (land is state-owned; you buy property/use rights, not land itself).</li>
        <li>Using property for purposes other than permitted (e.g. personal residence vs. commercial) in ways that violate local rules.</li>
      </ul>

      <h2>Practical steps</h2>
      <p>
        If you are considering buying property in China, check the current rules in the city where you want to buy (local housing and land bureaus), and consider consulting a local lawyer or licensed agent who handles foreign buyers. 
        Documentation usually includes passport, visa, proof of residence or employment, and tax or other paperwork as required locally.
      </p>

      <p>
        This is a general overview. Laws and policies change; always rely on up-to-date local regulations and professional advice before making a purchase.
      </p>
    </GuideLayout>
  );
}

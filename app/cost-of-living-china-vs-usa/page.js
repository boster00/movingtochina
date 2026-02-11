import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "Cost of Living: China vs USA – Moving to China",
  description:
    "Compare housing, food, transport, and daily expenses in China and the United States for people considering a move.",
  canonicalUrlRelative: "/cost-of-living-china-vs-usa",
});

export default function CostOfLivingChinaVsUsaPage() {
  return (
    <GuideLayout
      title="Cost of Living: China vs USA"
      description="A broad comparison of everyday costs in China and the US to help you plan a move. Actual costs depend on city and lifestyle."
    >
      <h2>Why comparison is tricky</h2>
      <p>
        Costs vary a lot by city in both countries (e.g. Shanghai vs. a small Chinese city; New York vs. a US midwestern town). 
        Currency movement and inflation also affect numbers. Use this as a general reference, not a fixed budget.
      </p>

      <h2>Housing</h2>
      <p>
        In major Chinese cities (Beijing, Shanghai, Shenzhen), rent for a decent one-bedroom apartment can be significant—often comparable to or lower than in expensive US cities, but not “cheap.” 
        Smaller cities and towns are usually cheaper. Utilities (electricity, water, gas, internet) are often modest by US standards. 
        Security deposits and agency fees are common when renting in China.
      </p>

      <h2>Food</h2>
      <p>
        Eating locally—street food, canteens, local restaurants—is often much cheaper than in the US. 
        Groceries and Western-style or imported goods can be pricier. Dining out at mid-range or upscale places in big cities can approach US big-city prices.
      </p>

      <h2>Transport</h2>
      <p>
        Public transit (metro, buses) in Chinese cities is generally affordable. 
        Taxis and ride-hailing (Didi) are usually cheaper than in most US cities. 
        Owning a car in China can be expensive (license plates, fuel, parking).
      </p>

      <h2>Healthcare and other</h2>
      <p>
        Public healthcare in China is often low-cost for basic care, but quality and language can be issues; many expats use private or international clinics, which are more expensive. 
        Schooling, if you use international schools, can be a major expense. 
        Phone and internet plans are typically inexpensive.
      </p>

      <h2>Takeaway</h2>
      <p>
        Many people find that a middle-class or expat lifestyle in a big Chinese city can be similar in total cost to a mid-tier US city, with savings on some items (local food, transport) and higher costs elsewhere (imported goods, international schools). 
        Research your specific city and situation and update figures regularly.
      </p>
    </GuideLayout>
  );
}

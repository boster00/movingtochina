import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "How to Move to China – Moving to China",
  description:
    "Steps, paperwork, and planning for US citizens relocating to China. Visa, documents, and what to do before you go.",
  canonicalUrlRelative: "/how-to-move-to-china",
});

export default function HowToMoveToChinaPage() {
  return (
    <GuideLayout
      title="How to Move to China"
      description="A practical overview of steps and paperwork for US citizens planning to relocate to China."
    >
      <h2>Before you go</h2>
      <p>
        Moving to China from the US involves visas, document prep, and often a job or school placement. 
        Start by deciding your purpose (work, study, business, or family) so you can choose the right visa type and gather the right paperwork.
      </p>

      <h2>Key steps</h2>
      <ul>
        <li><strong>Choose your visa type</strong> — Work (Z), business (M), student (X), or other. Requirements differ by category.</li>
        <li><strong>Get your documents</strong> — Valid US passport (usually 6+ months), passport photos, and any invitation or employment letters required for your visa.</li>
        <li><strong>Apply for a Chinese visa</strong> — Typically at a Chinese embassy or consulate in the US, or via a visa agency. Allow several weeks for processing.</li>
        <li><strong>Plan housing and finances</strong> — Arrange temporary lodging, understand how you’ll access money (see our WeChat Pay and cost of living guides), and consider health insurance.</li>
        <li><strong>Register after arrival</strong> — Many cities require temporary residence registration with local police within 24–72 hours; your landlord or employer can help.</li>
      </ul>

      <h2>Important notes</h2>
      <p>
        Rules and processing times change. Always use the latest information from the Chinese embassy or consulate that will issue your visa, and confirm requirements with your employer or school if applicable.
      </p>
    </GuideLayout>
  );
}

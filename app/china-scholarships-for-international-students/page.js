import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "China Scholarships for International Students – Moving to China",
  description:
    "Programs and how to apply for scholarships to study in China as an international student.",
  canonicalUrlRelative: "/china-scholarships-for-international-students",
});

export default function ChinaScholarshipsPage() {
  return (
    <GuideLayout
      title="China Scholarships for International Students"
      description="An overview of scholarship options for studying in China and how to find and apply for them."
    >
      <h2>Government and institutional scholarships</h2>
      <p>
        China offers a range of scholarships for international students. The best-known is the <strong>Chinese Government Scholarship (CSC)</strong>, 
        which covers tuition, accommodation, living stipend, and insurance for many degree and language programs. 
        Applications are usually submitted through the CSC portal or through a Chinese university that nominates you.
      </p>

      <h2>Other sources</h2>
      <ul>
        <li><strong>University scholarships</strong> — Many Chinese universities offer their own scholarships or fee waivers for international students. Check each university’s international student office or website.</li>
        <li><strong>Confucius Institute scholarships</strong> — For Chinese language and culture study; often short-term or one-semester programs.</li>
        <li><strong>Provincial and city scholarships</strong> — Some provinces and cities offer scholarships to attract international students; requirements and amounts vary.</li>
      </ul>

      <h2>Application basics</h2>
      <p>
        Requirements typically include a valid passport, academic transcripts, recommendation letters, a study plan or personal statement, and sometimes a health certificate. 
        For CSC, you often need to secure admission or pre-admission from a Chinese university first, then apply for the scholarship. 
        Deadlines are usually in the first few months of the year for programs starting in the fall.
      </p>

      <h2>Where to look</h2>
      <p>
        Start with the official <strong>CSC (China Scholarship Council)</strong> website and the international admissions pages of universities you’re interested in. 
        Confirm deadlines and required documents each year, as they can change.
      </p>
    </GuideLayout>
  );
}

import { getSEOTags } from "@/libs/seo";
import GuideLayout from "@/components/GuideLayout";

export const metadata = getSEOTags({
  title: "WeChat Pay for Foreigners – Moving to China",
  description:
    "How to set up and use WeChat Pay as a foreigner, including linking international cards and alternatives.",
  canonicalUrlRelative: "/wechat-pay-for-foreigners",
});

export default function WeChatPayForForeignersPage() {
  return (
    <GuideLayout
      title="WeChat Pay for Foreigners"
      description="Using WeChat Pay in China as a foreign national—what’s possible without a Chinese bank account and how to get started."
    >
      <h2>Why WeChat Pay matters in China</h2>
      <p>
        WeChat Pay is widely used for day-to-day spending in China—street vendors, shops, taxis, and utilities often prefer or only accept mobile payments. 
        Having it (or Alipay) makes daily life much easier.
      </p>

      <h2>WeChat Pay with a foreign card</h2>
      <p>
        WeChat has expanded support for linking international credit and debit cards. You can often add a non-Chinese card in the WeChat Pay section and use it in supported scenarios. 
        Limits and acceptance may apply; not every merchant supports foreign cards. Check the latest in the WeChat app (Me → Pay → Wallet → Add card).
      </p>

      <h2>Full setup with a Chinese bank account</h2>
      <p>
        For full WeChat Pay functionality (including receiving money and fewer limits), you typically need a Chinese bank account and a Chinese phone number. 
        Opening an account usually requires a passport, visa, and sometimes proof of address or employment. 
        Bank policies vary; check with a major bank (e.g. ICBC, Bank of China) in the city where you live.
      </p>

      <h2>Alternatives if you can’t use WeChat Pay</h2>
      <ul>
        <li><strong>Alipay</strong> — Also supports linking some international cards for use in China. Worth trying in the Alipay app.</li>
        <li><strong>Cash</strong> — Still accepted in many places, though less convenient and some venues prefer not to take it.</li>
        <li><strong>Card</strong> — UnionPay, and in some places Visa/Mastercard, are accepted at ATMs and some merchants.</li>
      </ul>

      <p>
        Features and rules for linking foreign cards change. Use the latest instructions in the WeChat and Alipay apps and, if possible, confirm with someone who has recently set it up in China.
      </p>
    </GuideLayout>
  );
}

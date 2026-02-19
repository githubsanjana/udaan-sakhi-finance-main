import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const schemes = [
  {
    titleEn: "PM Jan Dhan Yojana",
    titleHi: "पीएम जन धन योजना",
    eligibilityEn: "Any Indian citizen without a bank account",
    eligibilityHi: "कोई भी भारतीय नागरिक जिसके पास बैंक खाता नहीं है",
    benefitsEn: "Zero balance account, RuPay debit card, ₹2 lakh accident insurance, ₹30,000 life insurance",
    benefitsHi: "शून्य शेष खाता, RuPay डेबिट कार्ड, ₹2 लाख दुर्घटना बीमा, ₹30,000 जीवन बीमा",
    howToEn: "Visit nearest bank branch with Aadhaar card and a passport-size photo",
    howToHi: "आधार कार्ड और पासपोर्ट साइज फोटो के साथ निकटतम बैंक शाखा में जाएं",
  },
  {
    titleEn: "Sukanya Samriddhi Yojana",
    titleHi: "सुकन्या समृद्धि योजना",
    eligibilityEn: "Parents of girl child below 10 years",
    eligibilityHi: "10 वर्ष से कम उम्र की बालिका के माता-पिता",
    benefitsEn: "High interest rate (~8%), tax benefits under 80C, matures when girl turns 21",
    benefitsHi: "उच्च ब्याज दर (~8%), 80C के तहत कर लाभ, बालिका 21 वर्ष की होने पर परिपक्व",
    howToEn: "Open account at any post office or authorized bank with birth certificate",
    howToHi: "जन्म प्रमाण पत्र के साथ किसी भी डाकघर या अधिकृत बैंक में खाता खोलें",
  },
  {
    titleEn: "Self Help Group (SHG) Loans",
    titleHi: "स्वयं सहायता समूह (SHG) ऋण",
    eligibilityEn: "Women members of registered SHGs",
    eligibilityHi: "पंजीकृत SHG की महिला सदस्य",
    benefitsEn: "Low interest loans, no collateral needed, builds credit history, group support",
    benefitsHi: "कम ब्याज ऋण, कोई गारंटी नहीं, क्रेडिट इतिहास बनाता है, समूह सहायता",
    howToEn: "Join or form an SHG in your village, maintain regular savings, apply through the group",
    howToHi: "अपने गांव में SHG में शामिल हों या बनाएं, नियमित बचत बनाए रखें, समूह के माध्यम से आवेदन करें",
  },
  {
    titleEn: "PM Mudra Loan",
    titleHi: "पीएम मुद्रा ऋण",
    eligibilityEn: "Small business owners and entrepreneurs",
    eligibilityHi: "छोटे व्यापार मालिक और उद्यमी",
    benefitsEn: "Loans up to ₹10 lakh without collateral in 3 categories: Shishu, Kishore, Tarun",
    benefitsHi: "3 श्रेणियों में बिना गारंटी ₹10 लाख तक का ऋण: शिशु, किशोर, तरुण",
    howToEn: "Apply at any bank, NBFC, or MFI with business plan and identity proof",
    howToHi: "व्यवसाय योजना और पहचान प्रमाण के साथ किसी भी बैंक, NBFC या MFI में आवेदन करें",
  },
];

const SchemesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("Government Schemes", "सरकारी योजनाएं")}</h1>
          <p className="text-primary-foreground/80 mt-1">{t("Financial schemes for women empowerment", "महिला सशक्तिकरण के लिए वित्तीय योजनाएं")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {i + 1}
                </span>
                {t(scheme.titleEn, scheme.titleHi)}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">{t("Eligibility", "पात्रता")}</p>
                  <p className="text-sm text-foreground/80">{t(scheme.eligibilityEn, scheme.eligibilityHi)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">{t("Benefits", "लाभ")}</p>
                  <p className="text-sm text-foreground/80">{t(scheme.benefitsEn, scheme.benefitsHi)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-wide">{t("How to Apply", "कैसे आवेदन करें")}</p>
                  <p className="text-sm text-foreground/80">{t(scheme.howToEn, scheme.howToHi)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;

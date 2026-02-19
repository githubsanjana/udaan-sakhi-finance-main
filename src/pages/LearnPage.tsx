import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, CheckCircle, Landmark, Smartphone, TrendingUp, AlertTriangle } from "lucide-react";

const categories = [
  { id: "banking", iconEn: "Banking Basics", iconHi: "बैंकिंग मूल बातें", icon: Landmark },
  { id: "saving", iconEn: "Saving & Budgeting", iconHi: "बचत और बजट", icon: BookOpen },
  { id: "digital", iconEn: "Digital Payments", iconHi: "डिजिटल भुगतान", icon: Smartphone },
  { id: "loans", iconEn: "Loan Awareness", iconHi: "ऋण जागरूकता", icon: AlertTriangle },
  { id: "investment", iconEn: "Investment Basics", iconHi: "निवेश मूल बातें", icon: TrendingUp },
];

const lessonsData: Record<string, { titleEn: string; titleHi: string; contentEn: string; contentHi: string }[]> = {
  banking: [
    { titleEn: "Opening a Bank Account", titleHi: "बैंक खाता खोलना", contentEn: "Learn how to open a savings account with simple documents like Aadhaar card. A bank account helps you save money safely and receive government benefits directly.", contentHi: "जानें कि आधार कार्ड जैसे सरल दस्तावेजों से बचत खाता कैसे खोलें। बैंक खाता आपको सुरक्षित रूप से पैसे बचाने और सीधे सरकारी लाभ प्राप्त करने में मदद करता है।" },
    { titleEn: "Using an ATM", titleHi: "ATM का उपयोग", contentEn: "ATM machines let you withdraw money anytime. Insert your debit card, enter your 4-digit PIN, select the amount, and collect your cash. Always keep your PIN secret.", contentHi: "ATM मशीनें आपको कभी भी पैसे निकालने देती हैं। अपना डेबिट कार्ड डालें, 4 अंकों का PIN दर्ज करें, राशि चुनें, और अपना पैसा लें। हमेशा अपना PIN गुप्त रखें।" },
    { titleEn: "Reading Your Passbook", titleHi: "पासबुक पढ़ना", contentEn: "Your passbook shows all money deposited and withdrawn. Regular passbook updates help you track your savings and detect any unauthorized transactions.", contentHi: "आपकी पासबुक सभी जमा और निकाले गए पैसे दिखाती है। नियमित पासबुक अपडेट आपकी बचत को ट्रैक करने और किसी भी अनधिकृत लेनदेन का पता लगाने में मदद करते हैं।" },
  ],
  saving: [
    { titleEn: "Why Saving Matters", titleHi: "बचत क्यों महत्वपूर्ण है", contentEn: "Saving even small amounts regularly can help you handle emergencies, educate your children, and build a secure future for your family.", contentHi: "नियमित रूप से छोटी राशि की बचत भी आपको आपातकालीन स्थितियों से निपटने, बच्चों को शिक्षित करने और परिवार के लिए सुरक्षित भविष्य बनाने में मदद कर सकती है।" },
    { titleEn: "Creating a Monthly Budget", titleHi: "मासिक बजट बनाना", contentEn: "List your income and expenses. Separate needs (food, medicine) from wants (new clothes). Try to save at least 10% of your income each month.", contentHi: "अपनी आय और खर्चों की सूची बनाएं। जरूरतों (भोजन, दवा) को इच्छाओं (नए कपड़े) से अलग करें। हर महीने अपनी आय का कम से कम 10% बचाने का प्रयास करें।" },
  ],
  digital: [
    { titleEn: "UPI Payments Made Easy", titleHi: "UPI भुगतान आसान बनाया", contentEn: "UPI lets you send money directly from your phone. Use apps like Google Pay or PhonePe. Just enter the UPI ID or scan QR code to pay instantly.", contentHi: "UPI आपको अपने फोन से सीधे पैसे भेजने देता है। Google Pay या PhonePe जैसे ऐप्स का उपयोग करें। तुरंत भुगतान करने के लिए UPI ID दर्ज करें या QR कोड स्कैन करें।" },
    { titleEn: "Staying Safe from Fraud", titleHi: "धोखाधड़ी से सुरक्षित रहें", contentEn: "Never share your OTP, PIN, or password with anyone. No bank will ever call and ask for these details. If in doubt, visit your bank branch.", contentHi: "अपना OTP, PIN या पासवर्ड कभी किसी के साथ साझा न करें। कोई भी बैंक कभी कॉल करके ये विवरण नहीं मांगेगा। संदेह होने पर अपनी बैंक शाखा में जाएं।" },
  ],
  loans: [
    { titleEn: "Understanding Interest Rates", titleHi: "ब्याज दरों को समझना", contentEn: "Interest is the extra amount you pay when borrowing money. Lower interest rates mean you pay less. Always compare rates before taking a loan.", contentHi: "ब्याज वह अतिरिक्त राशि है जो आप पैसे उधार लेते समय चुकाते हैं। कम ब्याज दरों का मतलब है कि आप कम भुगतान करते हैं। ऋण लेने से पहले हमेशा दरों की तुलना करें।" },
    { titleEn: "Avoiding Debt Traps", titleHi: "कर्ज के जाल से बचें", contentEn: "Avoid taking loans from local moneylenders with very high interest. Use bank loans or government schemes with fair interest rates instead.", contentHi: "बहुत अधिक ब्याज वाले स्थानीय साहूकारों से ऋण लेने से बचें। इसके बजाय उचित ब्याज दरों वाले बैंक ऋण या सरकारी योजनाओं का उपयोग करें।" },
  ],
  investment: [
    { titleEn: "Fixed Deposits (FD)", titleHi: "सावधि जमा (FD)", contentEn: "Put your money in a Fixed Deposit to earn guaranteed interest. You can start with as little as ₹1,000. Your money grows safely over time.", contentHi: "गारंटीड ब्याज कमाने के लिए अपना पैसा सावधि जमा में रखें। आप ₹1,000 जितनी कम राशि से शुरू कर सकते हैं। आपका पैसा समय के साथ सुरक्षित रूप से बढ़ता है।" },
    { titleEn: "Recurring Deposits (RD)", titleHi: "आवर्ती जमा (RD)", contentEn: "Save a fixed amount every month in a Recurring Deposit. It's like a piggy bank that also earns interest. Great for building savings habits.", contentHi: "आवर्ती जमा में हर महीने एक निश्चित राशि बचाएं। यह एक गुल्लक की तरह है जो ब्याज भी कमाती है। बचत की आदत बनाने के लिए बढ़िया।" },
  ],
};

const LearnPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("banking");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleComplete = (key: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const lessons = lessonsData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("Learn Finance", "वित्त सीखें")}</h1>
          <p className="text-primary-foreground/80 mt-1">{t("Beginner-friendly financial lessons", "शुरुआती-अनुकूल वित्तीय पाठ")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {t(cat.iconEn, cat.iconHi)}
            </button>
          ))}
        </div>

        {/* Lessons */}
        <div className="space-y-4">
          {lessons.map((lesson, i) => {
            const key = `${activeCategory}-${i}`;
            const isComplete = completed.has(key);
            return (
              <div key={key} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t(lesson.titleEn, lesson.titleHi)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(lesson.contentEn, lesson.contentHi)}</p>
                  </div>
                  <button
                    onClick={() => toggleComplete(key)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all shrink-0 ${
                      isComplete
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    {isComplete ? t("Completed", "पूर्ण") : t("Mark Complete", "पूर्ण करें")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, CheckCircle, XCircle } from "lucide-react";

const quizData = [
  {
    qEn: "What is the minimum balance required for a Jan Dhan account?",
    qHi: "जन धन खाते के लिए न्यूनतम शेष राशि क्या है?",
    options: [{ en: "₹0", hi: "₹0" }, { en: "₹500", hi: "₹500" }, { en: "₹1000", hi: "₹1000" }, { en: "₹5000", hi: "₹5000" }],
    answer: 0,
  },
  {
    qEn: "Which app can you use for UPI payments?",
    qHi: "UPI भुगतान के लिए आप किस ऐप का उपयोग कर सकती हैं?",
    options: [{ en: "WhatsApp only", hi: "केवल WhatsApp" }, { en: "Google Pay / PhonePe", hi: "Google Pay / PhonePe" }, { en: "Instagram", hi: "Instagram" }, { en: "Facebook", hi: "Facebook" }],
    answer: 1,
  },
  {
    qEn: "Should you share your OTP with anyone?",
    qHi: "क्या आपको अपना OTP किसी के साथ साझा करना चाहिए?",
    options: [{ en: "Yes, with bank staff", hi: "हां, बैंक कर्मचारियों के साथ" }, { en: "Yes, with friends", hi: "हां, दोस्तों के साथ" }, { en: "Never share with anyone", hi: "कभी किसी के साथ साझा न करें" }, { en: "Only on phone calls", hi: "केवल फोन कॉल पर" }],
    answer: 2,
  },
  {
    qEn: "What does FD stand for?",
    qHi: "FD का पूरा नाम क्या है?",
    options: [{ en: "Fast Deposit", hi: "फास्ट डिपॉजिट" }, { en: "Fixed Deposit", hi: "सावधि जमा" }, { en: "Free Deposit", hi: "फ्री डिपॉजिट" }, { en: "Final Deposit", hi: "फाइनल डिपॉजिट" }],
    answer: 1,
  },
  {
    qEn: "What is the benefit of Sukanya Samriddhi Yojana?",
    qHi: "सुकन्या समृद्धि योजना का क्या लाभ है?",
    options: [{ en: "Free education", hi: "मुफ्त शिक्षा" }, { en: "High interest savings for girls", hi: "बालिकाओं के लिए उच्च ब्याज बचत" }, { en: "Free mobile phone", hi: "मुफ्त मोबाइल फोन" }, { en: "Free food", hi: "मुफ्त भोजन" }],
    answer: 1,
  },
];

const QuizPage = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= quizData.length) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const score = answers.filter((a, i) => a === quizData[i].answer).length;
  const passed = score >= 3;

  if (showResult) {
    return (
      <div className="min-h-screen bg-background">
        <div className="gradient-saffron py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-primary-foreground">{t("Quiz Result", "क्विज़ परिणाम")}</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-card rounded-xl p-8 text-center shadow-lg border border-border">
            <Award className={`w-16 h-16 mx-auto mb-4 ${passed ? "text-accent" : "text-muted-foreground"}`} />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t(`Score: ${score}/${quizData.length}`, `स्कोर: ${score}/${quizData.length}`)}
            </h2>
            <p className="text-muted-foreground mb-6">
              {passed
                ? t("Congratulations! You passed! 🎉", "बधाई हो! आप पास हो गईं! 🎉")
                : t("Keep learning and try again!", "सीखते रहें और फिर से कोशिश करें!")}
            </p>
            {passed && (
              <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent/30">
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{t("Certificate of Completion", "पूर्णता प्रमाणपत्र")}</p>
                <p className="text-lg font-bold text-foreground">UDAAN Finance Sakhi</p>
                <p className="text-sm text-muted-foreground mt-1">{t("Financial Literacy Program", "वित्तीय साक्षरता कार्यक्रम")}</p>
                <Award className="w-8 h-8 mx-auto mt-3 text-gold" />
              </div>
            )}
            <button
              onClick={() => { setCurrent(0); setAnswers([]); setSelected(null); setShowResult(false); }}
              className="mt-6 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              {t("Try Again", "फिर से कोशिश करें")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = quizData[current];

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("Quiz & Certification", "क्विज़ और प्रमाणपत्र")}</h1>
          <p className="text-primary-foreground/80 mt-1">{t(`Question ${current + 1} of ${quizData.length}`, `प्रश्न ${current + 1} / ${quizData.length}`)}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">{t(q.qEn, q.qHi)}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  selected === i
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50"
                }`}
              >
                {t(opt.en, opt.hi)}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="w-full mt-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
          >
            {current + 1 >= quizData.length ? t("Submit", "जमा करें") : t("Next", "अगला")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

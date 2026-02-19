import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HelpCircle, Send, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { qEn: "How do I open a bank account?", qHi: "मैं बैंक खाता कैसे खोलूं?", aEn: "Visit your nearest bank branch with your Aadhaar card and a passport-size photo. The bank will help you open a zero-balance Jan Dhan account for free.", aHi: "अपने आधार कार्ड और पासपोर्ट साइज फोटो के साथ अपनी निकटतम बैंक शाखा में जाएं। बैंक आपको मुफ्त में शून्य-शेष जन धन खाता खोलने में मदद करेगा।" },
  { qEn: "Is UPI safe to use?", qHi: "क्या UPI उपयोग करना सुरक्षित है?", aEn: "Yes, UPI is very safe. Just never share your PIN or OTP with anyone. No bank representative will ever ask for these details over the phone.", aHi: "हां, UPI बहुत सुरक्षित है। बस अपना PIN या OTP कभी किसी के साथ साझा न करें। कोई भी बैंक प्रतिनिधि कभी फोन पर ये विवरण नहीं मांगेगा।" },
  { qEn: "How can I join a Self Help Group?", qHi: "मैं स्वयं सहायता समूह में कैसे शामिल हो सकती हूं?", aEn: "Contact your village Panchayat or the nearest NABARD office. You can also form a new SHG with 10-20 women from your village.", aHi: "अपने गांव की पंचायत या निकटतम नाबार्ड कार्यालय से संपर्क करें। आप अपने गांव की 10-20 महिलाओं के साथ एक नया SHG भी बना सकती हैं।" },
];

const CommunityPage = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mentorName, setMentorName] = useState("");
  const [mentorMessage, setMentorMessage] = useState("");
  const [mentorSubmitted, setMentorSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("Community Support", "सामुदायिक सहायता")}</h1>
          <p className="text-primary-foreground/80 mt-1">{t("Get help and support from the community", "समुदाय से मदद और सहायता प्राप्त करें")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-10">
        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            {t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-lg border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-foreground">{t(faq.qEn, faq.qHi)}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">{t(faq.aEn, faq.aHi)}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ask Question */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t("Ask a Question", "एक प्रश्न पूछें")}</h2>
            {submitted ? (
              <p className="text-accent font-medium">{t("Your question has been submitted! ✅", "आपका प्रश्न जमा हो गया है! ✅")}</p>
            ) : (
              <div className="space-y-3">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("Type your question here...", "अपना प्रश्न यहां लिखें...")}
                />
                <button
                  onClick={() => { if (question.trim()) setSubmitted(true); }}
                  className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" /> {t("Submit", "जमा करें")}
                </button>
              </div>
            )}
          </div>

          {/* Mentor Contact */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t("Contact a Mentor", "एक मेंटर से संपर्क करें")}</h2>
            {mentorSubmitted ? (
              <p className="text-accent font-medium">{t("Message sent to mentor! ✅", "मेंटर को संदेश भेजा गया! ✅")}</p>
            ) : (
              <div className="space-y-3">
                <input
                  value={mentorName}
                  onChange={(e) => setMentorName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("Your Name", "आपका नाम")}
                />
                <textarea
                  value={mentorMessage}
                  onChange={(e) => setMentorMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("Your message to the mentor...", "मेंटर के लिए आपका संदेश...")}
                />
                <button
                  onClick={() => { if (mentorName.trim() && mentorMessage.trim()) setMentorSubmitted(true); }}
                  className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" /> {t("Send", "भेजें")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

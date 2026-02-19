import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", village: "", message: "", suggestions: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.message.trim()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("Contact & Feedback", "संपर्क और प्रतिक्रिया")}</h1>
          <p className="text-primary-foreground/80 mt-1">{t("We'd love to hear from you", "हम आपसे सुनना चाहेंगे")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="bg-card rounded-xl p-6 border border-border">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-2xl mb-2">✅</p>
              <p className="text-lg font-semibold text-foreground">{t("Thank you for your feedback!", "आपकी प्रतिक्रिया के लिए धन्यवाद!")}</p>
              <p className="text-sm text-muted-foreground mt-1">{t("We will get back to you soon.", "हम जल्द ही आपसे संपर्क करेंगे।")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: t("Name", "नाम"), type: "text" },
                { key: "village", label: t("Village / City", "गांव / शहर"), type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-foreground mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t("Message", "संदेश")}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t("Suggestions", "सुझाव")}</label>
                <textarea
                  value={form.suggestions}
                  onChange={(e) => setForm({ ...form, suggestions: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" /> {t("Submit Feedback", "प्रतिक्रिया जमा करें")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

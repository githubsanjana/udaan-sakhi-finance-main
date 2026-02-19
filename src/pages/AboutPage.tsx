import { useLanguage } from "@/contexts/LanguageContext";
import { Users, GraduationCap, Target } from "lucide-react";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-saffron py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground">{t("About the Project", "परियोजना के बारे में")}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl space-y-8">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold text-foreground">{t("Project UDAAN", "प्रोजेक्ट उड़ान")}</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            {t(
              "UDAAN Finance Sakhi is a Mini Engineering Project aimed at empowering rural women in India through financial literacy. The project provides beginner-friendly lessons on banking, savings, digital payments, government schemes, and investment basics — all in Hindi and English.",
              "UDAAN फाइनेंस सखी एक मिनी इंजीनियरिंग प्रोजेक्ट है जिसका उद्देश्य भारत में ग्रामीण महिलाओं को वित्तीय साक्षरता के माध्यम से सशक्त बनाना है। यह प्रोजेक्ट बैंकिंग, बचत, डिजिटल भुगतान, सरकारी योजनाओं और निवेश मूल बातों पर शुरुआती-अनुकूल पाठ प्रदान करता है — सब हिंदी और अंग्रेजी में।"
            )}
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold text-foreground">{t("Institution", "संस्थान")}</h2>
          </div>
          <p className="text-foreground/80 font-medium">Indira Gandhi Delhi Technical University for Women</p>
          <p className="text-muted-foreground text-sm">{t("Mini Engineering Project — Financial Literacy for Rural Women", "मिनी इंजीनियरिंग प्रोजेक्ट — ग्रामीण महिलाओं के लिए वित्तीय साक्षरता")}</p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-bold text-foreground">{t("Team Members", "टीम सदस्य")}</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: "Sanjana Kumari", roll: "4318" },
              { name: "Khushi", roll: "4325" },
              { name: "Seeta Sahu", roll: "4327" },
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {member.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">Roll No: {member.roll}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

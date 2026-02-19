import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-nav text-nav-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕊️</span>
              <div>
                <span className="text-xl font-bold text-primary">UDAAN</span>
                <span className="block text-xs text-saffron-light">Finance Sakhi</span>
              </div>
            </div>
            <p className="text-sm text-nav-foreground/70">
              {t(
                "Empowering rural women with financial literacy and digital awareness.",
                "ग्रामीण महिलाओं को वित्तीय साक्षरता और डिजिटल जागरूकता से सशक्त बनाना।"
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary">{t("Quick Links", "त्वरित लिंक")}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/learn" className="block hover:text-primary transition-colors">{t("Learn Finance", "वित्त सीखें")}</Link>
              <Link to="/schemes" className="block hover:text-primary transition-colors">{t("Government Schemes", "सरकारी योजनाएं")}</Link>
              <Link to="/budget" className="block hover:text-primary transition-colors">{t("Budget Planner", "बजट प्लानर")}</Link>
              <Link to="/quiz" className="block hover:text-primary transition-colors">{t("Quiz & Certificate", "क्विज़ और प्रमाणपत्र")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary">{t("Support", "सहायता")}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/community" className="block hover:text-primary transition-colors">{t("Community", "समुदाय")}</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">{t("About Project", "परियोजना के बारे में")}</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">{t("Contact Us", "संपर्क करें")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary">{t("Project By", "परियोजना द्वारा")}</h4>
            <p className="text-sm text-nav-foreground/70">
              Indira Gandhi Delhi Technical University for Women
            </p>
            <p className="text-sm text-nav-foreground/70 mt-1">Mini Engineering Project</p>
          </div>
        </div>

        <div className="border-t border-nav-foreground/20 mt-8 pt-6 text-center text-sm text-nav-foreground/60">
          © 2026 UDAAN Finance Sakhi. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

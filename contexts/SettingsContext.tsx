"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SiteSettings } from "@/lib/types";

interface SettingsContextType {
  settings: SiteSettings | null;
  loading: boolean;
}

const defaultSettings: SiteSettings = {
  websiteName: "VerveTech",
  logoUrl: "",
  heroHeading: "Apple-Inspired Luxury Tech Accessories Studio",
  heroSubheading: "Precision-engineered titanium cases, MagSafe wireless chargers, and custom 3D device skins built for modern tech enthusiasts.",
  aboutText: "At VerveTech, we design precision-engineered accessories that elevate your daily mobile technology. Built with titanium alloys, aviation-grade aluminum, and optical-grade tempered glass.",
  faqs: [
    { question: "Are VerveTech cases fully MagSafe compatible?", answer: "Yes, every VerveTech case features N52 neodymium magnetic arrays for 15W high-speed MagSafe charging." },
    { question: "How does the custom skin application work?", answer: "Our 3M vinyl skins utilize air-release micro-channels for 100% bubble-free home installation." },
    { question: "What is your warranty policy?", answer: "We back all titanium cases and MagSafe chargers with a 2-year manufacturer replacement warranty." }
  ],
  footerLinks: [],
  socialLinks: { instagram: "https://instagram.com", whatsapp: "https://wa.me/919372889465" },
  contactInfo: { email: "support@vervetech.com", phone: "+91 9372889465", address: "VerveTech Engineering Labs, Tech Park, Pune, India" },
};

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  loading: true,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<SiteSettings | null>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const docRef = doc(db, "siteSettings", "config");
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setSettings({ ...defaultSettings, ...docSnap.data() } as SiteSettings);
        } else {
          setSettings(defaultSettings);
        }
        setLoading(false);
      }, (error) => {
        console.warn("Using default site settings:", error);
        setSettings(defaultSettings);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firestore listener fallback:", err);
      setSettings(defaultSettings);
      setLoading(false);
    }
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);

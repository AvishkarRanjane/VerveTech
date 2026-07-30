"use client";

import { useSettings } from "@/hooks/useSettings";
import { InlineEdit } from "@/components/ui/inline-edit";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection() {
  const { settings } = useSettings();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-16 pb-28">
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>VerveTech Cyber Studio 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6"
            >
              <InlineEdit settingKey="heroHeading" value={settings?.heroHeading || "Apple-Inspired Precision Tech Studio"} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              <InlineEdit settingKey="heroSubheading" value={settings?.heroSubheading || "Precision-engineered titanium cases, MagSafe wireless chargers, and custom 3D skins."} multiline />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/shop">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 group">
                  Explore Accessories
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-border/80 hover:bg-muted">
                  Design Studio
                </Button>
              </Link>
            </motion.div>

            {/* Quality Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/60 flex items-center justify-center lg:justify-start gap-8 text-xs text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Aerospace Titanium Alloy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>15W MagSafe Fast Charge</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel shadow-2xl p-3 border border-primary/20"
            >
              <img
                src="/hero-banner.png"
                alt="VerveTech Flagship Accessories"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/80 shadow-lg">
                <div className="font-bold text-sm text-foreground">Titanium Shield Pro Case</div>
                <div className="text-xs text-primary font-bold">Flagship • N52 MagSafe Array</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

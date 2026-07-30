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
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-background to-background pt-16 pb-28">
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-amber-500/20 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>VerveTech Flagship Collection 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6"
            >
              <InlineEdit settingKey="heroHeading" value={settings?.heroHeading || "Apple-Inspired Luxury Tech Accessories"} />
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
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5 group">
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
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Aerospace Titanium Alloy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" />
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
              className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel shadow-2xl p-3 border border-white/80"
            >
              <img
                src="/hero-banner.png"
                alt="VerveTech Flagship Accessories"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg">
                <div className="font-serif font-bold text-sm text-foreground">Titanium Shield Case</div>
                <div className="text-xs text-amber-700 font-medium">Flagship • N52 MagSafe Array</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

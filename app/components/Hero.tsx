"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Frontend Engineer", "UI/UX Engineer", "AI Builder", "Full-Stack Dev"];
const TAGLINE = "Turning Complex Tasks Into Simple Flows";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(TAGLINE.slice(0, i + 1));
      i++;
      if (i === TAGLINE.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      setTyping(false);
      setTimeout(() => { setRoleIdx(p => (p + 1) % ROLES.length); setTyping(true); }, 400);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#0052CC 1px,transparent 1px),linear-gradient(90deg,#0052CC 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="pointer-events-none absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full bg-[#0052CC] opacity-[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-[#06B6D4] opacity-[0.08] blur-[80px]" />
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 flex items-center gap-2 rounded-full border border-[#0052CC33] bg-[#0052CC0A] px-4 py-1.5 text-[13px] font-medium text-[#0052CC]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052CC] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052CC]" />
        </span>
        Open to Frontend · UI/UX · AI · Full-stack roles
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="mb-3 text-center text-5xl font-semibold tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-7xl">
        Saatwika Matta
      </motion.h1>
      <div className="mb-6 flex items-center gap-3 text-[18px] sm:text-[22px]">
        <span className="text-[#0052CC]/40">—</span>
        <AnimatePresence mode="wait">
          {typing && (
            <motion.span key={ROLES[roleIdx]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="font-medium text-[#06B6D4]">
              {ROLES[roleIdx]}
            </motion.span>
          )}
        </AnimatePresence>
        <span className="text-[#0052CC]/40">—</span>
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-10 max-w-xl text-center text-[17px] leading-relaxed text-[#555]">
        {displayed}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#06B6D4] align-middle h-[1.1em]" />
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex flex-col items-center gap-3 sm:flex-row">
        <a href="#projects" className="rounded-full bg-[#0052CC] px-7 py-3 text-[15px] font-semibold text-white transition hover:bg-[#003ea8]">See my work</a>
        <a href="mailto:saatwikamattawork23@gmail.com" className="rounded-full border border-[#0052CC44] px-7 py-3 text-[15px] font-medium text-[#0052CC] transition hover:bg-[#0052CC0A]">Get in touch</a>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-12 flex flex-wrap justify-center gap-2 px-6">
        {["React", "Next.js", "TypeScript", "n8n", "OpenAI API", "Figma", "WCAG 2.1 AA"].map(s => (
          <span key={s} className="rounded-full border border-[#0052CC22] bg-[#0052CC08] px-3 py-1 text-[12px] text-[#0052CC]/60">{s}</span>
        ))}
      </motion.div>
    </section>
  );
}

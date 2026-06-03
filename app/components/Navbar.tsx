"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ROLE_PILLS = [
  "Frontend Engineer",
  "UI/UX Engineer",
  "AI Engineer",
  "Full-Stack Developer",
];

const CONTACT_ITEMS = [
  { label: "Email", value: "saatwikamattawork23@gmail.com", href: "mailto:saatwikamattawork23@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/saatwikamatta", href: "https://linkedin.com/in/saatwikamatta" },
  { label: "GitHub", value: "github.com/saatwikamatta", href: "https://github.com/saatwikamatta" },
  { label: "Phone", value: "857-385-2572", href: "tel:+18573852572" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#0052CC15] bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-[17px] font-semibold tracking-tight text-[#0A0A0A]">
            Saatwika Matta
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#555] transition hover:text-[#0052CC]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-[#0052CC] px-5 py-2 text-[14px] font-semibold text-white transition hover:bg-[#003ea8]"
            >
              Hire me
            </button>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className={`block h-0.5 w-6 bg-[#0052CC] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#0052CC] transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#0052CC] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-[#0052CC15] bg-white/95 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[15px] font-medium text-[#555]"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                  className="rounded-full bg-[#0052CC] px-5 py-2.5 text-[14px] font-semibold text-white"
                >
                  Hire me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#0052CC22] bg-white p-6 shadow-xl"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 text-[#555] hover:text-[#0052CC]"
                aria-label="Close"
              >
                ✕
              </button>

              <Image
                src="/headhsot.png"
                alt="Saatwika Matta"
                width={80}
                height={80}
                className="mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-center text-xl font-semibold text-[#0A0A0A]">Saatwika Matta</h3>
              <p className="mb-3 text-center text-[15px] font-medium text-[#06B6D4]">
                Frontend + UI/UX Engineer
              </p>
              <p className="mb-4 flex items-center justify-center gap-2 text-[13px] text-[#555]">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Typically replies within 24 hours
              </p>

              <div className="mb-5 flex flex-wrap justify-center gap-2">
                {ROLE_PILLS.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-[#0052CC22] bg-[#0052CC08] px-3 py-1 text-[12px] text-[#0052CC]"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="mb-5 space-y-2.5 border-t border-[#0052CC15] pt-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex justify-between gap-4 text-[13px] transition hover:text-[#0052CC]"
                  >
                    <span className="font-medium text-[#0A0A0A]">{item.label}</span>
                    <span className="truncate text-[#555]">{item.value}</span>
                  </a>
                ))}
              </div>

              <a
                href="mailto:saatwikamattawork23@gmail.com"
                className="block w-full rounded-full bg-[#0052CC] py-3 text-center text-[15px] font-semibold text-white transition hover:bg-[#003ea8]"
              >
                Send me an email
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

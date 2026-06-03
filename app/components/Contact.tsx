"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "Send me an email",
    href: "mailto:saatwikamattawork23@gmail.com",
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saatwikamatta",
    primary: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/saatwikamatta",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full border border-[#0052CC33] bg-[#0052CC0A] px-4 py-1 text-[13px] font-medium text-[#0052CC]"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-4 text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl"
        >
          Let us build something great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 text-[17px] leading-relaxed text-[#555]"
        >
          I am actively looking for{" "}
          <span className="font-medium text-[#0052CC]">Frontend</span>,{" "}
          <span className="font-medium text-[#06B6D4]">UI/UX</span>,{" "}
          <span className="font-medium text-[#0052CC]">AI</span>, and{" "}
          <span className="font-medium text-[#0052CC]">Full-stack</span> roles. Whether you
          have an opening or a project in mind, I would love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                link.primary
                  ? "w-full rounded-full bg-[#0052CC] px-8 py-3 text-[15px] font-semibold text-white transition hover:bg-[#003ea8] sm:w-auto"
                  : "w-full rounded-full border border-[#0052CC44] px-8 py-3 text-[15px] font-medium text-[#0052CC] transition hover:bg-[#0052CC0A] sm:w-auto"
              }
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-20 border-t border-[#0052CC15] pt-8 text-[13px] text-[#999]"
        >
          <p>Built with Next.js, Tailwind CSS, and Framer Motion</p>
          <p className="mt-1 font-medium text-[#555]">Saatwika Matta · 2025</p>
        </motion.footer>
      </div>
    </section>
  );
}

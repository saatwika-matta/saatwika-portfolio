"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "6", label: "Production features shipped at Onyva" },
  { value: "70%", label: "Research time saved with FlightSense AI" },
  { value: "30%", label: "User satisfaction boost at Cognizant" },
  { value: "12+", label: "Projects across AI, UX, and Full-Stack" },
];

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "UI/UX",
    skills: ["Figma", "Moqups", "WCAG 2.1 AA", "Usability Testing", "Wireframing"],
  },
  {
    title: "AI & Automation",
    skills: ["n8n", "OpenAI API", "Streamlit", "Python", "LangChain"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "QA & Testing",
    skills: ["Selenium", "TestNG", "Maven", "Jest", "Postman"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["GCP", "Terraform", "GitHub Actions", "CI/CD", "Docker"],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#0052CC33] bg-[#0052CC0A] px-4 py-1 text-[13px] font-medium text-[#0052CC]">
            About
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Building accessible, high-impact products
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-[17px] leading-relaxed text-[#555]">
              I am a Frontend + UI/UX Engineer who ships production-ready React interfaces, designs accessible user experiences, and integrates AI into real workflows. I don&apos;t just write code — I own features end to end, from Figma to deployment.
            </p>
            <p className="mb-4 text-[17px] leading-relaxed text-[#555]">
              I hold an MS in Information Systems from Northeastern University (December 2025), backed by 2+ years of professional experience at Onyva Solutions (Boston) and Cognizant Technology Solutions (Bengaluru) — delivering across full-stack systems, enterprise platforms, and AI-powered tools.
            </p>
            <p className="text-[17px] leading-relaxed text-[#555]">
              Whether the role is Frontend, UI/UX, Full-Stack, or AI Engineering, I bring the same thing: clean architecture, measurable outcomes, and zero rollbacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[#0052CC18] bg-[#0052CC06] p-5 text-center"
              >
                <p className="text-3xl font-semibold text-[#0052CC]">{stat.value}</p>
                <p className="mt-1 text-[13px] leading-snug text-[#555]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xl font-semibold text-[#0A0A0A]"
        >
          Skills & tools
        </motion.h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-[#0052CC15] p-5"
            >
              <h4 className="mb-3 text-[15px] font-semibold text-[#0052CC]">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#0052CC18] bg-[#0052CC06] px-2.5 py-1 text-[12px] text-[#555]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

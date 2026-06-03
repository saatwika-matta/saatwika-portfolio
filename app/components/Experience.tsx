"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Onyva Solutions",
    location: "Boston, MA",
    role: "Full-Stack Software Engineer Intern",
    period: "Jan 2025 - Jun 2025",
    metrics: ["Zero rollbacks", "30% fewer defects", "20% Lighthouse boost"],
    highlights: [
      "Shipped 6 production features on a live booking platform across React/TypeScript, Node.js/Laravel, and PostgreSQL within 2-week Agile cycles with zero rollbacks.",
      "Reduced integration defects by 30% through REST API integrations with OAuth authentication, JSON validation, and consistent error handling.",
      "Improved Lighthouse performance scores by 20% and cut submission errors by 15% through code-splitting, lazy loading, and React memoization.",
      "Accelerated team delivery by 30% using Cursor AI and Claude Code, while establishing GitHub Actions CI/CD pipelines and documenting API contracts.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "GitHub Actions", "Cursor AI"],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Bengaluru, India",
    role: "Software Engineer",
    period: "Jan 2022 - Jul 2023",
    metrics: ["25% rendering efficiency", "30% user satisfaction", "15% faster delivery"],
    highlights: [
      "Built and maintained production features in React.js, JavaScript, HTML5, and CSS3 for OEC Provider 360, an enterprise platform serving tens of thousands of users.",
      "Delivered 25% rendering efficiency improvement through component architecture refactoring and React lifecycle optimization.",
      "Improved user satisfaction by 30% and accelerated feature delivery by 15% across 18 months of Agile/Scrum collaboration with PMs, designers, and QA engineers.",
      "Debugged REST API failures and UI regressions, contributed to code reviews, and reduced cross-team onboarding friction through technical documentation.",
    ],
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Agile/Scrum"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FAFBFC] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#0052CC33] bg-[#0052CC0A] px-4 py-1 text-[13px] font-medium text-[#0052CC]">
            Experience
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Where I have shipped
          </h2>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-[#0052CC22]">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0052CC] bg-white">
                <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
              </span>

              <div className="rounded-2xl border border-[#0052CC18] bg-white p-6 shadow-sm">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[#0A0A0A]">{exp.company}</h3>
                  <span className="text-[13px] text-[#555]">{exp.period}</span>
                </div>
                <p className="mb-1 text-[14px] text-[#555]">
                  {exp.location} · <span className="font-medium text-[#06B6D4]">{exp.role}</span>
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-[#0052CC0A] px-2.5 py-0.5 text-[12px] font-medium text-[#0052CC]"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <ul className="mb-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-[14px] leading-relaxed text-[#555]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#06B6D4]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#0052CC15] px-2 py-0.5 text-[11px] text-[#0052CC]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

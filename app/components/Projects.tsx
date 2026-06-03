"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Category = "All" | "AI" | "Full-Stack" | "UX" | "QA" | "Data";

const FILTERS: Category[] = ["All", "AI", "Full-Stack", "UX", "QA", "Data"];

const PROJECTS = [
  {
    title: "FlightSense",
    category: "AI" as const,
    stack: ["n8n", "OpenAI API", "Streamlit", "Python"],
    metric: "70% less research time",
    link: "https://flightsense-ai-tool-nsu7ey3x3fgrsvhlcfplup.streamlit.app/",
  },
  {
    title: "SlotWise",
    type: "Full-Stack SaaS Tool",
    desc: "Internal booking and scheduling tool where staff add availability, guests book time slots, and admins manage everything from a live dashboard. Built with Next.js 14, Supabase, and Prisma. Saved 6-8 hours of dev time using Cursor AI as a core workflow tool.",
    tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
    metric: "3 roles · 1 unified platform",
    link: "https://slotwise-app.vercel.app",
    github: "https://github.com/saatwika-matta/slotwise",
    badge: "Full-Stack",
    category: "Full-Stack" as const,
    featured: true,
  },
  {
    title: "JobTrackr",
    type: "Full-Stack App",
    desc: "Full-stack job application tracker built with Ruby on Rails MVC architecture. Features complete CRUD functionality with dynamic status tracking (Applied, Interview, Offer, Rejected), color-coded badge system, and RESTful routing with ActiveRecord ORM for PostgreSQL.",
    tags: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "ActiveRecord"],
    metric: "Full CRUD · 4 status stages",
    link: "#",
    github: "https://github.com/saatwika-matta/jobtrackr",
    badge: "Full-Stack",
    category: "Full-Stack" as const,
    featured: false,
  },
  {
    title: "Madison Agent",
    category: "AI" as const,
    stack: ["n8n", "Streamlit", "AI", "Python"],
    metric: "70% less manual research",
  },
  {
    title: "FitVibe",
    category: "Full-Stack" as const,
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    metric: "75% faster load time",
  },
  {
    title: "EduQuest",
    category: "UX" as const,
    stack: ["Figma", "Moqups", "WCAG 2.1 AA", "Usability Testing"],
    metric: "30% better task completion",
    link: "/eduquest",
    linkLabel: "View Case Study",
  },
  {
    title: "Selenium E2E Framework",
    category: "QA" as const,
    stack: ["Java", "Selenium", "TestNG", "Maven"],
    metric: "100% manual effort saved",
  },
  {
    title: "EVRS QA System",
    category: "QA" as const,
    stack: ["Test Plan", "RTM", "TCM", "QA"],
    metric: "100% requirement coverage",
  },
  {
    title: "Online Recruiting System",
    category: "Data" as const,
    stack: ["MySQL", "Power BI", "SQL"],
    metric: "Optimized candidate search",
  },
  {
    title: "COVID-19 Dashboard",
    category: "Data" as const,
    stack: ["Selenium", "Python", "MongoDB", "Pandas"],
    metric: "Real-time tracking",
  },
  {
    title: "Raksha SOS App",
    category: "Full-Stack" as const,
    stack: ["Flutter", "Dart", "Firebase"],
    metric: "Cross-platform iOS and Android",
  },
  {
    title: "Journal Masters",
    category: "Full-Stack" as const,
    stack: ["Java", "JavaFX", "CSS"],
    metric: "50% performance boost",
  },
  {
    title: "Face Mask Detection",
    category: "AI" as const,
    stack: ["Python", "Sklearn", "NumPy"],
    metric: "Real-time detection",
  },
  {
    title: "Seed Quality Detection",
    category: "AI" as const,
    stack: ["Python", "TensorFlow", "Keras", "CNN"],
    metric: "Real-time quality assessment",
  },
];

const INITIAL_COUNT = 6;

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <section id="projects" className="bg-[#FAFBFC] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#0052CC33] bg-[#0052CC0A] px-4 py-1 text-[13px] font-medium text-[#0052CC]">
            Projects
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Selected work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[16px] text-[#555]">
            AI tools, full-stack apps, UX research, QA frameworks, and data systems.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                filter === cat
                  ? "bg-[#0052CC] text-white"
                  : "border border-[#0052CC22] bg-white text-[#555] hover:border-[#0052CC44] hover:text-[#0052CC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col rounded-2xl border border-[#0052CC18] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A]">{project.title}</h3>
                  {"type" in project && project.type && (
                    <p className="mt-0.5 text-[12px] text-[#888]">{project.type}</p>
                  )}
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  {"featured" in project && project.featured && (
                    <span className="rounded-full bg-[#0052CC] px-2 py-0.5 text-[10px] font-semibold text-white">
                      Featured
                    </span>
                  )}
                  <span className="rounded-full bg-[#06B6D414] px-2.5 py-0.5 text-[11px] font-medium text-[#06B6D4]">
                    {"badge" in project && project.badge ? project.badge : project.category}
                  </span>
                </div>
              </div>
              {"desc" in project && project.desc && (
                <p className="mb-3 text-[13px] leading-relaxed text-[#555]">{project.desc}</p>
              )}
              <p className="mb-4 text-[14px] font-medium text-[#0052CC]">{project.metric}</p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {("tags" in project ? project.tags : project.stack)?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#0052CC15] bg-[#0052CC06] px-2 py-0.5 text-[11px] text-[#0052CC]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[14px] font-medium text-[#06B6D4] transition group-hover:text-[#0052CC]"
                  >
                    {project.linkLabel ?? "View project →"}
                  </a>
                ) : (
                  !("github" in project && project.github) && (
                    <span className="text-[14px] text-[#999]">Case study coming soon</span>
                  )
                )}
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-[#555] transition group-hover:text-[#0052CC]"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full border border-[#0052CC44] px-8 py-3 text-[15px] font-medium text-[#0052CC] transition hover:bg-[#0052CC0A]"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

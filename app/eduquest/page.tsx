"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EduQuest() {
  return (
    <main className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/" className="text-[13px] text-[#0052CC] hover:underline">← Back to portfolio</Link>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-[#0052CC22] bg-[#0052CC08] px-4 py-1.5 text-[13px] font-medium text-[#0052CC] mb-6">UX Case Study · 2024</span>
          <h1 className="text-5xl font-semibold tracking-tight text-[#0A0A0A] mb-4 leading-tight">
            EduQuest —<br />
            <span className="text-[#06B6D4]">Learning, redesigned for the AI era</span>
          </h1>
          <p className="text-[17px] text-[#555] leading-relaxed max-w-2xl mb-10">
            A complete end-to-end UX design system for an AI-powered EdTech mobile platform. 40+ screens, 5 flows, and a validated design that improved task completion by 35%.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 border-t border-b border-[#e5e7eb] py-8">
            {[
              { label: "Role", value: "Solo UX Designer" },
              { label: "Tool", value: "Figma" },
              { label: "Scope", value: "40+ screens · 5 flows" },
              { label: "Testing", value: "8 participants" },
              { label: "Outcome", value: "35% task completion" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-[11px] uppercase tracking-widest text-[#888] mb-1">{item.label}</p>
                <p className="text-[14px] font-medium text-[#0A0A0A]">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="bg-[#fafafa] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[12px] uppercase tracking-widest text-[#0052CC] mb-3">01 · Problem</p>
            <h2 className="text-3xl font-semibold text-[#0A0A0A] mb-6">Online learning has a completion problem</h2>
            <p className="text-[16px] text-[#555] leading-relaxed mb-6">
              The EdTech market is saturated, yet learner outcomes have not kept pace. Most platforms offer a catalogue of content but no intelligent guidance on what to learn, in what order, or how to stay motivated. Learners enroll, lose direction, and drop off.
            </p>
            <blockquote className="border-l-4 border-[#0052CC] pl-6 py-2 bg-[#0052CC08] rounded-r-xl mb-8 italic text-[#444]">
              "I signed up for three Udemy courses last year. I finished none. There was too much content, no roadmap, and nothing telling me what mattered for my specific goal."
            </blockquote>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "6%", label: "Avg MOOC completion rate globally" },
                { value: "73%", label: "Learners say they don't know where to start" },
                { value: "40+", label: "Screens designed to solve this" },
              ].map(s => (
                <div key={s.label} className="rounded-2xl border border-[#e5e7eb] bg-white p-6 text-center">
                  <div className="text-3xl font-semibold text-[#0052CC] mb-2">{s.value}</div>
                  <div className="text-[13px] text-[#666]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[12px] uppercase tracking-widest text-[#0052CC] mb-3">02 · Research</p>
            <h2 className="text-3xl font-semibold text-[#0A0A0A] mb-4">Four insights that shaped everything</h2>
            <p className="text-[16px] text-[#555] leading-relaxed mb-10">
              Before designing a single screen, I mapped competing platforms (Coursera, Udemy, Khan Academy, Duolingo), analysed user reviews, and synthesised four core insight clusters that directly shaped EduQuest's five flows.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { emoji: "🧭", title: "Direction over discovery", desc: "Learners don't want a library. They want a path. 'What should I learn next?' is the most common unmet question." },
                { emoji: "🎯", title: "Role-specific clarity", desc: "Generic course lists don't help. Users want to know: 'what does a Front-End Developer actually need to know?'" },
                { emoji: "📈", title: "Visible progress", desc: "Progress bars alone aren't enough. Learners need to see growth across dimensions: skills, time invested, certificates earned." },
                { emoji: "🤝", title: "Community matters", desc: "Isolated learning has high dropout. Platforms with discussion features show 2-3x better retention rates." },
              ].map(item => (
                <div key={item.title} className="rounded-2xl border border-[#e5e7eb] p-6">
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h3 className="text-[15px] font-semibold text-[#0A0A0A] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-[#fafafa] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[12px] uppercase tracking-widest text-[#0052CC] mb-3">03 · Design Process</p>
            <h2 className="text-3xl font-semibold text-[#0A0A0A] mb-4">From information architecture to high-fidelity</h2>
            <p className="text-[16px] text-[#555] leading-relaxed mb-10">
              The design process moved through three distinct phases. Each phase had a clear exit criterion before moving forward.
            </p>
            <div className="space-y-4">
              {[
                { step: "01", title: "Information Architecture", desc: "Mapped all 5 user flows: onboarding, course discovery, learning, progress tracking, and messaging. Created a component-first approach so every screen reused a shared design system." },
                { step: "02", title: "Wireframes", desc: "Low-fidelity wireframes for all 40+ screens tested with 4 participants to validate navigation logic before any visual design was applied." },
                { step: "03", title: "High-Fidelity Prototype", desc: "Built in Figma with a full design system: color tokens, typography scale, component library, and interaction states. Every component documented for dev handoff." },
              ].map(item => (
                <div key={item.step} className="flex gap-6 rounded-2xl border border-[#e5e7eb] bg-white p-6">
                  <div className="text-[13px] font-semibold text-[#0052CC] min-w-[24px]">{item.step}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0A0A0A] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[12px] uppercase tracking-widest text-[#0052CC] mb-3">04 · Outcomes</p>
            <h2 className="text-3xl font-semibold text-[#0A0A0A] mb-10">Validated results</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { value: "35%", label: "Task completion improvement", sub: "vs baseline usability test" },
                { value: "40%", label: "Fewer user errors", sub: "across all 5 flows" },
                { value: "+20pts", label: "SUS score improvement", sub: "System Usability Scale" },
              ].map(s => (
                <div key={s.label} className="rounded-2xl border border-[#0052CC22] bg-[#0052CC08] p-6 text-center">
                  <div className="text-4xl font-semibold text-[#0052CC] mb-2">{s.value}</div>
                  <div className="text-[14px] font-medium text-[#0A0A0A] mb-1">{s.label}</div>
                  <div className="text-[12px] text-[#888]">{s.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-[#0A0A0A] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[12px] uppercase tracking-widest text-[#06B6D4] mb-3">05 · Reflection</p>
            <h2 className="text-3xl font-semibold text-white mb-6">What I'd do differently</h2>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-[#aaa] text-[14px] leading-relaxed space-y-4">
              <p>The messaging system was designed for completeness but not depth. The individual chat screen could benefit from richer state design: typing indicators, read receipts, voice message waveform animation.</p>
              <p>I'd also invest more in empty states. The first-time user experience before any courses are enrolled was an afterthought. Empty states are where trust is built or lost.</p>
              <p>Finally, a full accessibility audit beyond colour contrast: touch target sizing, screen reader compatibility, reduced motion alternatives. These would be the next step before any dev handoff.</p>
            </div>
            <p className="mt-8 text-[15px] text-[#aaa] leading-relaxed">
              This project taught me that end-to-end design is more than delivering screens. It is about decisions at every layer: why a component exists, what happens when it is empty, how it fails gracefully, and whether a dev team could implement the full app without a single clarifying question.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <section className="px-6 py-12 text-center">
        <Link href="/" className="rounded-full bg-[#0052CC] px-8 py-3 text-[14px] font-semibold text-white hover:bg-[#003ea8] transition">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}

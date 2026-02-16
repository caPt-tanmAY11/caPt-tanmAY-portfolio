"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 px-5 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Education<span className="text-[#4ff1f1]">.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mt-2">
            My academic journey so far
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#4ff1f1] via-white/20 to-transparent" />

          {/* ===== ITEM 1 ===== */}
          <TimelineItem
            align="right"
            title="Sardar Patel Institute of Technology, Mumbai"
            subtitle="BTech, Computer Engineering"
            duration="Sep 2024 – Sep 2028"
            extra="CGPA: 9.03"
          />

          {/* ===== ITEM 2 ===== */}
          <TimelineItem
            align="left"
            title="DAV Public School, New Panvel"
            subtitle="Science (PCM)"
            duration="Apr 2012 – Mar 2024"
            extra="Grade: 97.6%"
          />

        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  align,
  title,
  subtitle,
  duration,
  extra,
}: {
  align: "left" | "right";
  title: string;
  subtitle: string;
  duration: string;
  extra: string;
}) {
  const isRight = align === "right";

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative mb-14 sm:mb-20 flex ${
        isRight ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Dot */}
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-[#4ff1f1] rounded-full shadow-[0_0_15px_rgba(79,241,241,0.8)]" />

      {/* Card */}
      <div
        className={`ml-12 sm:ml-0 sm:w-1/2 ${
          isRight ? "sm:pl-12" : "sm:pr-12"
        }`}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-[0_0_30px_rgba(79,241,241,0.08)]">
          <h3 className="text-base sm:text-lg font-semibold">
            {title}
          </h3>

          <p className="text-sm text-[#4ff1f1] mt-1">
            {subtitle}
          </p>

          <p className="text-sm text-white/50 mt-1">
            {duration}
          </p>

          <p className="text-sm text-white/70 mt-3">
            {extra}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
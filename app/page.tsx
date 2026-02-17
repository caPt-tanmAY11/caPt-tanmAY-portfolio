"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import profilePicMain from "../public/profilePicMain.jpg";
import aboutMePic from "@/public/aboutMePic.jpg";
import contactMePic from "@/public/contactMe.jpg";

import ProfileImage from "@/components/profile-image";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import SkillStack from "@/components/skill-stack";
import ProjectCard from "@/components/project-card";

import togethrImg from "@/public/togethr.png";
import portfolioImg from "@/public/portfolio.png";
import EducationSection from "@/components/education-section";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#070512] text-white font-inter overflow-x-hidden">
      {/* ===== Background Glow ===== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[160px] opacity-60 bg-[#2b9f9f]" />
        <div className="absolute top-20 -right-40 h-[28rem] w-[28rem] rounded-full blur-[180px] opacity-50 bg-[#19b4b4]" />
        <div className="absolute bottom-20 left-0.5 h-[30rem] w-[30rem] rounded-full blur-[160px] opacity-40 bg-[#25c7c7]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 w-full pt-28 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* Image (Top on mobile, Right on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="absolute inset-0 rounded-full bg-[#4ff1f1] blur-3xl opacity-20" />
              <ProfileImage src={profilePicMain} size={280} section="header" />
            </motion.div>

            {/* Text (Below image on mobile, Left on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl order-2 lg:order-1 text-center lg:text-left"
            >
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/50 mb-4">
                Full Stack Developer • AI/ML Learner • Community-Driven
                Developer • SPIT CE’28
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Hi, I’m <span className="text-white">Tanmay Vishwakarma</span>
              </h1>

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium text-white/80">
                Building scalable web systems
                <span className="text-[#4ff1f1]">.</span>
              </h2>

              <p className="mt-6 text-white/60 leading-relaxed text-sm sm:text-xl">
                Full-Stack Developer (Next.js, MERN) and AI/ML learner.
              </p>

              <p className="mt-3 text-white/60 leading-relaxed text-sm sm:text-xl">
                I build scalable web applications, explore intelligent systems,
                and share practical insights about tech, growth, and real-world
                learning.
              </p>

              <div className="mt-8 flex items-center sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="auth-form-main-btn inline-flex items-center justify-center h-14 sm:h-16 px-6 sm:px-8 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  View Resume
                </a>

                <Link
                  href="/blogs"
                  className="auth-form-glass-btn inline-flex items-center justify-center h-14 sm:h-16 px-6 sm:px-8 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  View Blogs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section id="about" className="relative z-10 w-full py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-[#4ff1f1] blur-3xl opacity-20" />
              <ProfileImage src={aboutMePic} size={320} section="aboutme" />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_40px_rgba(79,241,241,0.08)]"
            >
              <span className="text-xs uppercase tracking-widest text-[#4ff1f1]">
                About Me
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
                Building scalable systems
                <span className="text-[#4ff1f1]">.</span>
              </h2>

              <div className="mt-6 text-white/60 space-y-5 text-sm sm:text-base leading-relaxed">
                <p className="text-white font-medium">
                  console.log("Hello World!");
                </p>

                <p>
                  Welcome to the codebase of Tanmay Vishwakarma. 💫 I’m a second year
                  Computer Engineering student at SPIT Mumbai with a strong
                  interest in Full-Stack Development and AI/ML.
                </p>

                <p>
                  I enjoy building real-world applications, solving meaningful
                  problems, and turning ideas into working products. My focus is
                  on creating clean frontends, robust backends, and
                  understanding systems end-to-end, not just writing code, but
                  engineering solutions.
                </p>

                <p>
                  Alongside web development, I’m exploring AI & Machine Learning
                  to build smarter, scalable systems. I actively participate in
                  tech communities, attend events, and share simple tech
                  learnings through blogs.
                </p>

                <p className="text-white font-medium">
                  Always curious. Always learning. Always building.
                </p>

                <p className="text-white">
                  Let’s connect and create something meaningful together. 🚀
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex gap-5">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="relative z-10 w-full py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SkillStack />
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="relative z-10 w-full py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-16">
            <div
              className="
          pointer-events-none
          absolute 
          left-1/2 
          top-5 
          h-92 
          w-92 
          bg-[#25c7c7] 
          opacity-40 
          blur-[140px] 
          rounded-full 
          z-0
        "
            />
            Projects<span className="text-[#4ff1f1]">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <ProjectCard
              image={togethrImg}
              title="togethr"
              description="A community-focused platform enabling students and developers to form hackathon teams, find suitable teammates, and collaborate on projects."
              tech={["Next.js", "TanStack Query", "Prisma ORM", "PostgreSQL (Neon)", "Better-auth"]}
              githubUrl="https://github.com/caPt-tanmAY11/togethr-app"
              demoUrl="https://togethr-psi.vercel.app/"
            />

            <ProjectCard
              image={portfolioImg}
              title="Portfolio"
              description="My portfolio website."
              tech={["Next.js", "MongoDB"]}
              githubUrl="https://github.com/caPt-tanmAY11/caPt-tanmAY-portfolio"
              demoUrl="https://capt-tanmay-portfolio.vercel.app/"
            />
          </div>
        </div>
      </section>

      <section id="education">
        <EducationSection />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative z-10 w-full py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image (Top on mobile, Right on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <ProfileImage src={contactMePic} size={300} section="aboutme" />
            </motion.div>

            {/* Form (Below image on mobile, Left on desktop) */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1 
                   backdrop-blur-2xl bg-gradient-to-br 
                   from-white/10 via-white/5 to-transparent 
                   border border-white/10 rounded-3xl 
                   p-8 sm:p-10 space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
                Let’s Build Something
                <span className="text-[#4ff1f1]">.</span>
              </h3>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white 
                     border border-white/15 
                     focus:border-[#4ff1f1]/50 outline-none"
              />

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email Address"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white 
                     border border-white/15 
                     focus:border-[#4ff1f1]/50 outline-none"
              />

              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your Message"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white 
                     border border-white/15 
                     focus:border-[#4ff1f1]/50 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="auth-form-main-btn w-full py-3 rounded-lg 
                     transition hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Soft top gradient */}
      <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="relative backdrop-blur-2xl bg-[#1c1c1d7c] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/80">

            <div>
              <h2 className="text-2xl font-semibold text-white tracking-wide">
                Tanmay<span className="text-[#4ff1f1]">.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-sm">
                Full-Stack Developer & AI/ML enthusiast. Building scalable systems, contributing to projects, and sharing knowledge.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                Explore
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "Projects", href: "/#projects" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Artwork", href: "/artwork" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-white/60 hover:text-white transition"
                    >
                      <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                Connect
              </h3>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://github.com/caPt-tanmAY11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanmay-vishwakarma-a1363a2a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/capt_tanmayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4ff1f1]/40 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="text-white/50">tanmay06lko@gmail.com</li>
                <li className="text-white/50">+91 9321699208</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} <span className="text-white/60">Tanmay Vishwakarma</span>. All rights reserved.
            </p>
            <p className="mt-3 sm:mt-0">
              Built with <span className="text-white/60">🩵</span> & passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
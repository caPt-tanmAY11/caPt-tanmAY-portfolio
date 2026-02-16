"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skill Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Artwork", href: "/artwork" },
];

export default function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="w-full max-w-6xl">
        {/* Floating Container */}
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

          {/* Logo / Name */}
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight">
            <Link href="/">
              Tanmay Vishwakarma
            </Link>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white/70 hover:text-white transition duration-300"
              >
                {item.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 rounded-2xl bg-white/5 backdrop-blur-xl 
              border border-white/10 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
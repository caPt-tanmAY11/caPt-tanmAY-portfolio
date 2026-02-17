"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skill Stack", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Artwork", href: "/artwork" },
];

export default function LandingHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.slice(2));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeHash === href.slice(2);
    }
    return pathname === href;
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 font-inter">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between sm:px-10 px-6 py-4 rounded-2xl
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

          <h1 className="text-lg sm:text-xl font-semibold tracking-tight relative group">
            <Link href="/">
              Tanmay Vishwakarma
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#4ff1f1] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition duration-300 hover:text-white ${
                    active ? "text-white font-medium" : "text-white/70"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#4ff1f1] transition-transform duration-300
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 origin-left"}`
                    }
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

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
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-white/80 hover:text-white transition ${
                        active ? "font-medium text-white" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
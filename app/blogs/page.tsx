"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.jpg";
import blog4 from "@/public/blog4.png";

const articles = [
  {
    title: "The Rise of AI Zombies",
    description:
      "How we slowly stopped thinking for ourselves and started asking AI for everything.",
    image: blog4,
    link: "https://medium.com/@tanmay06lko/the-rise-of-ai-zombies-6632a14076c9",
  },
  {
    title: "At the End, It’s Just About Whether You Tried or Not…",
    description:
      "My story of how I realized that just trying can transform one’s life.",
    image: blog3,
    link: "https://medium.com/@tanmay06lko/at-the-end-its-just-about-whether-you-tried-or-not-613a4acd4712",
  },
  {
    title: "More Than Ethan Hunt: Tom Cruise, the Real Hero in Real Life",
    description:
      "How Tom Cruise isn’t just performing insane stunts - he’s redefining passion, purpose, and what it means to be unstoppable in the real world.",
    image: blog2,
    link: "https://medium.com/illumination/more-than-ethan-hunt-tom-cruise-the-real-hero-in-real-life-4526c7931715",
  },
  {
    title: "The Human Side of Coding: Things They Don’t Teach You in Tutorials",
    description:
      "The mindset, mistakes, and underrated strategies that shape better developers - not just coders",
    image: blog1,
    link: "https://medium.com/illumination/the-human-side-of-coding-things-they-dont-teach-you-in-tutorials-361652798a02",
  },
];

export default function Articles() {
  return (
    <div className="min-h-dvh font-inter flex flex-col auth-bg">
      <div className="pt-16 mt-15 mb-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Blogs<span className="text-[#4ff1f1]">.</span>
        </h1>
      </div>

      <div className="relative flex-1 px-4 pt-6 pb-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col h-full backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden text-white group transition-all duration-300 hover:border-[#4ff1f1]/40"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h2 className="text-lg font-semibold  transition">
                    {article.title}
                  </h2>

                  <p className="text-sm text-white/60 my-3 line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group auth-form-main-btn mt-auto text-white rounded-lg py-2 px-6 font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2 justify-center"
                >
                  Read Blog
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

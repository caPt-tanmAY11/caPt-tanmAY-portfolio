"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import joker1Img from "@/public/artwork/joker1.jpg";
import ssrImg from "@/public/artwork/ssr.jpg";
import joker3Img from "@/public/artwork/joker3.jpg";
import krishna1Img from "@/public/artwork/krishna1.jpg";
import maam1Img from "@/public/artwork/maam1.jpg";
import deadmanImg from "@/public/artwork/deadman.jpeg";
import aqua1Img from "@/public/artwork/aqua1.jpg";
import joker2Img from "@/public/artwork/joker2.jpg";
import maam2Img from "@/public/artwork/maam2.jpg";
import shivaImg from "@/public/artwork/shiva.jpg";
import joker4Img from "@/public/artwork/joker4.jpg";
import venomImg from "@/public/artwork/venom.jpg";
import poseidonImg from "@/public/artwork/poseidon.jpg";
import aqua4Img from "@/public/artwork/aqua4.jpg";
import lionImg from "@/public/artwork/lion.jpg";
import aqua2Img from "@/public/artwork/aqua2.jpg";
import aqua3Img from "@/public/artwork/aqua3.jpg";
import momImg from "@/public/artwork/mom.jpg";

const artworks = [
  { title: "", image: joker1Img },
  { title: "SSR forever 🤍...", image: ssrImg },
  { title: "Why so Serious?", image: joker3Img },

  { title: "श्री कृष्ण सदा सहायते ✨", image: krishna1Img, featured: true },

  { title: "My Chemistry Teacher", image: maam1Img },
  { title: "Deadman", image: deadmanImg },

  { title: "Feel The Stillness of The Screaming Waves 🔱", image: aqua1Img, featured: true },

  { title: "", image: joker2Img },
  { title: "My Maths Teacher", image: maam2Img },
  { title: "हर हर महादेव", image: shivaImg },

  { title: "", image: aqua4Img },
  { title: "We are Venom.", image: venomImg },
  { title: "Lord of the Deep.", image: poseidonImg },
  { title: "A mind as wild as the mane.", image: lionImg },
  { title: "", image: joker4Img },

  { title: "Storm in His Stare.", image: aqua2Img, featured: true },

  { title: "Arms that hold the world. ❤️", image: momImg },
  { title: "", image: aqua3Img },
];

export default function Artwork() {
  return (
    <div className="min-h-dvh font-inter flex flex-col auth-bg">
      <div className="pt-16 mt-15 pb-12 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Artwork<span className="text-[#4ff1f1]">.</span>
        </h1>
      </div>

      <div className="relative flex-1 px-4 pb-50">
        <div className="max-w-7xl mx-auto grid grid-cols-12 auto-rows-[200px] md:auto-rows-[260px] lg:auto-rows-[300px] gap-6">
          {artworks.map((art, index) => {
            const isFeatured =
              art.image === krishna1Img ||
              art.image === aqua1Img ||
              art.image === aqua2Img;

            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`
  relative group rounded-3xl overflow-hidden
  ${
    art.title === "Storm in His Stare."
      ? "col-span-12 md:col-span-8 row-span-1"
      : isFeatured
      ? "col-span-12 md:col-span-8 row-span-2"
      : "col-span-6 md:col-span-4"
  }
`}
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-white text-lg md:text-xl font-semibold translate-y-3 group-hover:translate-y-0 transition duration-300">
                    {art.title}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import pythonImg from "@/public/python.svg";
import javaImg from "@/public/java.svg";
import jsImg from "@/public/javascript.svg";
import tsImg from "@/public/typescript.svg";
import reactImg from "@/public/react.svg";
import htmlImg from "@/public/html.svg";
import cssImg from "@/public/css.svg";
import expressImg from "@/public/express.svg";
import jwtImg from "@/public/jwt.svg";
import mongoImg from "@/public/mongodb.svg";
import mongooseImg from "@/public/mongoose.svg";
import nodeImg from "@/public/nodejs.svg";
import postgresImg from "@/public/postgres.svg";
import redisImg from "@/public/redis.svg";
import reduxImg from "@/public/redux.svg";
import tailwindImg from "@/public/tailwind.svg";
import postmanImg from "@/public/postman.svg";
import figmaImg from "@/public/figma.svg";
import gitImg from "@/public/git.svg";
import cImg from "@/public/c.svg";
import nextImg from "@/public/next.svg";
import tanstackImg from "@/public/tanstack.png";
import framerMotionImg from "@/public/motion.svg";
import githubImg from "@/public/github.svg";
import prismaImg from "@/public/prisma.svg";
import vercelImg from "@/public/vercel.svg";
import supabaseImg from "@/public/supabase.svg";
import neonImg from "@/public/neon.svg";
import compassImg from "@/public/compass.svg";
import mysqlImg from "@/public/mysql.svg";
import betterAuthImg from "@/public/betterauth.svg";
import restImg from "@/public/rest.svg";

const skills = {
  "Programming Languages": [
    { name: "Python", icon: pythonImg },
    { name: "C", icon: cImg },
    { name: "Java", icon: javaImg },
    { name: "JavaScript", icon: jsImg },
    { name: "TypeScript", icon: tsImg },
  ],
  Frontend: [
    { name: "React.js", icon: reactImg },
    { name: "Next.js", icon: nextImg },
    { name: "Redux", icon: reduxImg },
    { name: "TanStack Query", icon: tanstackImg },
    { name: "HTML", icon: htmlImg },
    { name: "CSS", icon: cssImg },
    { name: "Tailwind CSS", icon: tailwindImg },
    { name: "Framer Motion", icon: framerMotionImg },
  ],
  Backend: [
    { name: "Node.js", icon: nodeImg },
    { name: "Express.js", icon: expressImg },
    { name: "REST APIs", icon: restImg },
    { name: "JWT Authentication", icon: jwtImg },
    { name: "Better-auth", icon: betterAuthImg },
  ],
  "Databases & ORM": [
    { name: "MongoDB", icon: mongoImg },
    { name: "PostgreSQL", icon: postgresImg },
    { name: "MySQL", icon: mysqlImg },
    { name: "Redis", icon: redisImg },
    { name: "Prisma ORM", icon: prismaImg },
    { name: "Mongoose ODM", icon: mongooseImg },
  ],
  "Developer Tools & Platforms": [
    { name: "Git", icon: gitImg },
    { name: "GitHub", icon: githubImg },
    { name: "Postman", icon: postmanImg },
    { name: "Figma", icon: figmaImg },
    { name: "Vercel", icon: vercelImg },
    { name: "Neon", icon: neonImg },
    { name: "Supabase", icon: supabaseImg },
    { name: "MongoDB Compass", icon: compassImg },
  ],
};

export default function SkillStack() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Skill Stack<span className="text-[#4ff1f1]">.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mt-3">
            Technologies I work with regularly
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12 sm:space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              
              {/* Category Title */}
              <h3 className="text-base sm:text-lg font-medium text-[#4ff1f1] mb-5 sm:mb-6">
                {category}
              </h3>

              {/* Grid */}
              <div className="
                grid 
                grid-cols-3 
                sm:grid-cols-4 
                md:grid-cols-5 
                lg:grid-cols-6 
                gap-4 
                sm:gap-5 
                md:gap-6
              ">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group
                      aspect-square
                      flex flex-col items-center justify-center
                      backdrop-blur-xl
                      bg-white/5
                      border border-white/10
                      rounded-xl
                      text-[10px] sm:text-xs
                      text-center
                      transition-all duration-300
                      hover:border-[#4ff1f1]/40
                      hover:shadow-[0_0_18px_rgba(79,241,241,0.25)]
                      hover:-translate-y-1
                      p-3 sm:p-4
                    "
                  >
                    {/* Icon Container (Responsive) */}
                    <div className="
                      relative 
                      w-10 h-10 
                      sm:w-12 sm:h-12 
                      md:w-14 md:h-14 
                      lg:w-16 lg:h-16 
                      mb-2 sm:mb-3
                    ">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        sizes="(max-width: 640px) 40px,
                               (max-width: 768px) 48px,
                               (max-width: 1024px) 56px,
                               64px"
                        className="
                          object-contain 
                          opacity-80 
                          group-hover:opacity-100 
                          transition 
                          group-hover:scale-110 
                          duration-300
                        "
                      />
                    </div>

                    {/* Skill Name */}
                    <span className="text-white/70 group-hover:text-white transition leading-tight">
                      {skill.name}
                    </span>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
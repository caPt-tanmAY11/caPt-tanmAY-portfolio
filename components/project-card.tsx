import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  image: any;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        backdrop-blur-2xl
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        border border-white/10
        rounded-3xl
        overflow-hidden
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(79,241,241,0.15)]
      "
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-white">
        <h3 className="text-xl font-semibold group-hover:text-[#4ff1f1] transition">
          {title}
        </h3>

        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                text-xs
                px-3 py-1
                rounded-full
                bg-white/10
                border border-white/10
                text-white/70
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2
              text-sm
              rounded-xl
              bg-white/10
              border border-white/10
              hover:border-[#4ff1f1]/50
              hover:shadow-[0_0_20px_rgba(79,241,241,0.3)]
              transition-all duration-300
            "
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2
              text-sm
              rounded-xl
              bg-[#0d6969] hover:bg-[#118585]
              hover:shadow-[0_0_25px_rgba(79,241,241,0.4)]
              transition-all duration-300
            "
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
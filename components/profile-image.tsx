import Image, { StaticImageData } from "next/image";

interface ProfileImageProps {
  src: string | StaticImageData;
  alt?: string;
  size?: number;
  className?: string;
  section: string;
}

export default function ProfileImage({
  src,
  alt = "Profile Image",
  size = 100,
  className = "",
  section
}: ProfileImageProps) {
  const gap = 7;          // The transparent space
  const ringWidth = 2;    // The white ring thickness

  return (
    <div
      className={className}
      style={{
        width: size + (gap + ringWidth) * 2,
        height: size + (gap + ringWidth) * 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: section == "header" ? "50%" : "10%",
          outline: `${ringWidth}px solid white`,
          outlineOffset: `${gap}px`,
          overflow: "hidden", 
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
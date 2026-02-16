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
        // The container needs to be large enough to show the offset ring
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
          // 1. Create the ring using outline
          outline: `${ringWidth}px solid white`,
          // 2. Push the ring away to create the transparent gap
          outlineOffset: `${gap}px`,
          // Ensure the image itself stays circular
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
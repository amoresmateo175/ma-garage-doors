import Image from "next/image";

interface ServiceImageProps {
  src: string;
  alt: string;
}

export default function ServiceImage({
  src,
  alt,
}: ServiceImageProps) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="w-full object-cover"
      />
    </div>
  );
}
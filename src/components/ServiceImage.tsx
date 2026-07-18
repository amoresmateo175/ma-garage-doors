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

        className="w-full object-cover"

        priority

      />


    </div>

  );

}
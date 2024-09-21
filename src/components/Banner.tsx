import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden">
      <Image
        src="/aleeza.png"
        alt="Aleeza's Style Haven Banner"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;

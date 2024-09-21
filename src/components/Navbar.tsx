'use client';

import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={240}
              height={180}
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Breaking News Ticker */}
      <div className="bg-gray-900 text-yellow-300 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-4 text-lg font-semibold">Enjoy every discount and deal!</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="relative w-32 h-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201-QqaA9RhehdEWlknrk7rBKuYPZEFkXE.png"
            alt="Viththagan"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-slate-900/95 md:bg-transparent shadow-md md:shadow-none`}
        >
          {["About", "Skills", "Projects", "Achievements", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-blue-300 hover:text-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ),
          )}
        </nav>
        <button
          className="md:hidden text-blue-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
}

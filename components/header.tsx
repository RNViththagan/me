"use client";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="flex md:hidden flex-col absolute top-full left-0 right-0 bg-slate-900/95 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
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
            </motion.nav>
          )}
        </AnimatePresence>
        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["About", "Skills", "Projects", "Achievements", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-blue-300 hover:text-blue-100 transition-colors"
              >
                {item}
              </Link>
            ),
          )}
        </motion.div>
        <button
          className="md:hidden text-blue-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IconX className="h-6 w-6" />
          ) : (
            <IconMenu2 className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
}

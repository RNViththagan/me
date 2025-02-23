"use client";

import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useActiveSection } from "@/app/hooks/useActiveSection";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Videos", href: "#videos" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section
  const activeSection = useActiveSection(
    navItems.map((item) => item.name.toLowerCase()),
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const NavLink = ({ href, name }: { href: string; name: string }) => {
    const isActive = activeSection === name.toLowerCase();

    return (
      <Link
        href={href}
        className={`relative px-4 py-2 transition-colors group ${
          isActive ? "text-blue-400" : "text-blue-300 hover:text-blue-100"
        }`}
      >
        {name}
        <motion.span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    );
  };

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/80 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 origin-[0%]"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="relative w-32 h-8 z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201-QqaA9RhehdEWlknrk7rBKuYPZEFkXE.png"
                alt="Viththagan"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.name} {...item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <IconX className="h-6 w-6 text-blue-300" />
                  ) : (
                    <IconMenu2 className="h-6 w-6 text-blue-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed inset-0 z-50 md:hidden flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 transition-colors border border-slate-700/50"
                aria-label="Close menu"
              >
                <IconX className="h-6 w-6 text-blue-300" />
              </button>

              <nav className="w-full max-w-sm mx-auto px-4">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-center text-2xl py-4 transition-colors relative ${
                          activeSection === item.name.toLowerCase()
                            ? "text-blue-400"
                            : "text-blue-300 hover:text-blue-100"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {activeSection === item.name.toLowerCase() && (
                            <motion.span
                              className="inline-block mr-2 w-2 h-2 bg-blue-500 rounded-full"
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                          {item.name}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

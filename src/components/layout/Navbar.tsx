"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { navItemVariant, staggerContainer } from "@/lib/animations";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className={cn(
            "flex h-12 items-center gap-1 rounded-full border px-2 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-background-secondary/80 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md"
          )}
        >
          {/* Name / logo */}
          <Link
            href="/"
            className="flex h-8 items-center rounded-full px-4 text-xs font-bold uppercase tracking-[0.15em] text-text-primary transition-colors hover:text-accent"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Divider */}
          <div className="hidden h-4 w-px bg-white/10 md:block" />

          {/* Desktop nav items */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="pointer"
                className={cn(
                  "relative flex h-8 items-center rounded-full px-3.5 text-[13px] transition-all duration-300",
                  pathname === item.href
                    ? "bg-white/[0.08] text-text-primary"
                    : "text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "h-px w-4 bg-text-primary transition-all duration-300",
                mobileOpen && "translate-y-[3px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-text-primary transition-all duration-300",
                mobileOpen && "-translate-y-[3px] -rotate-45"
              )}
            />
          </button>
        </motion.nav>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.href} variants={navItemVariant}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-2xl font-light text-text-secondary transition-colors hover:text-text-primary",
                      pathname === item.href && "text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

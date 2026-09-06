"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-gray-100"
    >
      <Link href="#" className="font-bold text-sm hover:opacity-70 transition">Bureau Dimanche</Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#projects" className="hover:opacity-70 transition">Réalisations</Link>
        <Link href="#services" className="hover:opacity-70 transition">Services</Link>
        <Link href="#pricing" className="hover:opacity-70 transition">Prix</Link>
      </div>
      <Link href="#contact" className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Contact</Link>
    </motion.nav>
  );
}

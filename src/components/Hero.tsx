"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto" id="hero">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Disponibilités Sept-Oct. 26
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl md:text-8xl font-black tracking-tight mb-8"
        style={{ fontFamily: 'Inter Display, sans-serif' }}
      >
        Votre marque de A à Z.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12"
      >
        Votre stratégie de marque et votre identité visuelle par une ancienne CMO devenue Directrice Artistique.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link href="#" className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all">
          Réserver un appel de 30 minutes
        </Link>
        <span className="text-gray-500 font-medium">+40 clients accompagnés</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 w-full flex justify-center"
      >
         <img src="/images/gLLwnDE5LAQcx2EbBKi7IBY6iV4.jpg" alt="Hero" className="w-full max-w-4xl h-[500px] object-cover rounded-3xl shadow-xl" />
      </motion.div>
    </section>
  );
}

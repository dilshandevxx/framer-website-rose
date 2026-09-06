"use client";
import { motion } from "framer-motion";

const services = [
  "Stratégie de marque", "Identité visuelle", "Refonte graphique", 
  "Brand content", "Motion design", "Illustration", "Marketing & communication"
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white" id="services">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 leading-tight"
        >
          Des services qui font grandir votre entreprise.
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 border border-gray-700 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors cursor-default"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

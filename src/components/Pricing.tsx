"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center"
        >
          Des prix clairs. Des marques qui le sont aussi.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "1. Identité visuelle", price: "3 900 €", duration: "1 mois" },
            { title: "2. Stratégie + identité", price: "7 900 €", duration: "2 mois", highlight: true },
            { title: "3. Stratégie + exécution", price: "16 900 €", duration: "4 mois" }
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-8 rounded-3xl border ${p.highlight ? 'border-black shadow-2xl scale-105' : 'border-gray-200'} flex flex-col`}
            >
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <div className="text-4xl font-black mb-2">{p.price}</div>
              <div className="text-gray-500 font-medium mb-8">Durée : {p.duration}</div>
              <button className={`mt-auto w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${p.highlight ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                Parlons-en
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

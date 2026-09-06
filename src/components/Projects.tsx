"use client";
import { motion } from "framer-motion";

const projects = [
  { name: "Le Comptoir Breton", desc: "Stratégie & identité visuelle", img: "/images/00xyuCxm2OX0UVfx27cmUNCyg88.jpg" },
  { name: "BPA Avocats", desc: "Identité visuelle & Photos", img: "/images/5nEiajaRFNjVBWWlU0FDNIO3c.jpg" },
  { name: "Decléor", desc: "Brand content & édition", img: "/images/kPGda3WwGJpNMvbmAgp6OQVgI.jpg" },
  { name: "Maestro of IT", desc: "Identité visuelle", img: "/images/oS3kRHXtFZmaJRKJreYH7UFG90.png" }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-16"
        >
          Derniers projets
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gray-200">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "Combien de temps dure un projet ?", a: "Les délais dépendent de la complexité. Un projet simple prend 2 à 3 semaines, une identité complète 1 à 2 mois. Je vous donne une estimation précise dès notre premier échange." },
  { q: "Pouvez-vous travailler avec ma marque existante ?", a: "Bien sûr. J'ai l'habitude des marques déjà installées : chaque nouvelle création s'aligne parfaitement sur votre identité et votre style existants." },
  { q: "Qu'est-ce qui rend votre méthode différente ?", a: "La collaboration. Je vous implique à chaque étape, pour que le résultat final reflète vraiment votre vision, enrichie de mon expertise." },
  { q: "Assurez-vous un suivi après le projet ?", a: "Oui. J'assure un accompagnement post-livraison pendant 30 jours : ajustements mineurs et réponses à vos questions. Pour un suivi plus long, nous pouvons mettre en place un abonnement." },
  { q: "Comment gérez-vous la confidentialité et les droits de propriété intellectuelle ?", a: "La confidentialité est essentielle : toutes les informations et tous les détails de projet restent strictement confidentiels. À la livraison, vous détenez l'intégralité des droits de propriété intellectuelle pour 10 ans (durée d'un dépôt de marque en France). Nous pouvons discuter de ces termes selon vos besoins." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16"
        >
          Vos questions jamais sans réponse.
        </motion.h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-xl flex gap-6">
                  <span className="text-gray-400 font-medium">0{i+1}</span>
                  {faq.q}
                </span>
                <span className="text-2xl ml-4 font-light">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 ml-12 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

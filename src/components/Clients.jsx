﻿import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { clientSegments } from '../data/siteContent'

export default function Clients() {
  return (
    <section id="clientes" className="section-shell py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Segmentos"
          title="Especializacao visual para negocios que precisam parecer maiores do que o mercado local costuma entregar."
          description="A Sync adapta linguagem, enquadramento e ritmo para cada contexto comercial, sem cair em videos genericos."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {clientSegments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="glass-panel group rounded-[1.8rem] border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <span className="font-grotesk text-[0.7rem] uppercase tracking-[0.28em] text-emerald-200/80">{item.accent}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


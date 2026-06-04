﻿import React from 'react'
import { Camera, Clapperboard, MonitorPlay, Plane, Sparkles, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteContent'

const icons = {
  Camera,
  Clapperboard,
  Plane,
  Sparkles,
  MonitorPlay,
  Target,
}

export default function Services() {
  return (
    <section id="servicos" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="Servicos"
        title="Do frame inicial ao clique no anuncio: a Sync constroi uma esteira visual completa."
        description="A combinacao entre producao, edicao e distribuicao cria um ecossistema de conteudo forte para marcas locais que desejam crescer com consistencia."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => {
          const Icon = icons[item.icon]

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
              className="glass-panel rounded-[1.8rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/25 to-indigo-500/18 text-white shadow-[0_0_30px_rgba(60,231,116,0.12)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

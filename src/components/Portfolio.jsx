﻿﻿﻿import { Play, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { portfolioItems } from '../data/siteContent'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-shell py-24 sm:py-28">
      <div>
        <SectionHeading
          eyebrow="Portfolio"
          title="Portfolio com estetica de campanha e narrativa que acelera desejo."
          description="Cada preview simula a atmosfera de uma producao entregue pela Sync: premium, comercial e desenhada para destacar marcas locais com aparencia nacional."
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.58, delay: index * 0.05 }}
            className="glass-panel group relative overflow-hidden rounded-[2rem] border border-white/10"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.poster}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                <Play className="h-3.5 w-3.5" />
                Preview
              </div>
            </div>

            <div className="relative p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-grotesk text-[0.68rem] uppercase tracking-[0.28em] text-white/50">{item.segment}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-emerald-100/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  {item.highlight}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

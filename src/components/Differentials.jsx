﻿import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { differentials } from '../data/siteContent'

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-shell py-24 sm:py-28">
      <div className="glass-panel overflow-hidden rounded-[2.5rem] border border-white/10 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Diferenciais"
              title="Visual premium sem enrolacao: estrutura, velocidade e estrategia na mesma entrega."
              description="O diferencial da Sync esta na sincronia entre tecnica audiovisual e objetivo comercial. O cliente recebe uma producao bonita, funcional e pronta para campanha."
            />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-indigo-500/10 p-6"
            >
              <p className="font-grotesk text-[0.7rem] uppercase tracking-[0.28em] text-white/50">Modo de operacao</p>
              <p className="mt-4 text-4xl font-semibold text-white sm:text-5xl">4K + estrategia + conversao</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                Cada projeto nasce com foco em posicionamento, retencao visual e objetivo de negocio. Isso encurta o caminho entre conteudo bonito e resultado comercial.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-black/25 p-5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

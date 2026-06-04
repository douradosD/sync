﻿import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteContent'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Quando a imagem sobe de nivel, o mercado percebe antes mesmo da proposta comercial."
        description="Os feedbacks abaixo mostram como um visual bem dirigido muda reputacao, desejo e resposta do publico em poucos dias."
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="glass-panel relative rounded-[2rem] border border-white/10 p-6"
          >
            <Quote className="absolute right-6 top-6 h-7 w-7 text-white/14" />
            <div className="flex gap-1 text-emerald-200">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 text-sm leading-8 text-white/72">
              <span aria-hidden="true">&ldquo;</span>
              {item.quote}
              <span aria-hidden="true">&rdquo;</span>
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-base font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm text-white/48">{item.company}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

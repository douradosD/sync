﻿import { ArrowRight, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { contact, heroStats } from '../data/siteContent'

const heroVideo = '/videos/traffic-stream.mp4'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-45 mask-fade-bottom"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.svg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.18),transparent_28%),linear-gradient(180deg,rgba(5,5,5,0.3)_0%,rgba(5,5,5,0.76)_40%,#050505_100%)]" />
      </div>

      <div className="section-shell relative flex min-h-screen items-center pt-28 pb-16 sm:pt-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="section-tag">Premium visual storytelling</span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-[5.5rem]">
              Videos que fazem a sua marca parecer grande <span className="text-gradient">antes da primeira visita.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              A Sync Produtora cria filmes, reels e campanhas para concessionarias, clinicas, lojas, restaurantes e empresas que querem vender com uma imagem muito acima da media.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="button-primary">
                Solicitar orcamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#portfolio" className="button-secondary">
                Ver portfolio
                <PlayCircle className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                  className="glass-panel rounded-3xl border border-white/10 px-5 py-5"
                >
                  <p className="font-grotesk text-xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/56">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
            className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-indigo-500/15" />
            <div className="relative">
              <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-white/50">
                <span>Campanhas em movimento</span>
                <span>4K delivery</span>
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-black/40 p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/45">Ritmo</p>
                    <p className="mt-3 text-lg font-semibold text-white">Edicao precisa</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">Cortes desenhados para reter atencao, acelerar percepcao e gerar clique.</p>
                  </div>
                  <div className="rounded-[1.3rem] border border-emerald-400/20 bg-gradient-to-b from-emerald-400/15 to-indigo-500/10 p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/45">Direcao</p>
                    <p className="mt-3 text-lg font-semibold text-white">Imagem premium</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">Luz, enquadramento e movimento para elevar valor percebido em segundos.</p>
                  </div>
                </div>
                <div className="mt-4 rounded-[1.3rem] border border-white/10 bg-black/30 p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/45">Sincronia entre criacao e performance</p>
                  <p className="mt-3 text-base leading-7 text-white/70">
                    Cada peca nasce pensando em branding, autoridade e conversao. O resultado nao para na estetica: ele prepara o terreno para vender.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Facebook, Instagram, MessageCircleMore, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { brandVideo, contact } from '../data/siteContent'

export default function BrandVideo() {
    const [videoUnavailable, setVideoUnavailable] = useState(false)
    const showVideo = Boolean(brandVideo.localVideo) && !videoUnavailable
    const socialLinks = [
        { label: 'Instagram', href: contact.instagramUrl, icon: Instagram },
        { label: 'Facebook', href: contact.facebookUrl, icon: Facebook },
        { label: 'WhatsApp', href: contact.whatsappUrl, icon: MessageCircleMore },
    ]

    return (
        <section id="video-explicativo" className="section-shell py-24 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <SectionHeading eyebrow={brandVideo.eyebrow} title={brandVideo.title} description={brandVideo.description} />

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="glass-panel overflow-hidden rounded-[2.2rem] border border-white/10"
                >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        {showVideo ? (
                            <video
                                className="h-full w-full object-contain object-top"
                                controls
                                preload="metadata"
                                playsInline
                                poster={brandVideo.poster}
                                onError={() => setVideoUnavailable(true)}
                            >
                                <source src={brandVideo.localVideo} type="video/mp4" />
                            </video>
                        ) : (
                            <>
                                <img src={brandVideo.poster} alt="Preview do video explicativo da Sync Produtora" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-[0_0_40px_rgba(79,92,247,0.35)] backdrop-blur-md">
                                        <PlayCircle className="h-10 w-10" />
                                    </span>
                                </div>
                            </>
                        )}

                    </div>

                    <div className="grid gap-6 p-6 sm:p-7">
                        <div>
                            <p className="font-grotesk text-[0.68rem] uppercase tracking-[0.28em] text-emerald-200/80">Melhor posicao na pagina</p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">Anuncio</h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-[1.2rem] border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-400/14"
                                    >
                                        <div className="flex items-center gap-2 text-emerald-200">
                                            <Icon className="h-4 w-4" />
                                            <span className="text-sm font-medium text-white/90">{item.label}</span>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

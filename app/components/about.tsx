'use client'

import { School, GraduationCap, Briefcase, Zap, Target } from 'lucide-react'
import React from 'react'

const points = [
  {
    icon: GraduationCap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    label: "Pour les étudiants & lycéens",
    text: "Trouvez le stage idéal en quelques clics grâce à un matching intelligent basé sur votre filière et votre niveau d'études.",
  },
  {
    icon: Briefcase,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    label: "Pour les entreprises",
    text: "Accédez à une base de jeunes talents motivés, publiez vos offres et gérez vos candidatures depuis un seul espace.",
  },
  {
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    label: "Expérience fluide & rapide",
    text: "De l'inscription à la mise en relation, chaque étape est pensée pour aller à l'essentiel sans friction.",
  },
  {
    icon: Target,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    label: "Notre mission",
    text: "Faciliter l'insertion professionnelle des jeunes et connecter les entreprises aux talents de demain.",
  },
]

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 py-20 min-h-[80vh] overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl translate-x-1/2 -translate-y-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl -translate-x-1/2 translate-y-1/4" />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <School size={13} />
          À propos
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Qui sommes-{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
            nous ?
          </span>
        </h2>
        <p className="mt-4 text-base-content/50 max-w-xl mx-auto text-sm sm:text-base">
          TalentBoost est la plateforme qui réunit étudiants, lycéens et entreprises autour d'une même ambition : l'insertion professionnelle réussie.
        </p>
      </div>

      {/* Main layout */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center">

        {/* ── IMAGE (inchangée) ── */}
        <div className="md:w-1/2 flex justify-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-3xl p-2.5">
            <img
              src="/img-pl.avif"
              alt="About TalentBoost"
              className="w-full max-w-md h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* ── TEXTE ── */}
        <div className="md:w-1/2 flex flex-col gap-4">

          {/* Brand header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center">
              <School size={22} className="text-amber-400" />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              TalentBoost
            </span>
          </div>

          <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
            Nous révolutionnons l'accès aux stages en Afrique en créant un lien direct et intelligent
            entre les jeunes en formation et les entreprises qui recrutent.
          </p>

          {/* Points list */}
          <ul className="flex flex-col gap-3 mt-2">
            {points.map((p, i) => {
              const Icon = p.icon
              return (
                <li key={i} className="flex items-start gap-4 group">
                  <div className={`shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center ${p.bg} ${p.color} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className={`text-sm font-bold ${p.color}`}>{p.label} — </span>
                    <span className="text-sm text-base-content/65">{p.text}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="flex justify-start mt-4">
            <button className="btn btn-primary btn-sm font-semibold px-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              En savoir plus
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
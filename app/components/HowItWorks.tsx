'use client'

import { ClipboardList, LayoutDashboard, FileSearch, Settings2 } from 'lucide-react'
import React from 'react'

const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Créer un compte",
    description:
      "Inscrivez-vous gratuitement en quelques minutes. Choisissez votre profil (étudiant, lycéen ou entreprise) et accédez à votre espace personnel.",
    gradient: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/30",
    iconBg: "bg-amber-400/10 text-amber-400",
    border: "border-amber-400/20",
  },
  {
    step: 2,
    icon: LayoutDashboard,
    title: "Accéder au tableau de bord",
    description:
      "Votre espace centralisé pour tout gérer : profil, candidatures, offres de stage et messages — conçu pour être simple et efficace.",
    gradient: "from-cyan-400 to-sky-500",
    glow: "shadow-cyan-500/30",
    iconBg: "bg-cyan-400/10 text-cyan-400",
    border: "border-cyan-400/20",
  },
  {
    step: 3,
    icon: FileSearch,
    title: "Publier & Postuler",
    description:
      "Les entreprises publient leurs offres, les étudiants et lycéens postulent en un clic. Le matching est rapide, fluide et transparent.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/30",
    iconBg: "bg-emerald-400/10 text-emerald-400",
    border: "border-emerald-400/20",
  },
  {
    step: 4,
    icon: Settings2,
    title: "Optimiser votre profil",
    description:
      "Personnalisez vos préférences, affinez vos compétences et augmentez vos chances d'être sélectionné grâce aux outils intégrés.",
    gradient: "from-violet-400 to-purple-500",
    glow: "shadow-violet-500/30",
    iconBg: "bg-violet-400/10 text-violet-400",
    border: "border-violet-400/20",
  },
]

const HowItWorks = () => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">

        {/* ── HEADING ── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Utiliser{" "}
            <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              TalentBoost
            </span>{" "}
            en 4 étapes
          </h2>
          <p className="mt-4 text-base-content/60 max-w-xl mx-auto text-sm sm:text-base">
            Une plateforme pensée pour connecter facilement étudiants, lycéens et entreprises.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className={`
                  group relative flex flex-col gap-4 p-6 rounded-3xl
                  bg-base-100 border ${item.border}
                  hover:shadow-2xl ${item.glow}
                  transition-all duration-300 hover:-translate-y-2
                `}
              >
                {/* Step badge */}
                <div className={`
                  absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${item.gradient} text-white text-xs font-black shadow-lg
                `}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center
                  ${item.iconBg}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-extrabold text-lg mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">{item.description}</p>
                </div>

                {/* Bottom gradient line on hover */}
                <div className={`
                  absolute bottom-0 left-6 right-6 h-0.5 rounded-full
                  bg-gradient-to-r ${item.gradient}
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `} />
              </div>
            )
          })}
        </div>

        {/* ── CONNECTOR LINE (desktop only) ── */}
        <div className="hidden xl:flex items-center justify-between w-full max-w-4xl mt-10 px-12 pointer-events-none select-none">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-px bg-gradient-to-r from-amber-400/20 via-cyan-400/20 to-emerald-400/20 mx-2" />
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks

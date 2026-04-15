'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown, UserPlus, ShieldCheck, Clock, Briefcase, GraduationCap, Search } from 'lucide-react'

const faqs = [
  {
    icon: UserPlus,
    question: "Comment créer mon compte sur TalentBoost ?",
    answer:
      "Cliquez sur \"Commencer\" depuis la page d'accueil, choisissez votre profil (étudiant, lycéen ou entreprise), puis remplissez le formulaire d'inscription. En moins de 2 minutes, votre compte est prêt.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: Clock,
    question: "Combien de temps pour que mon compte soit validé ?",
    answer:
      "La validation est instantanée ! Dès votre inscription, vous avez accès à votre tableau de bord sans aucune attente ni vérification manuelle.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: ShieldCheck,
    question: "Ce site est-il sécurisé ?",
    answer:
      "Oui. Vos données sont chiffrées et nous effectuons des audits de sécurité réguliers. Votre mot de passe est haché côté serveur et jamais stocké en clair.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Search,
    question: "Comment les entreprises trouvent-elles les bons candidats ?",
    answer:
      "TalentBoost filtre automatiquement les profils selon la filière, le niveau d'études et la localisation. Les entreprises reçoivent des suggestions pertinentes directement dans leur dashboard.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    icon: GraduationCap,
    question: "Les lycéens peuvent-ils aussi postuler ?",
    answer:
      "Absolument. TalentBoost est conçu pour les lycéens des filières techniques (Terminale, 1ère, 2nde) qui souhaitent décrocher un stage ou une immersion professionnelle.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  {
    icon: Briefcase,
    question: "TalentBoost est-il gratuit pour les entreprises ?",
    answer:
      "L'inscription et la publication d'offres sont gratuites. Des fonctionnalités avancées (mise en avant d'offres, analytics, filtres avancés) seront disponibles dans une version premium.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="relative w-full py-20 px-4 bg-base-200 overflow-hidden">

      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center">

        {/* ── HEADING ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <HelpCircle size={13} />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Questions{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="mt-4 text-base-content/50 max-w-lg mx-auto text-sm sm:text-base">
            Tout ce que vous devez savoir sur TalentBoost, en un seul endroit.
          </p>
        </div>

        {/* ── ACCORDION ── */}
        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, i) => {
            const Icon = faq.icon
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isOpen ? `${faq.border} bg-base-100 shadow-lg` : 'border-base-300 bg-base-100 hover:border-base-content/20'}
                `}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${faq.bg} ${faq.color} transition-transform duration-300 ${isOpen ? 'scale-110' : ''}`}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <span className="flex-1 font-semibold text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-base-content/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Answer — animated height via max-height trick */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <p className="px-5 pb-5 text-sm sm:text-base text-base-content/60 leading-relaxed pl-[4.25rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Faq

'use client'

import React from 'react'

const Cta = () => {
    return (
        <section

            className="min-h-screen flex items-center justify-center text-center px-4"
        >
            <div className="max-w-3xl">

                {/* Titre */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Décroche ton{" "}
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        stage idéal
                    </span>{" "}
                    dès aujourd’hui
                </h1>

                {/* Description */}
                <p className="mt-6 text-md opacity-70">
                    Accède aux meilleures opportunités de stage et lance ta carrière
                    en quelques clics.
                </p>

                {/* Boutons CTA */}
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <button className="btn btn-accent">
                        Trouver un stage
                    </button>

                    <button className="btn btn-ghost ">
                        Publier une offre
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Cta

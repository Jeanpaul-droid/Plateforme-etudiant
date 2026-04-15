'use client'

import { Blend, Building2, MoveLeft, School } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();

    const handleSelect = (role: string) => {
        router.push(`/auth/register?role=${role}`);
    };
    return (
        <>
            <div className='w-full'>
                <div className="navbar bg-base-100 shadow-sm border-b backdrop-blur-lg z-50 border-b-transparent  fixed w-full left-0 right-0">

                    <Link className="btn btn-soft  btn-sm text-sm" href="/">
                        <MoveLeft
                            width={10}
                            height={20}
                            strokeWidth={3}
                        />
                        Retour
                    </Link>
                </div>

                <div className='flex flex-col items-center justify-center min-h-screen bg-base-300'>
                    <div className='mx-auto mt-25 w-full'>
                        <h1 className='md:text-4xl text-3xl text-white text-center font-extrabold mb-2 mx-auto'>
                            Faites un choix de profil a créer
                        </h1>
                        <p className='text-sm opacity-90 text-center'>Le choix du profil est très important pour avoir un compte certifié de <span className='font-bold text-cyan-400'>TalentBoost</span></p>
                    </div>

                    <div className='md:flex-row md:gap-3 md:items-center md:justify-center w-full md:px-4 flex items-center justify-center space-y-4 flex-wrap m-3 p-2'>
                        <div
                            onClick={() => handleSelect("Etudiant")}
                            className="card card-border bg-base-100 w-96 p-5 hover:scale-105 transition cursor-pointer ">
                            <div className="card-body">
                                <div className='flex items-center justify-center gap-x-4'>
                                    <School
                                        size={40}
                                        strokeWidth={2}
                                        className='text-amber-400'
                                    />
                                    <h2 className="card-title text-amber-400 text-center font-extrabold text-3xl">Etudiants</h2>
                                </div>

                                <p className='text-center'>Poursuivez ici si vous êtes étudiant.</p>

                            </div>
                        </div>

                        {/* Elèves du lycée technique */}

                        <div
                            onClick={() => handleSelect("Lycee")}
                            className="card card-border bg-base-100 w-96 p-2.5 cursor-pointer hover:scale-105 transition">
                            <div className="card-body">
                                <div className='flex items-center justify-center gap-x-4'>
                                    <Blend
                                        size={40}
                                        strokeWidth={2}
                                        className='text-cyan-400'
                                    />
                                    <h2 className="card-title text-cyan-500 text-center font-extrabold text-3xl">Lycées Technique</h2>
                                </div>

                                <p className='text-center'>Poursuivez ici si vous êtes elève en formation dans un lycée technique.</p>

                            </div>
                        </div>

                        {/* Entreprises */}

                        <div
                            onClick={() => handleSelect("Entreprise")}
                            className="card card-border bg-base-100 w-96 p-2.5 hover:scale-105 transition cursor-pointer">
                            <div className="card-body">
                                <div className='flex items-center justify-center gap-x-4'>
                                    <Building2
                                        className='text-emerald-400 '
                                        strokeWidth={2}
                                        size={40}
                                    />
                                    <h2 className="card-title text-emerald-400 text-center text-3xl font-extrabold">Entreprise</h2>
                                </div>
                                <p className='text-center'>Poursuivez ici si vous êtes une <span className='text-cyan-500'>Entreprise</span>.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page

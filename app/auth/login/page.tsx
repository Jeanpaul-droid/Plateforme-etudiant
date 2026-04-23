'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { LogIn, MoveLeft, UserRoundKey } from 'lucide-react';

export default async function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const role = searchParams.get("role"); // récupère le rôle depuis l'URL

    // sécurité UX
    useEffect(() => {
        if (!role) {
            router.push("/choose-role");
        }
    }, [role]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        //  Ici vérifier credentials côté backend
        alert(`Connexion réussie pour ${role} avec email : ${email}`);
        // stocker dans le local storge celui connecté

        if (role) {
            localStorage.setItem("role", role);
        }

        //  Redirection vers dashboard selon rôle
        switch (role) {
            case "Entreprise":
                router.push("/dashboard/entreprise");
                break;
            case "Etudiant":
                router.push("/dashboard/etudiant");
                break;
            case "Lycee":
                router.push("/dashboard/lycee");
                break;
            default:
                router.push("/choose-role");
        }
    };
    return (
        <div className='w-full flex flex-col h-full min-h-screen'>
            {/* NAVBAR simple */}
            <div className="navbar bg-base-100 shadow-md md:px-10 md:flex md:justify-between flex items-center justify-around gap-x-4">
                <Link href="/choose-role" className="btn btn-neutral btn-sm">
                    <MoveLeft width={15} strokeWidth={5} />
                    Retour
                </Link>
                <h1 className='md:text-4xl text-2xl font-extrabold text-primary'>Connexion {role}</h1>
            </div>

            {/* FORMULAIRE LOGIN - Centré au milieu de l'espace restant */}
            <div className='flex-1 flex flex-col items-center justify-center px-4 m-4'>
                <form
                    onSubmit={handleSubmit} //  utilise la fonction du parent
                    className='flex flex-col p-5 rounded-2xl  gap-3  w-full max-w-md'
                >
                    <h2 className='md:text-3xl text-2xl  font-extrabold text-primary'>Connexion {role} </h2>

                    <input className='input input-bordered w-full' type='email' placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input className='input input-bordered w-full' type="password" placeholder='Mot de passe'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='btn btn-primary w-full'>
                        Connexion <UserRoundKey size={25} strokeWidth={2} />
                    </button>

                    <p className='text-center text-sm text-base-content/60 mt-1'>
                        Pas encore inscrit ?{" "}
                        <Link href={`/auth/register?role=${role}`} className='text-primary font-semibold hover:underline'>
                            S'inscrire
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Page

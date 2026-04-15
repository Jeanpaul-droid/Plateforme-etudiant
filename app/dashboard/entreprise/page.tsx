'use client'

import React, { useEffect, useState } from 'react'
import { LayoutGrid, PanelLeft, Settings, LogOut, Briefcase, Users, TrendingUp, Clock, CheckCircle, AlertCircle, School, Plus, MapPin, MessageCircle, Headset } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Page() {

    const [activeTab, setActiveTab] = useState('accueil');
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("role");
        router.push("/");
    };

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Entreprise") {
            router.push("/auth/login?role=Entreprise");
        }
    }, []);

    // Données de démonstration
    const stats = [
        { label: 'Offres publiées', value: 12, icon: Briefcase },
        { label: 'Candidatures reçues', value: 48, icon: Users },
        { label: 'Stagiaires recrutés', value: 8, icon: CheckCircle },
        { label: 'En attente de réponse', value: 5, icon: Clock },
    ];

    const offres = [
        { id: 1, titre: 'Développeur Full Stack', status: 'Actif', candidats: 12, dateCreation: '2026-03-15' },
        { id: 2, titre: 'Manager RH', status: 'Actif', candidats: 8, dateCreation: '2026-03-10' },
        { id: 3, titre: 'Data Analyst', status: 'Archivé', candidats: 5, dateCreation: '2026-02-28' },
    ];

    return (
        <div className='w-full min-h-screen'>
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col">

                    {/* NAVBAR */}
                    <nav className="navbar  bg-base-100 shadow-md sticky top-0 z-40 border-b backdrop-blur-lg border-b-taupe-700">
                        <div className="flex-1">
                            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle lg:hidden">
                                <PanelLeft strokeWidth={2} size={24} className='text-a-500' />
                            </label>
                            <span className="text-2xl font-extrabold text-cyan-400">TalentBoost Pro</span>
                        </div>
                        <div className="flex items-center justify-center gap-x-4 gap-4">
                            <input type="text" placeholder="Rechercher..." className="input input-bordered input-sm" />
                            <p className='text-sm text-taupe-300'> {localStorage.getItem("role")} </p>
                            <button onClick={handleLogout} className='btn btn-sm btn-soft btn-error gap-2'>
                                <LogOut size={18} />
                            </button>
                        </div>
                    </nav>

                    {/* CONTENU PRINCIPAL */}
                    <div className="flex-1 p-4 lg:p-8 overflow-auto">

                        {/* HEADER */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-extrabold mb-2">Tableau de bord</h1>
                            <p className="text-sm text-base-content/60">Bienvenue dans votre espace de gestion</p>
                        </div>

                        {/* STATISTIQUES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="card bg-base-300 shadow-md hover:shadow-lg transition-shadow">
                                        <div className="card-body rounded-2xl hover:shadow-3xl hover:scale-105 transition">
                                            <div className="flex items-center justify-between">
                                                <div className='flex flex-col justify-center'>
                                                    <p className="text-sm text-base-content/60 uppercase ">{stat.label}</p>
                                                    <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                                                </div>
                                                <Icon size={32} className='text-emerald-500 opacity-80' />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* GRILLE DE CONTENU */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* OFFRES D'EMPLOI */}
                            <div className="lg:col-span-2">
                                <div className="card bg-base-100 shadow-md">
                                    <div className="card-body bg-base-300 rounded-2xl">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="card-title text-2xl text-accent shadow font-extrabold">Vos Offres</h2>
                                            <button className="btn btn-neutral btn-sm gap-2">
                                                <Plus
                                                        size={16}
                                                        strokeWidth={3}
                                                        className='text-white'
                                                     />
                                                <span>
                                                    
                                                </span> Nouvelle offre
                                            </button>
                                        </div>
                                        <div className="space-y-3">
                                            {offres.map((offre) => (
                                                <div key={offre.id} className="card bg-base-200 hover:transition-colors border-2 border-base-100 rounded-2xl">
                                                    <div className="card-body p-4">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h3 className="">{offre.titre}</h3>
                                                                <p className="text-sm text-base-content/60">Créée le {offre.dateCreation}</p>
                                                            </div>
                                                            <div className={`badge ${
                                                                offre.status === 'Actif' 
                                                                    ? 'badge-soft badge-accent' 
                                                                    : 'badge-soft'
                                                            }`}>
                                                                {offre.status}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-2 mt-2 badge badge-soft">
                                                            <Users size={16} />
                                                            <span className="text-sm">{offre.candidats} candidat{offre.candidats > 1 ? 's' : ''}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SIDEBAR DROITE */}
                            <div className="space-y-6">

                                {/* INFOS ENTREPRISE */}
                                <div className="card bg-base-100 shadow-md">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg text-cyan-400">Infos Entreprise</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="badge badge-amber"><Headset /></div>
                                                <div>
                                                    <p className="text-xs text-base-content/60">Téléphone</p>
                                                    <p className="">+229  01 23 45 67 89</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="badge badge-amber"><MessageCircle /></div>
                                                <div>
                                                    <p className="text-xs text-base-content/60">Email</p>
                                                    <p className="">contact@company.fr</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="badge badge-amber"><MapPin /></div>
                                                <div>
                                                    <p className="text-xs text-base-content/60">Localisation</p>
                                                    <p className="">Bénin | Porto-Novo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ACTIONS RAPIDES */}
                                <div className="card bg-base-200 shadow-lg rounded-xl">
                                    <div className="card-body">
                                        <h3 className="card-title text-md text-cyan-400">Actions rapides</h3>
                                        <div className="space-y-2">
                                            <button className="btn btn-sm btn-soft btn-primary btn-block gap-2 justify-start">
                                                <Briefcase size={18} />
                                                Créer une offre
                                            </button>
                                            <button className="btn btn-sm btn-soft btn-primary  btn-block gap-2 justify-start">
                                                <Users size={18} />
                                                Voir les candidats
                                            </button>
                                            <button className="btn btn-sm btn-soft btn-primary btn-block gap-2 justify-start">
                                                <Settings size={18} />
                                                Paramètres
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* SIDEBAR */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                    <div className="flex min-h-full flex-col bg-base-100 w-64 border-r border-r-taupe-700">

                        {/* LOGO SIDEBAR */}
                        <div className=" p-3 border-b border-b-taupe-700">
                            <div className="flex items-center gap-3">
                                <div className="badge badge-lg badge-amber text-cyan-600">
                                    <School size={24} />
                                </div>
                                <div>
                                    <p className="font-extrabold">TalentBoost</p>
                                    <p className="text-xs text-base-content/60">Entreprise</p>
                                </div>
                            </div>
                        </div>

                        {/* MENU DE NAVIGATION */}
                        <ul className="menu w-full px-2 py-4 space-y-1 flex-1">

                            <li>
                                <button
                                    className='btn btn-soft btn-sm'
                                >
                                    <LayoutGrid size={20} />
                                    Accueil
                                </button>
                            </li>

                            <li className="menu-title mt-4">
                                <span>Gestion</span>
                            </li>

                            <li>
                                <button className='btn btn-soft btn-sm mb-2'>
                                    <Briefcase size={20} />
                                    Mes offres
                                </button>
                            </li>

                            <li>
                                <button className='btn btn-soft btn-sm'>
                                    <Users size={20} />
                                    Candidats
                                </button>
                            </li>

                            <li className="menu-title mt-4">
                                <span>Autres</span>
                            </li>

                            <li>
                                <button className='btn btn-soft btn-sm'>
                                    <Settings size={20} />
                                    Paramètres
                                </button>
                            </li>

                        </ul>

                        {/* FOOTER SIDEBAR */}
                        <div className="p-4 border-t border-t-taupe-700">
                            <button onClick={handleLogout} className="btn btn-soft btn-error btn-sm w-full gap-2">
                                <LogOut size={18} />
                                Déconnexion
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
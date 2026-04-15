"use client";

import React, { useState } from 'react'
import { useSearchParams, useRouter } from "next/navigation";
import Link from 'next/link';
import { LogIn, MoveLeft } from 'lucide-react';

export default function Page() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const role = searchParams.get("role");

    // Sécurité UX : si pas de rôle → retour choix
    if (!role) {
        router.push("/choose-role");
    }

    // Fonction globale
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Inscription réussie !");
        router.push(`/auth/login?role=${role}`);
    };

    return (
        <div className='w-full flex flex-col items-center min-h-screen'>

            {/* NAVBAR */}
            <div className="navbar bg-base-100 shadow-md md:px-10 md:flex md:justify-between flex items-center justify-around gap-x-3 w-full fixed top-0 left-0 z-50">

                <Link href="/choose-role" className="btn btn-neutral btn-sm">
                    <MoveLeft width={15} strokeWidth={5} />
                    Retour
                </Link>

                <h1 className='md:text-4xl text-xl font-extrabold text-primary'>
                    Inscription {role}
                </h1>

            </div>

            {/* AFFICHAGE SELON ROLE */}
            <div className='w-full flex justify-center mt-24 mb-10 px-4'>
                {role === "Entreprise" && <EntrepriseForm onSubmit={handleSubmit} role={role} />}
                {role === "Etudiant" && <EtudiantForm onSubmit={handleSubmit} role={role} />}
                {role === "Lycee" && <LyceeForm onSubmit={handleSubmit} role={role} />}
            </div>

        </div>
    )
}

/* ─────────────────────────────────────────────
   FORMULAIRE ÉTUDIANT
───────────────────────────────────────────── */

const FILIERES_ETUDIANT = [
    "Informatique",
    "Génie Civil",
    "Électrotechnique",
    "Mécanique",
    "Génie Industriel",
    "Réseaux & Télécommunications",
    "Génie Chimique",
    "Autre",
];

const NIVEAUX_ETUDIANT = [
    "Licence 1 (L1)",
    "Licence 2 (L2)",
    "Licence 3 (L3)",
    "Master 1 (M1)",
    "Master 2 (M2)",
    "Doctorat",
    "BTS / DUT",
    "Autre",
];

function EtudiantForm({ onSubmit, role }: { onSubmit: (e: React.FormEvent) => void; role: string }) {
    const [form, setForm] = useState({
        nomComplet: "",
        email: "",
        telephone: "",
        niveauEtude: "",
        filiere: "",
        password: "",
        confirmPassword: "",
    });

    const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [field]: e.target.value }));

    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-lg bg-base-100 rounded-2xl p-8'>
            <h2 className='md:text-3xl text-2xl font-extrabold text-primary mb-2'>Étudiant</h2>

            {/* Nom complet */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Nom complet *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Jean Dupont'
                    required
                    value={form.nomComplet}
                    onChange={set("nomComplet")}
                />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Email *</label>
                <input
                    className='input input-bordered w-full'
                    type="email"
                    placeholder='exemple@email.com'
                    required
                    value={form.email}
                    onChange={set("email")}
                />
            </div>

            {/* Téléphone */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Numéro de téléphone *</label>
                <input
                    className='input input-bordered w-full'
                    type="tel"
                    placeholder='+229 XX XX XX XX'
                    required
                    value={form.telephone}
                    onChange={set("telephone")}
                />
            </div>

            {/* Niveau d'étude */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Niveau d'étude actuel *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.niveauEtude}
                    onChange={set("niveauEtude")}
                >
                    <option value="" disabled>Sélectionner un niveau</option>
                    {NIVEAUX_ETUDIANT.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
            </div>

            {/* Filière */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Filière *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.filiere}
                    onChange={set("filiere")}
                >
                    <option value="" disabled>Sélectionner une filière</option>
                    {FILIERES_ETUDIANT.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
            </div>

            {/* Mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Minimum 8 caractères'
                    required
                    minLength={8}
                    value={form.password}
                    onChange={set("password")}
                />
            </div>

            {/* Confirmer mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Confirmer le mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Répéter le mot de passe'
                    required
                    minLength={8}
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                />
            </div>

            <button type='submit' className='btn btn-primary w-full mt-2'>
                S'inscrire <LogIn size={20} />
            </button>
            <p className='text-center text-sm text-base-content/60 mt-1'>
                Déjà inscrit ?{" "}
                <Link href={`/auth/login?role=${role}`} className='text-primary font-semibold hover:underline'>
                    Se connecter
                </Link>
            </p>
        </form>
    )
}


/* ─────────────────────────────────────────────
   FORMULAIRE LYCÉE TECHNIQUE
───────────────────────────────────────────── */

const NIVEAUX_LYCEE = ["2nde", "1ère", "Terminale"];

const FILIERES_LYCEE = [
    "Informatique",
    "Électrotechnique",
    "Mécanique Industrielle",
    "Génie Civil & Construction",
    "Énergie & Environnement",
    "Électronique",
    "Autre",
];

function LyceeForm({ onSubmit, role }: { onSubmit: (e: React.FormEvent) => void; role: string }) {
    const [form, setForm] = useState({
        nomComplet: "",
        niveau: "",
        filiere: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: "",
    });

    const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [field]: e.target.value }));

    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-lg bg-base-100  rounded-2xl p-8'>
            <h2 className='md:text-3xl text-2xl font-extrabold text-primary mb-2'>Lycée Technique</h2>

            {/* Nom complet */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Nom complet *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Marie Koffi'
                    required
                    value={form.nomComplet}
                    onChange={set("nomComplet")}
                />
            </div>

            {/* Niveau */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Niveau *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.niveau}
                    onChange={set("niveau")}
                >
                    <option value="" disabled>Sélectionner un niveau</option>
                    {NIVEAUX_LYCEE.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
            </div>

            {/* Filière */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Filière *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.filiere}
                    onChange={set("filiere")}
                >
                    <option value="" disabled>Sélectionner une filière</option>
                    {FILIERES_LYCEE.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Email *</label>
                <input
                    className='input input-bordered w-full'
                    type="email"
                    placeholder='exemple@email.com'
                    required
                    value={form.email}
                    onChange={set("email")}
                />
            </div>

            {/* Téléphone */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Numéro de téléphone *</label>
                <input
                    className='input input-bordered w-full'
                    type="tel"
                    placeholder='+229 XX XX XX XX'
                    required
                    value={form.telephone}
                    onChange={set("telephone")}
                />
            </div>

            {/* Mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Minimum 8 caractères'
                    required
                    minLength={8}
                    value={form.password}
                    onChange={set("password")}
                />
            </div>

            {/* Confirmer mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Confirmer le mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Répéter le mot de passe'
                    required
                    minLength={8}
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                />
            </div>

            <button type='submit' className='btn btn-primary w-full mt-2'>
                S'inscrire <LogIn size={20} />
            </button>
            <p className='text-center text-sm text-base-content/60 mt-1'>
                Déjà inscrit ?{" "}
                <Link href={`/auth/login?role=${role}`} className='text-primary font-semibold hover:underline'>
                    Se connecter
                </Link>
            </p>
        </form>
    )
}


/* ─────────────────────────────────────────────
   FORMULAIRE ENTREPRISE
───────────────────────────────────────────── */

const SECTEURS = [
    "Informatique & Technologies",
    "BTP & Génie Civil",
    "Industrie & Manufacture",
    "Énergie & Environnement",
    "Télécommunications",
    "Santé & Pharmacie",
    "Finance & Banque",
    "Agriculture & Agroalimentaire",
    "Transport & Logistique",
    "Commerce & Distribution",
    "Autre",
];

const TAILLES = [
    "TPE (1–9 employés)",
    "PME (10–249 employés)",
    "Grande entreprise (250+)",
];

function EntrepriseForm({ onSubmit, role }: { onSubmit: (e: React.FormEvent) => void; role: string }) {
    const [form, setForm] = useState({
        nomEntreprise: "",
        secteur: "",
        taille: "",
        nomResponsable: "",
        posteResponsable: "",
        email: "",
        telephone: "",
        siteWeb: "",
        adresse: "",
        password: "",
        confirmPassword: "",
    });

    const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [field]: e.target.value }));

    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-lg bg-base-100 rounded-2xl p-8'>
            <h2 className='md:text-3xl text-2xl font-extrabold text-primary mb-2'>Entreprise</h2>

            {/* Nom entreprise */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Nom de l'entreprise *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Tech Bénin SARL'
                    required
                    value={form.nomEntreprise}
                    onChange={set("nomEntreprise")}
                />
            </div>

            {/* Secteur d'activité */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Secteur d'activité *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.secteur}
                    onChange={set("secteur")}
                >
                    <option value="" disabled>Sélectionner un secteur</option>
                    {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>

            {/* Taille */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Taille de l'entreprise *</label>
                <select
                    className='select select-bordered w-full'
                    required
                    value={form.taille}
                    onChange={set("taille")}
                >
                    <option value="" disabled>Sélectionner la taille</option>
                    {TAILLES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
            </div>

            <div className='divider text-xs text-base-content/50'>Responsable du compte</div>

            {/* Nom responsable */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Nom du responsable *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Amos Houénou'
                    required
                    value={form.nomResponsable}
                    onChange={set("nomResponsable")}
                />
            </div>

            {/* Poste */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Poste / Fonction *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Directeur RH'
                    required
                    value={form.posteResponsable}
                    onChange={set("posteResponsable")}
                />
            </div>

            <div className='divider text-xs text-base-content/50'>Coordonnées</div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Email professionnel *</label>
                <input
                    className='input input-bordered w-full'
                    type="email"
                    placeholder='contact@entreprise.com'
                    required
                    value={form.email}
                    onChange={set("email")}
                />
            </div>

            {/* Téléphone */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Numéro de téléphone *</label>
                <input
                    className='input input-bordered w-full'
                    type="tel"
                    placeholder='+229 XX XX XX XX'
                    required
                    value={form.telephone}
                    onChange={set("telephone")}
                />
            </div>

            {/* Site web */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Site web <span className='text-base-content/40'>(optionnel)</span></label>
                <input
                    className='input input-bordered w-full'
                    type="url"
                    placeholder='https://www.entreprise.com'
                    value={form.siteWeb}
                    onChange={set("siteWeb")}
                />
            </div>

            {/* Adresse */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Adresse *</label>
                <input
                    className='input input-bordered w-full'
                    placeholder='Ex: Cotonou, Bénin'
                    required
                    value={form.adresse}
                    onChange={set("adresse")}
                />
            </div>

            <div className='divider text-xs text-base-content/50'>Sécurité</div>

            {/* Mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Minimum 8 caractères'
                    required
                    minLength={8}
                    value={form.password}
                    onChange={set("password")}
                />
            </div>

            {/* Confirmer mot de passe */}
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold'>Confirmer le mot de passe *</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    placeholder='Répéter le mot de passe'
                    required
                    minLength={8}
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                />
            </div>

            <button type='submit' className='btn btn-primary w-full mt-2'>
                S'inscrire <LogIn size={20} />
            </button>
            <p className='text-center text-sm text-base-content/60 mt-1'>
                Déjà inscrit ?{" "}
                <Link href={`/auth/login?role=${role}`} className='text-primary font-semibold hover:underline'>
                    Se connecter
                </Link>
            </p>
        </form>
    )
}
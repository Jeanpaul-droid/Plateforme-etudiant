'use client'

import { Home, Menu, School, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
const Links = [
    {
        href: "#home",
        label: "Accueil"
    }
    ,
    {
        href: "#about",
        label: "A Propos"
    }
    ,
    {
        href: "#howUse",
        label: "Utilisation"
    }
    ,
    {
        href: "#FAQ",
        label: "FAQ"
    }
]

const NavLinks = ({
    className = "btn btn-primary btn-soft btn-sm rounded transition-all",

}: {
    className?: string
}) => {
    return (
        <>
            {Links.map(({ href, label }) => (
                <Link key={href} href={href} className={className}>
                    {label}
                </Link>
            ))}
        </>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='bg-base-300 shadow-2xl fixed left-0 right-0 z-50  border-b border-b-taupe-700'>
            <div className='px-5 md:px-[10%] flex items-center justify-between  h-16'>
                <div className='flex items-center gap-2'>
                    <School
                        className='w-6 h-6 text-primary'
                    />
                    <span className='font-bold text-xl'>TalentBoost</span>
                </div>
                <div className='hidden md:flex gap-4'>
                    <NavLinks />
                </div>

                <div className='flex items-center gap-2'>
                    <Link href={"/choose-role"} className='btn btn-sm md:btn md:btn-soft md:btn-warning btn-ghost rounded'>
                        Connexion
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden btn-sm btn-soft btn-primary btn'>
                        {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col bg-base-200 shadow-inner p-4 py-2 space-y-2'>
                    <NavLinks
                    />
                </div>
            )}
        </header>
    )
}

export default Navbar

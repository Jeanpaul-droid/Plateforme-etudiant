'use client'

import React, { useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {

    const handleLogout = () => {
        localStorage.removeItem("role");
        router.push("/");
    };
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role !== "Etudiant") {
            router.push("/auth/login?role=Etudiant");
        }
    }, []);
    return (
        <div>
            dashboard etudiant

            <button onClick={handleLogout} className='btn btn-soft btn-error'>Disconnect</button>
        </div>
    )
}

export default page

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
    
            if (role !== "Lycee") {
                router.push("/auth/login?role=Lycee");
            }
        }, []);
  return (
    <div>
      dashboard lycee

      <button onClick={handleLogout} className='btn btn-soft btn-error'>Deconnexion</button>
    </div>
  )
}

export default page

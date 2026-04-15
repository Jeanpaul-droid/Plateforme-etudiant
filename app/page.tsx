'use client'

import Image from "next/image";
import About from "./components/about";
import HowItWorks from "./components/HowItWorks";
import { ArrowBigRightDash, MoveRight, School, Loader } from "lucide-react";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Link from "next/link";
import Wrapper from "./components/Wrapper";
export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* navbar */}
        <Wrapper children={undefined} />

        {/* DEBUT DE HERO SECTION */}
        <div className="mx-auto w-full flex flex-col items-center  justify-center min-h-screen px-4" id="home">


          <div className="flex flex-col items-center text-center w-full max-w-xl">

            <h1 className="text-3xl md:text-6xl text-center font-extrabold bg-gradient-to-r from-amber-400 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              La solution bien définie pour votre stage
            </h1>

            <p className="text-white text-sm md:text-base mt-4">
              Trouver le stage qui vous rends professionnel et dynamique dans les entreprises
            </p>

            <Link
              href="/choose-role/"
              className="btn btn-soft btn-md btn-ghost p-2 mt-3 w-fit flex items-center gap-2"
            >
              Commencer
              <ArrowBigRightDash width={20} height={20} strokeWidth={2} />
            </Link>

          </div>

        </div>

        <div className="flex items-center justify-center bg-base-200" id="about">
          <About />
        </div>

        <div id='howUse'>
          <HowItWorks />
        </div>


        <div id="FAQ">
          <Faq />
        </div>

        <div>
          <Cta />
        </div>
      </div>
    </>
  );
}

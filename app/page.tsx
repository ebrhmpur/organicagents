"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import logoImage from "@/public/logos/main.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff5f6d,#ffc371,#7ee8fa,#b388ff,#ff5f6d)] animate-rotate opacity-70 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,150,0.3),transparent_70%)] blur-2xl mix-blend-screen"></div>
      </div>

      <main className="flex flex-col items-center text-center px-6">
        <div className="animate-float mb-8">
          <div className="w-36 h-36 rounded-full  bg-white flex items-center justify-center">
            <Image src={logoImage} width={80} height={80} alt="logo" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          <Typewriter
            words={[
              "Добро пожаловать в мир адаптивного искусственного интеллекта.",
              "Технология, которая меняет бизнес.",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-gray-300 max-w-2xl mb-8">
          С нашими интеллектуальными системами любой бизнес может работать
          быстрее, точнее и креативнее. Будущее уже наступило.
        </p>

        <div className="flex gap-4 flex-wrap justify-center"></div>
      </main>
      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

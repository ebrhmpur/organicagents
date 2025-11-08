'use client'
import { motion } from "framer-motion";


export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b3a59] to-[#071024] p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="max-w-5xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 flex items-center justify-center p-10 relative">
          <motion.svg
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewBox="0 0 600 400"
            className="w-full h-auto max-w-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            <rect
              x="20"
              y="40"
              width="560"
              height="320"
              rx="20"
              fill="url(#g1)"
              opacity="0.12"
            />

            <motion.g
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="150"
                fontWeight="700"
                fill="#fff"
                opacity="0.95"
              >
                404
              </text>
            </motion.g>

            <motion.circle
              cx="520"
              cy="80"
              r="16"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.15, 1] }}
              transition={{ delay: 0.6, duration: 0.7 }}
              fill="#ffd166"
            />

            <motion.circle
              cx="80"
              cy="320"
              r="10"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              fill="#06b6d4"
            />
          </motion.svg>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-1 rounded-full bg-gradient-to-r from-white/10 to-transparent"
          />
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
              Упс!
            </h1>
            <p className="mt-2 text-lg text-white/80">
              Страница, которую вы ищете, не найдена.
            </p>
          </div>

          <p className="text-sm text-white/60 max-w-xl">
            Возможно, вы ввели неправильный адрес или страница была удалена. Не
            волнуйтесь — вы можете воспользоваться кнопками ниже или вернуться
            на главную страницу.
          </p>

          <div className="mt-6 text-xs text-white/40">
            Код состояния:{" "}
            <span className="text-white/80 font-medium">404 — Не найдено</span>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Если вы считаете, что это ошибка, пожалуйста, сообщите об этом.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

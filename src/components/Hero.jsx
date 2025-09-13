import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Nội dung */}
      <div className="relative h-full flex items-end justify-start px-6 md:px-20 pb-16">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl text-left"
        >
          NẾU AI GIỎI HƠN TÔI <br /> HÃY ĐỂ HỌ LÀM <br /> CÔNG VIỆC CỦA TÔI
        </motion.h1>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => {
          const section = document.getElementById("about");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 
             text-white flex flex-col items-center
             text-xs font-semibold tracking-widest 
             cursor-pointer group bg-transparent border-none outline-none"
      >
        <span className="uppercase opacity-80 group-hover:opacity-100 transition">
          Scroll Down
        </span>
        <span className="mt-1 text-lg animate-bounce">↓</span>
      </button>
    </section>
  );
}

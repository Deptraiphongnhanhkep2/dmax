import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/dmax_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.08, staggerDirection: -1 },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  };

  const links = [
    "HOME",
    "ABOUT",
    "BUSINESS",
    "SUSTAINABLE DEVELOPMENT",
    "INVESTOR RELATIONS",
    "NEWS & EVENTS",
    "RECRUITMENT",
    "CONTACT",
  ];

  return (
    <>
      {/* Taskbar responsive */}
      <aside
        className="
          fixed z-50 bg-blue-600 text-white
          flex justify-between items-center
          /* Mobile: taskbar ngang trên */
          top-0 left-0 w-full h-16 flex-row px-6
          /* Desktop: taskbar dọc trái */
          md:w-16 md:h-full md:flex-col md:py-6 md:px-0
        "
      >
        {/* Logo */}
        <a href="#">
          <img
            src={Logo}
            alt="Dmax Logo"
            className="w-20 h-auto object-contain md:w-36"
          />
        </a>

        {/* Toggle nút */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-black/80 rounded-md"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Right / Bottom section */}
        <div className="flex items-center gap-6 text-xs md:flex-col md:gap-4">
          <Search className="w-5 h-5" />
          <div>
            <span className="font-bold">EN</span> | VN
          </div>
        </div>
      </aside>

      {/* Overlay panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{
              x: 0,
              y: "-100%", // mobile: từ trên xuống
            }}
            animate={{
              x: 0,
              y: 0,
            }}
            exit={{
              x: 0,
              y: "-100%",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="
              fixed inset-0 bg-white z-40 flex flex-col justify-center px-8
              md:initial
              md:animate
              md:exit
              md:transition
              md:initial-x-[-100%] md:initial-y-0
              md:animate-x-0 md:animate-y-0
              md:exit-x-[-100%] md:exit-y-0
            "
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-4"
            >
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  variants={item}
                  href={"#" + link.toLowerCase().replace(/ /g, "-")}
                  className={`block py-3 text-3xl transition-colors ${
                    i === 0
                      ? "text-red-600 font-bold"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

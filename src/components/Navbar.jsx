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
      {/* Sidebar xanh luôn cố định */}
      <aside className="fixed left-0 top-0 h-full w-16 bg-blue-600 text-white z-50 flex flex-col justify-between items-center py-6">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="Dmax Logo" className="w-36 h-auto object-contain" />
        </a>

        {/* Toggle nút */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-black/80 rounded-md"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 text-xs">
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8"
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

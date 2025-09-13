import React from "react";
import Chairman from "../assets/images/Chairman.jpeg";

export default function AboutInvestor({
  title = "INVESTOR RELATIONS",
  section = "ABOUT",
  imageSrc = Chairman,
  imageAlt = "Vingroup project aerial view",
}) {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-light tracking-wide text-gray-800">
            {title}
          </h1>
        </header>

        {/* Subsection */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-semibold tracking-wide">{section}</h2>
            <div className="flex-1 border-t border-blue-500/60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded-md shadow-md object-cover max-h-[360px]"
              />
            </div>

            {/* Right: Text */}
            <div className="text-gray-700">
              <p className="mb-4 leading-relaxed">
                Not only a self-made director with a sharp mind, he’s also a man
                of style — the kind of boss who turns heads at meetings and
                still has the charm to pick up the bill at dinner. Handsome,
                successful, and generous… some people really do win the lottery
                of life.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>Since joining our family</strong>, my brother-in-law has
                evolved into one of the country’s leading experts in… picking up
                the bill. From street food stalls to fancy restaurants, his
                mission is simple: make sure I never touch my wallet. Guided by
                his philosophy of “eat well, live well,” he has become a true
                driving force behind my expanding waistline, contributing
                significantly to both family bonding and my eternal gratitude.
              </p>

              <p className="leading-relaxed text-sm text-gray-500">
                For more information about his legendary generosity, financial
                performance at restaurants, and governance over who gets the
                last piece of spring roll, please contact my brother-in-law
                directly — preferably right before dinner time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

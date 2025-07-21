import React from "react";
import vnFlag from "../assets/languages/vn.png";
import enFlag from "../assets/languages/en.png";
import deFlag from "../assets/languages/de.png";

const langs = [
  {
    name: "VIETNAMESE",
    flag: vnFlag,
    level: "Native",
  },
  {
    name: "ENGLISH",
    flag: enFlag,
    level: "C1",
  },
  {
    name: "GERMAN",
    flag: deFlag,
    level: "B2",
  },
];

const LanguagesSection: React.FC = () => (
  <section id="languages">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {langs.map((lang) => (
        <div
          key={lang.name}
          className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
        >
          <img
            src={lang.flag}
            alt={lang.name}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-4"
          />
          <span className="font-semibold text-gray-900 flex-1">
            {lang.name}
          </span>
          <span className="text-gray-600 text-sm">{lang.level}</span>
        </div>
      ))}
    </div>
  </section>
);

export default LanguagesSection;

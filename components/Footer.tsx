import React from "react";
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {FOOTER_LINKS.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="text-gray-400 mb-2">
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

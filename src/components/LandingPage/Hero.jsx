import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LOGO_URL } from "@/utils/Constant";

const Hero = () => {

  const partners = Object.entries(LOGO_URL).map(([name, icon]) => ({
    name,
    icon,
  }));

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="mb-8 animate-fade-in">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for projects
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-center max-w-[70%] leading-tight mb-8">
        Combining artistry and functionality to create{" "}
        <span className="text-blue-600">applications</span> that impact.
      </h1>

      <p className="text-lg md:text-xl text-gray-600 text-center max-w-[80%] mb-12">
        We are French Fry Features, a passionate & dedicated Agency, that
        resonates.
      </p>

      <Link
        href="/contact"
        className="group inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
      >
        Work with Us
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>

      <div className="mt-20 w-full overflow-hidden relative">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          .partner-gradient::before,
          .partner-gradient::after {
            content: "";
            position: absolute;
            top: 0;
            height: 100%;
            width: 100px;
            z-index: 2;
          }

          .partner-gradient::before {
            left: 0;
            background: linear-gradient(to right, white, transparent);
          }

          .partner-gradient::after {
            right: 0;
            background: linear-gradient(to left, white, transparent);
          }
        `}</style>

        <div className="partner-gradient relative w-full max-w-5xl mx-auto overflow-hidden">
          <div
            className="animate-scroll flex items-center gap-16"
            style={{ width: "max-content" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center gap-3 opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-gray-800 font-medium whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

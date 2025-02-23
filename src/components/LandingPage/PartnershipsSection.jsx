import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, Plus } from "lucide-react";
import { LOGO_URL } from "@/utils/Constant";

gsap.registerPlugin(ScrollTrigger);

const PartnershipsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const partnerships = Object.entries(LOGO_URL).map(([name, imageUrl]) => ({
    name,
    imageUrl,
  }));

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full flex flex-col items-start justify-start max-w-6xl mx-auto px-4 py-16"
    >
      <div className="mb-12">
        <p className="text-gray-600 text-sm mb-2">
          Global Alliances & Partnerships
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          World-class alliances to <br />
          drive business forward
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 self-center">
        {partnerships.map((partner, index) => (
          <div
            key={partner.name}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex items-center justify-center bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <img
              src={partner.imageUrl}
              alt={`${partner.name} logo`}
              className="w-full h-16 object-contain"
            />
          </div>
        ))}

        <div
          ref={(el) => (cardsRef.current[partnerships.length] = el)}
          className="flex flex-col items-center justify-center bg-lime-200 rounded-lg p-6 cursor-pointer hover:bg-lime-300 transition-all duration-300 hover:scale-105 group"
        >
          <div className="flex items-center gap-2 mb-2">
            <Handshake className="w-6 h-6 text-green-900 group-hover:rotate-12 transition-transform duration-300" />
            <Plus className="w-5 h-5 text-green-900" />
          </div>
          <p className="text-lg font-bold text-green-900 text-center">
            More Partnerships
            <br />
            in the making
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;

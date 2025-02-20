import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, ArrowRight, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PartnershipsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const LOGO_URL = {
    JaiMulti:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739972067/Jmeco_ac5nhx.png",
    KrackPot:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739972514/krack01_b4jeig.svg",
    Entise:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739903173/84f2f3e9-f61f-4078-ade3-1985b1d43a7d.png",
    TheGoodPlanet:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739903233/8b526398-1f4d-4475-b0b0-f8fa75ab6d81.png",
    NovaWatches:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739983307/Logo_1_wbjb65.jpg",
    Braces:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739983024/A482EDA4-882B-478A-A645-722AF4392412_blrbfm.jpg",
    AuctoGames:
      "https://res.cloudinary.com/drapx7rdj/image/upload/v1739903463/b5b479c1-b621-46f5-ba72-9db7bad0a199.png",
  };

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partnerships.map((partner, index) => (
          <div
            key={partner.name}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <img
              src={partner.imageUrl}
              alt={`${partner.name} logo`}
              className="w-full h-24 object-contain"
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

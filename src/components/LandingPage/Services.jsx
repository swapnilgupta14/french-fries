import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, { x: (index) => (index === 0 ? 0 : 1500)});

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })
      .to(cards, {
        x: 0,
        opacity: 1,
        stagger: { amount: 0.8, ease: "power2.out" },
      });
  }, []);

  return (
    <div ref={sectionRef} className="flex h-screen w-full pt-10">
      <div className="w-[40%] flex items-center justify-evenly p-8">
        <div className="flex flex-col items-start gap-1">
          <p>Products</p>
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        </div>
      </div>

      <div className="relative w-[60%] flex items-center justify-center overflow-hidden rounded-tl-3xl">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute w-[85%] h-96 bg-blue-500 rounded-bl-3xl shadow-lg mx-20"
            style={{
              zIndex: 1 + index,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;

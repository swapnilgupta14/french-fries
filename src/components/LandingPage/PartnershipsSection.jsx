import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PartnershipsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const partnerships = [
    { name: "Razorpay", imageUrl: "https://placehold.co/600x400" },
    { name: "Shopify", imageUrl: "https://placehold.co/600x400" },
    { name: "WebEngage", imageUrl: "https://placehold.co/600x400" },
    { name: "Shiprocket", imageUrl: "https://placehold.co/600x400" },
    { name: "Klaviyo", imageUrl: "https://placehold.co/600x400" },
    { name: "Interakt", imageUrl: "https://placehold.co/600x400" },
    { name: "Unicommerce", imageUrl: "https://placehold.co/600x400" },
    { name: "FlexyPe", imageUrl: "https://placehold.co/600x400" },
    { name: "Certified", imageUrl: "https://placehold.co/600x400" },
    { name: "Instamojo", imageUrl: "https://placehold.co/600x400" },
    { name: "WooCommerce", imageUrl: "https://placehold.co/600x400" }
  ];

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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[80vh] flex flex-col items-start justify-start max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-gray-600 text-sm mb-2">Global Alliances & Partnerships</p>
        <h2 className="text-4xl font-bold text-gray-900">
          World-class alliances to <br />
          drive business forward
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {partnerships.map((partner, index) => (
          <div
            key={partner.name}
            ref={el => (cardsRef.current[index] = el)}
            className="flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={partner.imageUrl}
              alt={`${partner.name} logo`}
              className="max-w-full h-auto object-contain"
            />
          </div>
        ))}

        <div
          ref={el => (cardsRef.current[partnerships.length] = el)}
          className="flex items-center justify-center bg-lime-200 rounded-lg cursor-pointer"
        >
          <p className="text-sm font-medium text-gray-800">
            More Partnerships<br />
            in the making
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;

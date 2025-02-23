import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { SERVICES_URL } from "@/utils/Constant";

const services = [
  {
    title: "Web Development",
    shortDesc: "Creating powerful web applications with modern technologies",
    longDesc:
      "We specialize in building responsive, scalable web applications using the latest frameworks and best practices. Our team focuses on performance, accessibility, and user experience.",
    image: SERVICES_URL?.WebApps,
  },
  {
    title: "Mobile Development",
    shortDesc: "Native and cross-platform mobile solutions",
    longDesc:
      "From iOS to Android, we deliver high-quality mobile applications that engage users and drive results. We use cutting-edge technologies to ensure optimal performance.",
    image: SERVICES_URL?.B2B,
  },
  {
    title: "UI/UX Design",
    shortDesc: "Creating intuitive and beautiful user experiences",
    longDesc:
      "Our design team crafts user-centered interfaces that not only look stunning but also provide seamless interactions and exceptional user experiences.",
    image: SERVICES_URL?.UIUX,
  },
  {
    title: "Cloud Solutions",
    shortDesc: "Scalable cloud infrastructure and services",
    longDesc:
      "We provide comprehensive cloud solutions that help businesses scale efficiently and securely. Our expertise spans across major cloud platforms.",
    image: SERVICES_URL?.Shopify,
  },
];


const ProductsSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const floatingImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredService !== null && floatingImageRef.current) {
        floatingImageRef.current.style.left = `${e.clientX}px`;
        floatingImageRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredService]);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 relative">
      <h1 className="text-3xl font-bold mb-12 relative z-10">Our Services</h1>

      <div className="max-w-2xl w-full space-y-4 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.shortDesc}</p>
                </div>
                <button
                  onMouseEnter={() => setHoveredService(null)}
                  onClick={() => toggleService(index)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus
                    className={`transition-transform duration-300 ${
                      activeService === index ? "rotate-45" : ""
                    }`}
                    size={24}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeService === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{service.longDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hoveredService !== null && (
        <div
          ref={floatingImageRef}
          className="fixed -top-50 -left-50 pointer-events-none z-50 transition-opacity duration-400 opacity-100"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={services[hoveredService].image}
            alt={services[hoveredService].title}
            className="w-[350px] h-[250px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
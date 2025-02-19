import Link from "next/link";
import { Palette, Code2, Monitor, Lightbulb, Clock } from "lucide-react";

const partners = [
  { name: "Spherule", icon: Palette },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
  { name: "Luminous", icon: Lightbulb },
  { name: "Hourly", icon: Clock },
  { name: "Webflow", icon: Monitor },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
  { name: "Spherule", icon: Palette },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
  { name: "Luminous", icon: Lightbulb },
  { name: "Hourly", icon: Clock },
  { name: "Webflow", icon: Monitor },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
  { name: "Spherule", icon: Palette },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
  { name: "Luminous", icon: Lightbulb },
  { name: "Hourly", icon: Clock },
  { name: "Webflow", icon: Monitor },
  { name: "Command+R", icon: Code2 },
  { name: "Webflow", icon: Monitor },
];

const Hero = () => {
  return (
    <section className="w-full h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for projects
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-center max-w-[70%] leading-loose mb-8">
        Combining artistry and functionality to create applications that impact.
      </h1>

      <p className="text-lg md:text-xl text-gray-600 text-center max-w-[80%] mb-12">
        We are French Fry Features, a passionate & dedicated Agency, that
        resonates.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        Work with Us
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>

      {/* Infinite Scrolling Partners */}
      <div className="mt-20 w-full overflow-hidden relative">
        <style jsx>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div className="scroll-container relative w-full max-w-5xl mx-auto overflow-hidden">
          <div
            className="scroll-content flex items-center space-x-16 animate-[scroll_20s_linear_infinite]"
            style={{ width: "max-content", display: "flex" }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center space-x-2 transition-opacity duration-300 hover:opacity-100"
              >
                <partner.icon className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-medium whitespace-nowrap">
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

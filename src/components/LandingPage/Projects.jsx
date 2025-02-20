import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { VIDEO_URL } from "@/utils/Constant";

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const deviceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subheadingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      deviceRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white -mt-10 mb-10">
      <div className="container mx-auto px-4 text-center">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-6 opacity-0"
        >
          Our Projects
        </h2>

        <p
          ref={subheadingRef}
          className="text-gray-600 text-lg mb-16 opacity-0"
        >
          Our Projects are built through a very careful and precise process.
        </p>

        <div
          ref={deviceRef}
          className="mx-auto opacity-0 flex items-center justify-center"
        >
          <div className="relative max-w-5xl w-full rounded-[2rem] bg-black p-4 border-4 border-gray-500 shadow-[0px_40px_40px_rgba(0,0,0,0.5)]">
            <div className="w-full rounded-[1.5rem] overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                src={VIDEO_URL?.NovaWatches}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

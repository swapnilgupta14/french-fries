import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Work = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1.5,
        pin: false,
        markers: false,
      },
    });

    tl.fromTo(
      timelineRef.current,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1,
        ease: "none",
      }
    );

    stepsRef.current.forEach((step, index) => {
      tl.fromTo(
        step,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        index * 0.2
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        "Understand project goals, objectives, and client vision. Gather insights, analyze market trends, and identify opportunities. Collaborate to define project scope, establish timelines, and set milestones.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Generate ideas & concepts, exploring various approaches. Create wireframes & prototypes to visualize project structure & user experience. Refine design concepts and create detailed mockups for review.",
    },
    {
      number: "03",
      title: "Development & Execution",
      description:
        "Bring designs to life, implementing project functionality. We conduct thorough testing and quality assurance to ensure that the project meets industry standards and client expectations.",
    },
    {
      number: "04",
      title: "Delivery & Launch",
      description:
        "Once approved, we deploy the project to the live environment, ensuring a smooth transition and minimal downtime. Conduct final review to ensure all requirements are met.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-screen items-center flex flex-col justify-center max-w-6xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">7-10 Days Process</p>
        <h2 className="text-4xl font-bold">How we work</h2>
      </div>

      <div className="relative">
        <div
          ref={timelineRef}
          className="absolute top-20 left-0 right-0 h-0.5 bg-black"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pt-12">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 flex items-center justify-center"></div>
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-sm">step - {step.number}</p>
              </div>
              <div className="text-center pt-14">
                <p className="text-4xl mb-4">{step.number}</p>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  ref={(el) => (stepsRef.current[index] = el)}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;

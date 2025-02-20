import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CircleDashed } from "lucide-react";
import { THUMBNAIL_URL } from "@/utils/Constant";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Codez",
      description:
        "Codez transforms business landscapes with innovative SaaS solutions. We understand that every business is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs.",
      year: "2020",
      tags: ["Website, UI/UX", "Photoshop, Illustrator"],
      bgColor: "bg-blue-600",
      image: THUMBNAIL_URL?.FrenchFry,
    },
    {
      title: "HiTech",
      description:
        "Find your perfect tech companion here with our innovative solutions.",
      year: "2021",
      tags: ["Mobile App", "UI Design"],
      bgColor: "bg-emerald-400",
      image: THUMBNAIL_URL?.JaiMulti,
    },
    {
      title: "Project 3",
      description: "Another innovative project description here.",
      year: "2022",
      tags: ["Web App", "Design"],
      bgColor: "bg-purple-500",
      image: THUMBNAIL_URL?.NovaWatches,
    },
    {
      title: "Codez",
      description:
        "Codez transforms business landscapes with innovative SaaS solutions. We understand that every business is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs.",
      year: "2020",
      tags: ["Website, UI/UX", "Photoshop, Illustrator"],
      bgColor: "bg-yellow-600",
      image: THUMBNAIL_URL?.KrackPot,
    },
    {
      title: "Codez",
      description:
        "Codez transforms business landscapes with innovative SaaS solutions. We understand that every business is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs.",
      year: "2020",
      tags: ["Website, UI/UX", "Photoshop, Illustrator"],
      bgColor: "bg-blue-600",
      image: THUMBNAIL_URL?.JaiMulti,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Header Text */}
      <div className="flex w-full justify-end items-center">
        <div className="w-[90%] pt-16 px-8 md:px-16">
          <div className="text-sm text-gray-600 mb-2">
            <span className="flex items-center justify-start gap-2">
              <CircleDashed className="w-4 h-4" /> OUR PROJECTS
            </span>
            <div className="border border-gray-400 mt-2"></div>
          </div>
          <h1 className="text-2xl font-medium mb-6">Our Case Study</h1>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative h-[70%] w-full bg-gray-50">
        <div
          className="absolute right-0 w-[70%] h-full  p-10 overflow-clip"
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative w-[50vw] h-full flex-shrink-0 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out ${project.bgColor}`}
              style={{ transform: `translateX(${10 - currentIndex * 100}%)` }}
            >
              <div className="p-8 h-full">
                <div className="flex gap-4 mb-6">
                  <span className="text-white/80">{project.year}</span>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white/90 mb-8">{project.description}</p>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

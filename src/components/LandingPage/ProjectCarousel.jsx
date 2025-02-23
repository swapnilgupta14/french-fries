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
        "Find your perfect tech companion here with our innovative solutions, is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs",
      year: "2021",
      tags: ["Mobile App", "UI Design"],
      bgColor: "bg-blue-600",

      image: THUMBNAIL_URL?.JaiMulti,
    },
    {
      title: "Project 3",
      description:
        "Another innovative project description here. is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs",
      year: "2022",
      tags: ["Web App", "Design"],
      bgColor: "bg-blue-600",
      image: THUMBNAIL_URL?.NovaWatches,
    },
    {
      title: "DEDDEED",
      description:
        "Codez transforms business landscapes with innovative SaaS solutions. We understand that every business is unique, which is why our customizable SaaS offerings cater to diverse industries and business needs.",
      year: "2020",
      tags: ["Website, UI/UX", "Photoshop, Illustrator"],
      bgColor: "bg-blue-600",

      image: THUMBNAIL_URL?.KrackPot,
    },
    {
      title: "KMDFMKE",
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

      <div className="relative h-[70%] w-full">
        <div className="absolute top-0 left-0 px-20 w-[30%] h-full flex flex-col">
          <div className="pt-20">
            <div className="flex items-center gap-4 mb-8">
              <p
                className={`text-md font-semibold py-2 px-6 ${projects[currentIndex]?.bgColor} text-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {String(currentIndex + 1).padStart(2, "0")}
              </p>
              <div className="h-[2px] flex-grow bg-gray-200"></div>
            </div>

            <h2 className="text-2xl font-medium text-black mb-4 transition-all duration-500 ease-in-out hover:translate-x-2">
              {projects[currentIndex]?.title}
            </h2>
          </div>

          <div className="flex-grow overflow-y-auto py-4 mb-4">
            <p className="text-black/80 text-lg leading-relaxed transition-opacity duration-500 ease-in-out">
              {projects[currentIndex]?.description}
            </p>
          </div>

          <div className="pb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              {projects[currentIndex]?.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className={`p-2 rounded-full text-white ${projects[currentIndex]?.bgColor} shadow-lg transition-all duration-300 hover:translate-x-[-4px] group`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className={`p-2 rounded-full text-white ${projects[currentIndex]?.bgColor} shadow-lg transition-all duration-300 hover:translate-x-[-4px] group`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="ml-4 text-gray-500">
                <span className="font-medium">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-2">/</span>
                <span>{String(projects.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute right-0 w-[70%] h-full p-10 overflow-clip"
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative w-[50vw] h-full flex-shrink-0 rounded-lg overflow-hidden shadow-[0px_20px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out ${project.bgColor}`}
              style={{ transform: `translateX(${10 - currentIndex * 100}%)` }}
            >
              <div className="p-8 h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

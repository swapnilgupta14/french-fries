"use client";
import React from "react";
import { VIDEO_URL } from "@/utils/Constant";
import { ContainerScroll } from "../ui/container-scroll-animation";

function HeroScrollDemo() {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black">
            <br />
            <span className="text-2xl md:text-[3rem] font-semibold leading-none">
              Our Projects are built through a very careful and precise process.
            </span>
          </h1>
        </>
      }
    >
      <video
        className="w-full h-full object-cover"
        src={VIDEO_URL?.NovaWatches}
        muted
        loop
        autoPlay
        playsInline
      />
    </ContainerScroll>
  );
}

const Projects = () => {
  return (
    <>
      <HeroScrollDemo />
    </>
  );
};

export default Projects;

// <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
// Our Projects
// </h2>

// <p className="text-gray-600 text-lg mb-12 animate-fade-in-delayed">
// Our Projects are built through a very careful and precise process.
// </p>

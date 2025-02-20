import { SERVICES_URL, THUMBNAIL_URL, VIDEO_URL } from "@/utils/Constant";
import React, { useState, useRef } from "react";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  videoUrl,
  className,
  playOnHoverOnly, // Flag for controlling autoplay behavior
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gray-100 h-full ${className} border border-gray-500`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {playOnHoverOnly && (
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          playOnHoverOnly ? (isHovering ? "opacity-100" : "opacity-0") : "opacity-100"
        }`}
        src={videoUrl}
        muted
        playsInline
        loop
        autoPlay={!playOnHoverOnly} // Only autoplay if not playOnHoverOnly
      />
    </div>
  );
};

const Grid = () => {
  const projects = [
    {
      id: 1,
      title: "Design and Digital Advertising Agency",
      description: "Shopify apps that simplify your workflow",
      thumbnail: THUMBNAIL_URL?.NovaWatches,
      videoUrl: VIDEO_URL?.NovaWatches,
      playOnHoverOnly: true, // Play only on hover
    },
    {
      id: 2,
      title: "Effortless Style",
      description: "Web Apps: Keep track of the bigger picture",
      thumbnail: THUMBNAIL_URL?.JaiMulti,
      videoUrl: VIDEO_URL?.JaiMulti,
      playOnHoverOnly: false, // Play automatically
    },
    {
      id: 3,
      title: "Sense Original",
      description: "Dashboards, CRMs and ERPs: Transform daily tasks",
      thumbnail: THUMBNAIL_URL?.Krackpot,
      videoUrl: VIDEO_URL?.Krackpot,
      playOnHoverOnly: false, // Play automatically
    },
    {
      id: 4,
      title: "French Fry Features",
      description: "Combining artistry and functionality",
      thumbnail: THUMBNAIL_URL?.FrenchFry,
      videoUrl: VIDEO_URL?.FrenchFry,
      playOnHoverOnly: true, // Play only on hover
    },
  ];

  return (
    <section className="h-screen p-4 md:p-6 flex items-center justify-center w-full">
      <div className="h-[85%] w-[65%] mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 h-1/2">
          <div className="w-full md:w-[40%]">
            <ProjectCard {...projects[0]} />
          </div>
          <div className="w-full md:w-[60%]">
            <ProjectCard {...projects[1]} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-1/2">
          <div className="w-full md:w-[60%]">
            <ProjectCard {...projects[2]} />
          </div>
          <div className="w-full md:w-[40%]">
            <ProjectCard {...projects[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;

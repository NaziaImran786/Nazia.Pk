"use client";
import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData: {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}[] = [
  {
    id: 1,
    title: "Agentia AI Website",
    description: "Project 1 description",
    image: "./images/myprojects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/Agentia_AI",
    previewUrl: "https://agentia-ai-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "Project 2 description",
    image: "/images/myprojects/2.png",
    tag: ["All", "web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/hackathon-02-new",
    previewUrl: "https://hackathon-02-new.vercel.app/",
  },
  {
    id: 3,
    title: "Blog website",
    description: "Project 3 description",
    image: "/images/myprojects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/Blog-website",
    previewUrl: "https://blog-website-rho-gules.vercel.app/",
  },
  {
    id: 4,
    title: "Governor Initiative website",
    description: "Project 4 description",
    image: "/images/myprojects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/governor-initiative-website/",
    previewUrl: "https://governor-initiative-website-multipage.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio with CSS",
    description: "Project 5 description",
    image: "/images/myprojects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/Portfolio-by-Nazia-Imran",
    previewUrl: "https://nazia-imran-portfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio with Nextjs website",
    description: "Project 6 description",
    image: "/images/myprojects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/Portfolio-with-tailwindcss-nextjs",
    previewUrl: "https://portfolio-with-tailwindcss-nextjs.vercel.app/",
  },
  {
    id: 7,
    title: "Figma Template Design by Me",
    description: "Project 7 description",
    image: "/images/myprojects/7.png",
    tag: [ "All", "Web", "Mobile"],
    gitUrl: "https://www.figma.com/proto/kAZPu8uI5QCiTXpbTuc3t1/Nazia-website?node-id=107-81&node-type=canvas&t=KLTjT9gIn6hRLynE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=107%3A81",
    previewUrl: "https://www.figma.com/proto/kAZPu8uI5QCiTXpbTuc3t1/Nazia-website?node-id=107-81&node-type=canvas&t=KLTjT9gIn6hRLynE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=107%3A81",
  },
  {
    id: 8,
    title: "Resume Generator website",
    description: "Project 8 description",
    image: "/images/myprojects/8.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/hackathon-milestone-5",
    previewUrl: "https://hackathon-milestone-5-ruddy.vercel.app/",
  },
  {
    id: 9,
    title: "Growth Mindset Challenge",
    description: "Project 9 description",
    image: "/images/myprojects/9.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/NaziaImran786/Growth-Mindset",
    previewUrl: "https://growth-mindset-4df.streamlit.app/",
  }
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTabChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
};

const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTabChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
        {filteredProjects.map((project) => (
          <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl} imgUrl={project.image}  />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

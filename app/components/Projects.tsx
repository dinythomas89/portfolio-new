import React from "react";
import ProjectItem from "./ProjectItem";
import { myProjects } from "../myProjects";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-2 ">
        <p className="tracking-widest uppercase text-lg text-[#5651e5]">projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {myProjects.map((myProject, index) => (
            <ProjectItem key={index} project={myProject} moreInfo="/property" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

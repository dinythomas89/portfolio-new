import React from "react";
import { mySkills } from "../mySkills";

type mySkills = {
  name: string;
  logo: string;
}[];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="tracking-widest uppercase text-lg text-[#5651e5]">skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl m-auto rounded-xl hover:scale-105 ease-in duration-300"
            >
              <img src={skill.logo} alt={skill.name} width={64} height={64} />
              <p className="text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

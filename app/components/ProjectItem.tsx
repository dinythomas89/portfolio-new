import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectItem = {
    name:string,
    image: string| StaticImageData;
    url:string
}
type ProjectItemProps={
    project: ProjectItem,
    moreInfo:string
}

const ProjectItem = ({project, moreInfo}:ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project.image}
              alt="/"
              width={300}
              height={300}
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Property</h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href={moreInfo}><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p></Link>
            </div>
          </div>
  )
}

export default ProjectItem
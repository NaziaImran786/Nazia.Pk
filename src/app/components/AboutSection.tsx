'use client';
import React,{useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from "process";


const TAB_DATA = [
  {
    title: "Skills",
    id:  "skills",
    content: (
      <ul className="list-dics pl-2">        
        <div className="flex flex-col gap-1"><li>HTML</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-5/6 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>CSS</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-5/6 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Tailwind CSS</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-5/6 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>JavaScript</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-3/4 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>TypeScript</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-10/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Node.Js</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-11/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Next.Js</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-10/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Sanity CMS</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Figma</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>    
        <div className="flex flex-col gap-1"><li>GitHub</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-10/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Vercel</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Python</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Streamlit</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-8/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Shadcn</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-10/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Sweeper.Js</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Framer Motion</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-9/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Canva</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-10/12 bg-purple-500"></div></div></div>
        <div className="flex flex-col gap-1"><li>Microsoft office</li><div className="h-4 rounded-2xl w-full bg-white"><div className="h-4 rounded-2xl w-11/12 bg-purple-500"></div></div></div>
      </ul>
    )
  },
  {
    title: "Education",
    id:  "education",
    content: (
      <ul className="list-dics pl-2">
        <li>Agentic AI Engineering from PIAIC (ongonig)</li>
        <li>Fullstack Developer from Governor Sindh Initiative</li>
        <li>Matriculation from Khan Children Academy</li>
        <li>Fsc from Abdullah Govt. Girls College</li>                
      </ul>
    )
  },
  {
    title: "Certifications",
    id:  "certifications",
    content: (
      <ul className="list-dics pl-2">
        <li>CIT from Anus Academy</li>
        <li>Fullstack Developer from Governor Sindh Initiative</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] =useState('skills')
  const [isPending, startTransition] = useTransition()

  const  handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id)
    })
  };
  return (
    <>
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/lab.jpg" alt="lab.jpg" width={500} height={700} />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack developer with a passion for creating innovative
            and user-friendly applications. I Have experience working with
            HTML, CSS, TailwindCSS, Typescript, Next.Js, Node.Js and UI /UX.
            Recently pursuing Agentic AI Development, exploring the intersection 
            of Python, Streamlit, and UV to build intelligent web applications. I 
            am a quick learner and I am Always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            
            <TabButton 
               selectTab={()=> handleTabChange('skills')} 
               active={tab ==="skills"}
              >
               {" "}
               Skills{" "}
            </TabButton>
            <TabButton 
               selectTab={()=> handleTabChange('education')} 
               active={tab ==="education"}
              >
               {" "}
               Education{" "}
            </TabButton>
            <TabButton 
               selectTab={()=> handleTabChange('certifications')} 
               active={tab ==="certifications"}
              >
               {" "}
               Certifications{" "}
            </TabButton>            
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)!.content}</div>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default AboutSection;

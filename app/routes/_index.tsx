import type { V2_MetaFunction } from "@remix-run/node";
import Section from "~/components/section";

import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

import profilePic from "../images/profilepic.jpeg";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio | Home" },
    { name: "description", content: "Home page of Guilherme Weisshimer portfolio" },
  ];
};

export default function Index() {

  return (
    <>
      <main 
        className="flex flex-col items-center max-w-[532px] m-auto pt-14 px-4 text-black animate-section"
      >
        {/* <div className="min-w-[600px] min-h-[600px] bg-white">
          <p>canva</p>
        </div> */}

        <p className="flex items-center justify-center text-black p-3 rounded-lg bg-light-200 mb-6 dark:bg-dark-200 dark:text-white w-full">Hello, I&apos;m a fullstack developer based in Brazil</p>

        <section className="flex flex-col justify-between md:flex-row md:items-center w-full mb-6">
          <div>
            <h2 className="text-3xl font-semibold dark:text-white">Guilherme Weisseimer</h2>
            <p className="dark:text-white text-base">Digital Craftzman ( Developer / Design) </p>
          </div>
          <img  
            src={profilePic} 
            alt="Profile Pic" 
            className="w-24 h-24 rounded-full self-center mt-4 md:m-0"/>
        </section>

        
        <Section header="Work">
          <p 
            className="text-black dark:text-white indent-4 text-justify"
          >
              Im a student and full-stack developer based in  z Brazil with a passion for building things and solve problems while i'm coding. I'm currently just studying, but i like to deal whit problems that come up through my friends or even mine
          </p>
        
          <div className="my-4 flex justify-center">
            <Link 
              to="/works"
              className="text-white rounded bg-green-500 font-semibold h-10 flex px-4 items-center hover:bg-green-600 dark:text-black"
            >
              My portfolio
              <span className="ml-2">&#62;</span>
            </Link>
          </div>
        </Section>
        

        <Section header="Bio">
          <div className="dark:text-white">
            <span className="mr-4 font-semibold">2000</span>
            Born in Caxias do Sul - Brazil
          </div>

          <div className="dark:text-white">
            <span className="mr-4 font-semibold">2022</span>
            Complete the IT thechnical course at UNIVATES 
          </div>

          <div className="dark:text-white">
            <span className="mr-4 font-semibold">2023</span>
            Software Engineering - In progress
          </div>
        </Section>

        <Section header="Social">
          <a 
            href="www.google.com"
            target="_blank"
            rel="external"
            className="block w-fit"

          >
            <button
              className="flex items-center cursor-pointer h-10 px-4 text-green-600 font-semibold rounded hover:bg-green-300 dark:text-green-200 dark:hover:bg-green-100 "
            >
              <GitHubLogoIcon 
                width={16} 
                height={16} 
                className="mr-2"
                />
              @GuilhermeW1
            </button>
          </a>

          <a 
            href="www.google.com"
            target="_blank"
            rel="external"
            className="block w-fit"

          >
            <button
              className="flex items-center cursor-pointer h-10 px-4 text-green-600 font-semibold rounded hover:bg-green-300 dark:text-green-200 dark:hover:bg-green-100 "
            >
              <InstagramLogoIcon 
                width={16} 
                height={16} 
                className="mr-2"
              />
              @gui_weiss
            </button>            
          </a>

          <a 
            href="www.google.com"
            target="_blank"
            rel="external"
            className="block w-fit"
          >
            <button
              className="flex items-center cursor-pointer h-10 px-4 text-green-600 font-semibold rounded hover:bg-green-300 dark:text-green-200 dark:hover:bg-green-100 w-fit m-0"
            >
              <LinkedInLogoIcon 
                width={16} 
                height={16} 
                className="mr-2"
              />
              @linkedin
            </button>            
          </a>

          <a 
            href="mailto:guilherme.w1@gmail.com"
            className="block w-fit"
          >
            <button
              className="flex items-center cursor-pointer h-10 px-4 text-green-600 font-semibold rounded hover:bg-green-300 dark:text-green-200 dark:hover:bg-green-100 w-fit m-0"
            >
              <EnvelopeClosedIcon
                width={16} 
                height={16} 
                className="mr-2"
              />
              guilherme.w1@gmail.com
            </button>            
          </a>
        </Section>
      </main>
      <footer 
        className="text-sm text-gray-400 justify-center flex pb-8 pt-3"
      >
        &copy; 2023 Guilherme Weissheimer. All Rights Reserved.
      </footer>
    </>
  );
}

import type { V2_MetaFunction } from "@remix-run/node";

import profilePic from "../images/profilepic.jpeg";

import Navbar from "~/components/navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portifolio | Home" },
    { name: "description", content: "Home page of Guilherme Weisshiemr portifolio" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="h-14 fixed top-0 left-0 right-0 flex gap-1 items-center bg-light-200 dark:bg-dark-400">
        <Navbar/>
      </header>
      <main 
        className="flex flex-col items-center max-w-[532px] m-auto pt-14 px-4 text-black"
      >
        {/* <div className="min-w-[600px] min-h-[600px] bg-white">
          <p>canva</p>
        </div> */}

        <p className="flex items-center justify-center text-black p-3 rounded-lg bg-light-200 mb-6 dark:bg-dark-200 dark:text-white w-full">Hello, I&apos;m a fullstack developer based in Brazil</p>

        <div className="flex flex-col md:flex-row md:items-center w-full ">
          <div>
            <h2 className="text-4xl font-semibold dark:text-white">Guilherme Weisseimer</h2>
            <p className="dark:text-white text-base">Digital Craftzman ( Developer / Design) </p>
          </div>
          <img  
            src={profilePic} 
            alt="Profile Pic" 
            className="w-24 h-24 rounded-full self-center mt-4 md:m-0"/>
        </div>

        <div>
          <h3>Work</h3>
          <p 
            className="text-black dark:text-white"
          >
            Im a student and full-stack developer based in Brazil with a passion for building things and solve problems while i'm coding. I'm currently just studying, but i like to deal whit problems that come up through my friends or even mine
          </p>
          <p 
            className="text-black dark:text-white"
          >
            Im a student and full-stack developer based in Brazil with a passion for building things and solve problems while i'm coding. I'm currently just studying, but i like to deal whit problems that come up through my friends or even mine
          </p>
          <p 
            className="text-black dark:text-white"
          >
            Im a student and full-stack developer based in Brazil with a passion for building things and solve problems while i'm coding. I'm currently just studying, but i like to deal whit problems that come up through my friends or even mine
          </p>
        </div>  
      </main>
    </>
  );
}

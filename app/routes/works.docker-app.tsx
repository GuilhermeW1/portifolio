import type { V2_MetaFunction } from "@remix-run/node";

import LoginDocker from '../images/docker-app/login.png';
import DesktopDocker from '../images/docker-app/desktop.png';

export const meta: V2_MetaFunction = () => {
  return [
    {title: 'Portfolio | Docker App'}
  ];
};

export default function DockerApp(){
  return(
    <main 
    className="max-w-[532px] m-auto p-4 animate-section"
  >
    <h2 className="text-xl pb-4 font-semibold dark:text-light-200">Docker App</h2>
    <p className="text-base dark:text-white"> 
      &nbsp;&nbsp;&nbsp;&nbsp;It was an application designed for real-time 'financial' transactions. The project faced several challenges, including the requirements for responsiveness and complete Dockerization. Additionally, an ORM library was integrated along with a database to meet the project's specifications.
    </p>

    <ul className="my-4 ml-4">
      <li> 
        <span className="font-semibold bg-green-150 px-2 rounded dark:text-green-500">PLATFORM</span>
        <span className="pl-4 dark:text-white">Web</span>
      </li>

      <li>
      <span className="font-semibold bg-green-150 px-2 rounded dark:text-green-500">STACK</span>
        <span className="pl-4 dark:text-white">React, Docker, Typescript, PostgreSQL, Prisma</span>
      </li>
    </ul>

    <div className='flex flex-col mt-4'>
        <img 
          src={LoginDocker} 
          alt="Xp-app agendamento" 
          className=' self-center'
        />

        <img 
          src={DesktopDocker} 
          alt="Xp-app agendamento" 
          className='self-center mt-4'
        />  
      </div> 
  </main>
  );
}
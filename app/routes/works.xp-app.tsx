import XPAppAgendamentos from '../images/xp-app/xp-app-agendamentos.png';
import type { V2_MetaFunction } from "@remix-run/node";

import XPAppServices from '../images/xp-app/xp-app-servicos.png';


export const meta: V2_MetaFunction = () => {
  return [
    {title: 'Portfolio | XP App'}
  ];
};

export default function XpApp(){
  return(
    <main 
    className="max-w-[532px] m-auto p-4 animate-section"
    >
      <h2 className="text-xl pb-4 font-semibold dark:text-light-200">XP app</h2>
      <p className="text-base dark:text-white"> 
      &nbsp;&nbsp;&nbsp;&nbsp;An app made to manage a small business with the main purpose to schedule appointments and maintaining a correct and clean flow of service hours.
      </p>

      <ul className="my-4 ml-4">
        <li> 
          <span className="font-semibold bg-green-150 px-2 rounded dark:text-green-500">PLATFORM</span>
          <span className="pl-4 dark:text-white">Android</span>
        </li>

        <li>
        <span className="font-semibold bg-green-150 px-2 rounded dark:text-green-500">STACK</span>
          <span className="pl-4 dark:text-white">React Native, Firebase, Typescript</span>
        </li>
      </ul>

      <div className='flex flex-col mt-4'>
        <img 
          src={XPAppAgendamentos} 
          alt="Xp-app agendamento" 
          className='max-w-[250px] self-center'
        />

        <img 
          src={XPAppServices} 
          alt="Xp-app agendamento" 
          className='max-w-[250px] self-center mt-4'
        />  
      </div>  
    </main>
  );
}
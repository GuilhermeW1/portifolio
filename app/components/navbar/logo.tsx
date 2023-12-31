import { Link } from "@remix-run/react";

import paw from 'app/images/paw-white.png';
import pawDark from 'app/images/paw-dark.png';
import { useState } from "react";

type LogoProps = {
  isDark: boolean;
}

export default function Logo({isDark}: LogoProps){
  const [rotate, setRotate] = useState(false);

  return(
    <Link
      to="/"
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      className="flex flex-row items-center justify-center ">
      {isDark ?
        <img 
          src={paw} 
          alt='paw icon' 
          loading="lazy" 
          className={`${rotate ? "animate-rotate" : 'animate-rotateBack'} w-4 h-4 transform -rotate-12`}/> 
      : 
        <img 
          src={pawDark} 
          alt='paw icon' 
          loading="lazy"
          className={`${rotate ? "animate-rotate" : 'animate-rotateBack'} w-4 h-4 transform -rotate-12`}/>
      }
          
      <h2 className="text-lg font-semibold ml-1 text-black dark:text-white">Guilherme Weissheimer</h2>
    </Link>
  );
}
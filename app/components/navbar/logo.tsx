import { Link } from "@remix-run/react";

import paw from 'app/images/paw-white.png';
import pawDark from 'app/images/paw-dark.png';

type LogoProps = {
  isDark: boolean;
}

export default function Logo({isDark}: LogoProps){
  return(
    <Link
      to="/"
      className="flex flex-row items-center justify-center">
      {isDark ?
        <img src={paw} alt='paw icon' className="w-4 h-4 transform -rotate-12"/> 
      : 
        <img src={pawDark} alt='paw icon' className="w-4 h-4 transform -rotate-12"/>
      }
          
      <h2 className="text-lg font-semibold ml-1 text-black dark:text-white">Guilherme Weissheimer</h2>
    </Link>
  );
}
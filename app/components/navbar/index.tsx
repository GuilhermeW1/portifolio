import { Link } from "@remix-run/react";
import { Theme } from "~/ui/theme/utils";
import { useTheme } from "~/ui/theme/theme-provider";
import ToggleTheme from "./toggle-theme-button";


import MobileMenu from "./mobile-menu";
import Logo from "./logo";

function Navbar(){
  const { theme } = useTheme();
  const isDark = theme === Theme.DARK;

  return(
    <nav className="flex max-w-5xl w-full m-auto items-center px-4 justify-between">
      <div className="flex gap-8 items-center">
        <Logo isDark={isDark}/>
        <div className="hidden gap-8 md:flex">
          <Link
            to="/works" 
            className="font-normal text-base text-black dark:text-white"
          >
              Works
          </Link>{" "}
          <Link 
            to="/about" 
            className="font-normal text-base text-black dark:text-white"
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <ToggleTheme/>

        <MobileMenu isDark={isDark}/>
      </div>
    </nav>
  );
}

export default Navbar;
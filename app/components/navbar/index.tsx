import { Link } from "@remix-run/react";
import { Theme } from "~/ui/theme/utils";
import { useTheme } from "~/ui/theme/theme-provider";
import ToggleTheme from "./toggle-theme-button";


import MobileMenu from "./mobile-menu";
import Logo from "./logo";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface NavbarProps {
  route: string;
}

function Navbar({route}: NavbarProps){
  console.log(route);
  const { theme } = useTheme();
  const isDark = theme === Theme.DARK;

  return(
    <nav className="flex max-w-5xl w-full m-auto items-center px-4 justify-between backdrop-blur">
      <div className="flex gap-8 items-center">
        <Logo isDark={isDark}/>
        <div className="hidden gap-2 md:flex">
          <Link
            to="/works" 
            
            className={`${route === '/works' ? "bg-green-450 text-black" : "text-black dark:text-white" } flex items-center justify-center font-normal text-base  p-2 hover:underline underline-offset-2 decoration-1`}
          >
              Works
          </Link>{" "}
          <Link 
            to="/about" 
            className={`${route === '/about' ? "bg-green-450 text-black" : "text-black dark:text-white" } flex items-center justify-center font-normal text-base p-2 hover:underline underline-offset-2 decoration-1`}
          >
            About
          </Link>
          <a 
            href="https://github.com/GuilhermeW1/portifolio" 
            rel="noreferrer"
            target="_blank"
            className={`flex items-center justify-center font-normal text-black dark:text-white text-base p-2 hover:underline underline-offset-2 decoration-1`}
          >
            <button className="flex flex-row items-center justify-center gap-1">
              <GitHubLogoIcon width={16} height={16}/>
              Source
            </button>
          </a>
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
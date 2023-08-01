import { useTheme } from "~/ui/theme/theme-provider";
import { Theme } from "~/ui/theme/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function ToggleTheme(){
  const [animation, setAnimation] = useState<boolean>(false);
  const { theme, setTheme} = useTheme();
  const isDark = theme === Theme.DARK;

  const toggleTheme = () => {
    setAnimation(true);
    setTheme(isDark ? Theme.LIGHT : Theme.DARK);
  };


  return(
    <button 
      className={`${animation && "animate-wiggle"} rounded flex items-center dark:bg-orange bg-blue h-10 w-10 p-3 will-change-transform`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      onAnimationEnd={() => setAnimation(false)}
    > 
      {isDark ? <SunIcon color="black" className="w-5 h-5" /> : <MoonIcon className="w-5 h-5"  color="white"/>}
    </button>
  );
}

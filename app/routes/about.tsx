import { useMatches } from "@remix-run/react";
import Navbar from "~/components/navbar";

export default function About(){
  const matches = useMatches();
  const [,route] = matches.map(path => path.pathname);

  return(
    <header className="h-14 fixed z-[2] top-0 left-0 right-0 flex backdrop-blur gap-1 items-center bg-light-200 dark:bg-dark-400">
        <Navbar route={route}/>
    </header>
  );
}
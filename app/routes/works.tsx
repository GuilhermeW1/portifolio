import type { V2_MetaFunction } from "@remix-run/node";
import { useMatches } from "@remix-run/react";
import Navbar from "~/components/navbar";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "Works | Portfolio"}
  ];
};

export default function Works(){
  const matches = useMatches();
  const [,route] = matches.map(route => route.pathname);
  
  return (
    <header className="h-14 fixed z-[2] top-0 left-0 right-0 flex backdrop-blur gap-1 items-center bg-light-200 dark:bg-dark-400">
        <Navbar route={route}/>
    </header>
  );
}
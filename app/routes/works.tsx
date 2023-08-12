import type { V2_MetaFunction } from "@remix-run/node";
import { useMatches } from "@remix-run/react";
import Navbar from "~/components/navbar";
import DiogoAppPik from "~/images/portifoplio-background-diogo-app.png";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "Works | Portfolio"}
  ];
};

export default function Works(){
  const matches = useMatches();
  const [,route] = matches.map(route => route.pathname);
  
  return (
    <>
      <header 
        className="h-14 fixed z-[2] top-0 left-0 right-0 flex   backdrop-blur gap-1 items-center bg-light-200 dark:bg-dark-400"
      >
          <Navbar route={route}/>
      </header>
      <main 
        className="max-w-[532px] m-auto pt-16 p-4"
      >
        
        <h2
          className="dark:text-white font-semibold text-2xl mb-4"
        >
          Works
        </h2>

        <section 
          className="flex items-center justify-center flex-col"
        >
          <img 
            src={DiogoAppPik} 
            alt="Pick app rn"
            className="rounded-3xl max-h-[320px] max-w-full w-full object-cover "
            loading="lazy"
          />
          <div 
            className="dark:text-white flex flex-col"
          >
            <h3 
              className="text-xl self-center"
            >
              XP app
            </h3>

            <p className="text-sm">
              A simple shcedule app to gerenciar commerce of manicure or another service and product 
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
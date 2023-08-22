import type { V2_MetaFunction } from "@remix-run/node";
import { useMatches } from "@remix-run/react";
import Navbar from "~/components/navbar";
import WorkSection from "~/components/workSection";

import DiogoAppPik from "~/images/portifoplio-background-diogo-app.png";
import DockerApp from "~/images/desktop.png";
import ExcelCsv from "~/images/excel-csv.png";

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

        <div 
          className="grid md:grid-cols-2 grid-cols-1 gap-6"
        >
          <WorkSection
            img={DiogoAppPik}
            title="XP app"
            subtext="A simple shcedule app to gerenciar commerce of manicure or another service and product"
          />
          <WorkSection
            img={DockerApp}
            title="Docker App"
            subtext="An app made to train my docker concepts,  with a api and a responsive front-end design"
          />
          <WorkSection
            img={ExcelCsv}
            title="Excel to CSV converter"
            subtext="App to convert excel files to csv files"
          />
        </div>
      </main>
    </>
  );
}
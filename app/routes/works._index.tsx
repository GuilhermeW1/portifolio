import type { V2_MetaFunction } from "@remix-run/node";
import WorkSectionLink from "~/components/workSection";

import DiogoAppPik from "~/images/portifoplio-background-diogo-app.png";
import DockerApp from "~/images/desktop.png";
import ExcelCsv from "~/images/excel-csv.png";
import TikTakToe from "~/images/tik-tak-toe.png";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "Works | Portfolio"}
  ];
};

export default function Works(){
  return (
    <main 
      className="max-w-[532px] m-auto pt-16 p-4 animate-section"
    >
      <h2
        className="dark:text-white font-semibold text-2xl mb-4"
      >
        Works
      </h2>
      <div 
        className="grid md:grid-cols-2 grid-cols-1 gap-6"
      >
        <WorkSectionLink
          img={DiogoAppPik}
          alt="Xp app"
          link="/works/xp-app"
          title="XP app"
          subtext="A simple shcedule app to gerenciar commerce of manicure or another service and product"
        />
        <WorkSectionLink
          img={DockerApp}
          alt="Docker app"
          link="/works/docker-app"
          title="Docker App"
          subtext="An app made to train my docker concepts,  with a api and a responsive front-end design"
        />
        <WorkSectionLink
          img={ExcelCsv}
          alt="excel to csv converter"
          link="/works/excel-to-csv"
          title="Excel to CSV converter"
          subtext="App to convert excel files to csv files"
        />
        <WorkSectionLink
          img={TikTakToe}
          alt="tik tak toe"
          link="/works/tik-tak-toe-multiplayer"
          title="Tik Tak Toe Multiplayer"
          subtext="Create rooms and play with your friends"
        />
      </div>
    </main>
  );
}
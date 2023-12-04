import type { V2_MetaFunction } from "@remix-run/node";
import WorkSectionLink from "~/components/workSection";

import DiogoAppPik from "~/images/xp-app/portifoplio-background-diogo-app.png";
import DockerApp from "~/images/docker-app/desktop.png";
import ExcelCsv from "~/images/excel-csv.png";
import TikTakToe from "~/images/tik-tak-toe/tik-tak-toe.png";
import LetMeAsk from "~/images/let-me-ask/let-me-ask-home.png";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "Portfolio | Works"}
  ];
};

export default function Works(){
  return (
    <main 
      className="max-w-[532px] m-auto p-4 animate-section"
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
          subtext="A scheduling app to manage a small manicure business"
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
        <WorkSectionLink
          img={LetMeAsk}
          alt="Let Me Ask"
          link="/works/let-me-ask"
          subtext="A q&a realtime chat, to create rooms and send/recive questions"
          title="Let Me Ask"
        />
      </div>
    </main>
  );
}
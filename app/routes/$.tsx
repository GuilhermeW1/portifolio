import SVGNotFound from "~/images/undraw_page_not_found_re_e9o6.svg";

export default function Default(){
  return(
    <div 
      className="h-screen w-screen"
    > 
      <div 
        className="flex flex-1 flex-col m-auto h-full max-w-[500px] items-center justify-center"
      >
        <img src={SVGNotFound} alt="svg not found" />
        <h1 className="dark:text-white text-4xl">Page not found</h1>
      </div>
    </div>
  );
}
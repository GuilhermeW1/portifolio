import { Link } from "@remix-run/react";

interface WorkSectionProps {
  img: string;
  title: string;
  subtext: string;
  link: string;
}

export default function WorkSectionLink({img, title, subtext, link}: WorkSectionProps){
  return(
    <Link 
      className="mb-4"
      to={link}
    >
      <img 
        src={img} 
        alt="Pick app rn"
        className="rounded-xl md:max-h-[158px] max-h-[300px] md:max-w-[240px] w-full md:h-full object-fill"
        loading="lazy"
      />
      <div 
        className="dark:text-white flex flex-col mt-2"
      >
        <h3 
          className="text-xl self-center"
        >
          {title}
        </h3>

        <p className="text-sm text-center">
          {subtext}
        </p>
      </div>
    </Link>
  );
}
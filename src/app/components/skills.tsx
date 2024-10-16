import {
  SiGraphql,
  SiHasura,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { Subheading } from "./ui/subheading";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";

const items = [
  {
    icon: FaReact,
    alt: "React",
  },
  {
    icon: SiTypescript,
    alt: "TypeScript",
  },
  {
    icon: FaNodeJs,
    alt: "NodeJs",
  },
  {
    icon: SiGraphql,
    alt: "GraphQL",
  },
  {
    icon: SiPostgresql,
    alt: "Postgresql",
  },
  {
    icon: SiHasura,
    alt: "Hasura",
  },
  {
    icon: FaAws,
    alt: "AWS",
  },
];

export const Skills = () => {
  return (
    <>
      <Subheading text="Skills" />
      <div className="flex flex-wrap gap-8">
        {items.map((item) => (
          <div key={item.alt} className="relative group">
            <item.icon size={36} aria-label={item.alt} />
            <span className="absolute bottom-full mb-2 hidden w-max bg-gray-800 text-white text-xs rounded-md p-1 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200">
              {item.alt}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

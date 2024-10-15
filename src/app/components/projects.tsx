import { Subheading } from "./ui/subheading";

const items = [
  {
    title: "The After Project",
    description:
      "Personal trainer focused on online coaching for busy individuals.",
    link: "https://theafterproject.com.au/",
  },
];

export const Projects = () => {
  return (
    <>
      <Subheading text="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <h5 className="flex items-center space-x-2 mb-2">
              <span className="font-bold">{item.title}</span>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 
                      text-gray-400
                      "
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              </a>
            </h5>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

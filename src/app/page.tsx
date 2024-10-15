import WorkExperience from "./components/work-experience";
import { Section } from "./components/ui/section";
import { Subheading } from "./components/ui/subheading";

const items = [
  {
    title: "The After Project",
    description:
      "Personal trainer focused on online coaching for busy individuals.",
    link: "https://theafterproject.com.au/",
  },
];

const links = [
  {
    text: "james-duong-9168a89a",
    href: "https://www.linkedin.com/in/james-duong-9168a89a/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19.75h-2.5v-9.5h2.5v9.5zm-1.25-10.75h-.03c-.83 0-1.37-.55-1.37-1.24 0-.7.55-1.25 1.4-1.25.83 0 1.37.55 1.37 1.25-.01.69-.54 1.24-1.37 1.24zm13.25 10.75h-2.5v-4.98c0-1.25-.44-2.1-1.56-2.1-.85 0-1.36.57-1.58 1.12-.08.19-.1.45-.1.71v5.25h-2.5v-9.5h2.5v1.3c.33-.51.93-1.24 2.27-1.24 1.66 0 2.91 1.08 2.91 3.39v6.05z" />
      </svg>
    ),
  },
  {
    text: "jpduong",
    href: "https://github.com/jpduong",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    text: "jamesduong",
    href: "https://www.instagram.com/jamesduong/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Main() {
  return (
    <div>
      <div className="container mx-auto max-w-2xl px-4">
        <Section>
          <img
            alt="me"
            src="/avatar.jpeg"
            className="object-cover inline-block h-24 w-24 rounded-full mb-5 mt-10 md:mt-20"
          />
          <h2 className="text-xl mb-8 font-semibold">
            I&apos;m James -- a software engineer.
          </h2>
          <p className="mb-4">
            I started in the finance industry, then pivoted to software
            engineering role after completing a 6 month bootcamp in web
            development. You can read more{" "}
            <a
              href="https://medium.com/@jamesphongduong/my-personal-journey-to-code-618e4b75e9b"
              target="_blank"
              rel="noopener noreferrer"
              className="underline
              text-gray-400
              "
            >
              here
            </a>
            . In my spare time, I play basketball or spend time with my partner
            and toy poodle.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <img
              alt="biscuit, my toy poodle"
              src="/biscuit-1.jpg"
              className="object-contain inline-block"
            />
            <img
              alt="biscuit, my toy poodle"
              src="/biscuit-2.jpg"
              className="object-contain inline-block"
            />
          </div>
        </Section>
        <Section>
          <Subheading text="Work Experience" />
          <WorkExperience />
        </Section>
        <Section>
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
        </Section>
        <Section>
          <Subheading text="Socials" />
          <div className="flex gap-x-2">
            {links.map((link) => (
              <a
                key={link.text}
                className="p-2 px-4 bg-gray-100 rounded text-xs flex items-center gap-x-2 border border-gray-200"
                href={link.href}
                target="_blank"
              >
                {link.icon && (
                  <link.icon aria-hidden="true" className="h-5 w-5" />
                )}
                {link.text}
              </a>
            ))}
          </div>
        </Section>
      </div>
      <footer className="border-t border-gray-300 py-10">
        <div className="container mx-auto max-w-2xl px-4">
          <p className="text-xs text-gray-400 font-light">
            © 2024 James Duong. All rights reserved.&nbsp;
          </p>
        </div>
      </footer>
    </div>
  );
}

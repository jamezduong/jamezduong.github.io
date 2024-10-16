import { Subheading } from "./ui/subheading";

export const CalendlyWidget = () => {
  return (
    <>
      <Subheading text="Talk with me" />
      <p className="mb-4">Have an idea or want to find out more?</p>
      <p className="mb-4">
        <a
          href="https://calendly.com/jamesduong1"
          target="_blank"
          rel="noopener noreferrer"
          className="underline
        text-gray-400
        "
        >
          <button
            className="
            rounded
            bg-black
            text-white
            px-6
            py-3
            text-sm
            font-semibold
            "
          >
            Book a Meeting {"->"}
          </button>
        </a>
      </p>
    </>
  );
};

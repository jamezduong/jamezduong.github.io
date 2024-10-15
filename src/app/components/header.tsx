export const Header = () => {
  return (
    <>
      <img
        alt="me"
        src="/avatar.jpeg"
        className="object-cover inline-block h-24 w-24 rounded-full mb-5 mt-10 md:mt-20"
      />
      <h2 className="text-xl mb-8 font-semibold">
        I&apos;m James -- a software engineer.
      </h2>
      <p className="mb-4">
        I started in the finance industry, then pivoted to software engineering
        role after completing a 6 month bootcamp in web development. You can
        read more{" "}
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
        . In my spare time, I play basketball or spend time with my partner and
        toy poodle.
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
    </>
  );
};

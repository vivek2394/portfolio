import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-blue mb-10">About Me</h2>
      <p>
        I’m Vivek, Full Stack Developer with a strong foundation in front-end
        and back-end technologies, specializing in Node.js and React.js.
        Experienced in building scalable, high-performance web applications with
        RESTful APIs, authentication, and database management. Proficient in
        state management Redux, Context API and Passionate about writing clean,
        efficient code and optimizing performance for a seamless user
        experience.
      </p>
      <button className="border border-blue rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-blue transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

import SingleSkill from "./SingleSkill";

import { IoLogoJavascript } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NodeJs",
    icon: IoLogoNodejs,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "MongoDb",
    icon: SiMongodb,
  },
  {
    skill: "fireBase",
    icon: DiFirebase,
  },

  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
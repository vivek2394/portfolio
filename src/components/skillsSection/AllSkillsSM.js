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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            {/* Changed text color from orange to blue */}
            <item.icon className="text-7xl text-blue" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

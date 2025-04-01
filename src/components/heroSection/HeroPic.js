import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { IoEllipse } from "react-icons/io5"; // Import circular icon

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)} // Apply fade-in effect from left
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Circular Floating Background Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0], // Moves up and down
          rotate: [0, 360], // Rotates continuously
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -z-10 flex justify-center items-center"
      >
        {/* Circular Icon with Blue Glow */}
        <IoEllipse className="text-blue/40 w-[350px] h-[350px] md:w-[450px] md:h-[450px] animate-spin-slow blur-md" />
      </motion.div>

      {/* Circular Image with Soft Shadow & Fade-in Effect */}
      <motion.div
        variants={fadeIn("up", 0.3)} // Apply fade-in effect from bottom
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg shadow-blue/50"
      >
        <img
          src="images/myimage.jpeg"
          alt="Vivek Dutt Budhodi"
          className="w-full h-full object-cover rounded-full shadow-lg shadow-blue/30"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;

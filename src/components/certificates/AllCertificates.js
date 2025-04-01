import React from "react";
import { motion } from "framer-motion";
const AllCertificates = () => {

    const certificates = [
        {
          id: 1,
          title: "ReactJs Frontend Certification",
          image: "images/Reactcertificate.png", // Replace with actual image path
          link: "https://certificate.codingninjas.com/view/bfff03f8a1dde4c3", // Replace with actual certificate URL
        },
        {
          id: 2,
          title: "Node.js Backend Certificate",
          image: "images/Nodejscertificate.png",
          link: "https://certificate.codingninjas.com/view/8e659049fb64cd1f",
        },
        {
          id: 3,
          title: "Full-Stack Web-developer",
          image: "images/Fullstackdevelopercertificate.png",
          link: "https://certificate.codingninjas.com/view/fdc16cb21270f637",
        },
        {
            id: 1,
            title: "Java Certificate",
            image: "images/Javacertificate.png", // Replace with actual image path
            link: "https://certificate.codingninjas.com/view/0d666d26004c71a1", // Replace with actual certificate URL
          },
          {
            id: 1,
            title: "Data Structure And Algorithms Certificate",
            image: "images/DSAcertifcate.png", // Replace with actual image path
            link: "https://certificate.codingninjas.com/view/fc95061469470275", // Replace with actual certificate URL
          },
        
      ];
      const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    
      return (
        <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center py-10">
          {/* Section Heading with Cyan Color */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeInVariant}
            viewport={{ amount: 0.3 }}
            className="text-3xl font-bold text-center text-blue mb-8"
          >
            My Certificates
          </motion.h2>
    
          {/* Certificate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="flex justify-center"
                initial="hidden"
                whileInView="show"
                variants={fadeInVariant}
                viewport={{ amount: 0.3, once: false }}
              >
                {/* Certificate Card with Blue Border & Shadow */}
                <div className="relative bg-black p-4 rounded-lg border border-blue shadow-lg shadow-blue-300/50 w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-blue-500 hover:shadow-md">
                  {/* Certificate Image */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[250px] object-cover rounded-md"
                  />
    
                  {/* Certificate Title with Cyan Color */}
                  <h3 className="text-lg text-orange font-semibold mt-4 text-center">
                    {cert.title}
                  </h3>
    
                  {/* View Certificate Button with Hover Effect */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-2 text-blue-400 text-blue hover:text-green underline transition-all duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };

export default AllCertificates

import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";

import { motion } from "framer-motion";
const Skills = () => {
  return ( 
    <>
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true, amount:0.4}}
      transition={{delay:0.4,duration:0.4}}
    
    className="skills-container w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center mt-40" id="skills">
    <h5 className='text-[purple] uppercase pb-2'>what skills i have</h5>
      <h2 className="text-3xl font-bold mb-12 uppercase text-[#353635] ">my stack</h2>
     <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <li className="  p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-700"><IoLogoHtml5 className=" mr-3"/>html</li>
      <li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><IoLogoCss3 className=" mr-3"/>CSS</li>
      <li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><BiLogoTailwindCss className=" mr-3"/>tailwind</li>
      <li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><IoLogoJavascript className=" mr-3"/>javascript</li>
      <li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><FaReact className=" mr-3"/>react</li>
    <li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><SiNextdotjs className="mr-3"/>next.js</li>
<li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><SiTypescript className="mr-3"/>typescript</li>
<li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><SiMongodb className="mr-3"/>mongodb</li>
<li className=" p-4 rounded-xl shadow hover:shadow-lg flex items-center text-xl md:text-4xl mb-4 text-[purple] capitalize  transition duration-300"><TbBrandRedux className=" mr-3"/>redux toolkit</li>
     </ul>
    </motion.div>
    </>
   );
}
 
export default Skills;
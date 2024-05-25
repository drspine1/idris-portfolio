import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
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
    <h5 className='text-[#c1e8ff] uppercase pb-2'>what skills i have</h5>
      <h2 className="text-3xl font-bold mb-12 uppercase text-[#b1aeae] ">my stack</h2>
     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><IoLogoHtml5 className="text-[#c1e8ff] mr-3"/>html</li>
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><IoLogoCss3 className="text-[#c1e8ff] mr-3"/>css</li>
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><BiLogoTailwindCss className="text-[#c1e8ff] mr-3"/>tailwind</li>
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><IoLogoJavascript className="text-[#c1e8ff] mr-3"/>javascript</li>
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><FaReact className="text-[#c1e8ff] mr-3"/>react</li>
      <li className="flex items-center text-4xl mb-4 text-white capitalize"><TbBrandRedux className="text-[#c1e8ff] mr-3"/>redux toolkit</li>
     </ul>
    </motion.div>
    </>
   );
}
 
export default Skills;
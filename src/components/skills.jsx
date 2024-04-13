import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
const Skills = () => {
  return ( 
    <>
    <div id="skill" className="skills-component w-[100%] md:w-[90%] lg:w-[60%] mx-auto text-center mt-40 mb-10">
    <h5 className="text-[#eae7e7] text-[0.9rem] uppercase font-medium">what skills i have</h5>
      <h2 className="text-[#b0e5ef] capitalize text-3xl font-semibold pt-1">my experience</h2>

      <div className="skills mt-16 w-[90%] md:w-[80%] mx-auto  bg-[#137eb7] rounded-sm py-5 pt-12">
        <h2 className="text-3xl capitalize font-semibold text-[#b0e5ef] pb-10">frontend developement</h2> 
       <ul className="skill grid grid-cols-2 ">
        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><FaHtml5 className="mr-3 text-[#b0e5ef]"/>html</h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">experienced</h4>
        </li>
        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><IoLogoCss3 className="mr-3 text-[#b0e5ef]"/>css</h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">experienced</h4>
        </li>

        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><SiTailwindcss className="mr-3 text-[#b0e5ef]"/>tailwind </h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">experienced</h4>
        </li>
        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><FaBootstrap className="mr-3 text-[#b0e5ef]"/>bootstrap</h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">intermediate</h4>
        </li>

        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><RiJavascriptFill className="mr-3 text-[#b0e5ef]"/>javascript</h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">intermediate</h4>
        </li>

        <li className="mb-12">
          <h2 className="flex items-center justify-center text-2xl capitalize font-medium pb-2 text-[whitesmoke]"><FaReact className="mr-3 text-[#b0e5ef]"/>react js</h2>
              <h4 className="text-[#eae7e7] text-lg capitalize">experienced</h4>
        </li>
       </ul>
      </div>
    </div>
    </>
   );
}
 
export default Skills;
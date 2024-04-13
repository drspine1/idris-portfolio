import { FaCode } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import { Link } from "react-scroll";
const About = () => {
  return ( 
    <>
    <div id="about" className="about-component w-[90%] mx-auto text-center mt-40">
      <h5 className="text-[#eae7e7] text-[0.9rem] uppercase font-medium">get to know</h5>
      <h2 className="text-[#b0e5ef] capitalize text-3xl font-semibold pt-1">about me</h2>
      <div className="about-sections flex flex-col md:flex-row gap-[5%]  mt-20">
        <div className="about-img flex-[35%] md:flex-[47.5%] lg:flex-[35%] ">
          <img src="/images/man01.jpg" alt="myself" className="mx-auto h-full object-cover rounded overflow-hidden "/>
        </div>
          <div className="flex-[60%] md:flex-[47.5%] lg:flex-[60%] mt-16 md:mt-0 w-full md:w-[25rem] lg:w-full ">
          <div className="about-info">
          <div className="cards flex justify-center gap-[2rem] mb-7">
            <div className="card-1 bg-[#137eb7] p-5 rounded-md w-[15rem] h-[9rem] flex flex-col justify-center hover:transform hover:scale-[1.1] transition-all duration-500 shadow-md shadow-[#76b5d1]">
               <h3 className="pb-3 text-3xl font-bold text-[#78bcca]"><FaCode className="mx-auto text-4xl"/></h3>
               <h3 className="text-[whitesmoke] text-xl capitalize font-semibold">experience</h3>
               <h4 className="text-[#eae7e7] pt-2 text-lg">3+ experience</h4>
            </div>
            <div className="card-2 bg-[#137eb7] p-5 rounded-md w-[15rem] h-[9rem] flex flex-col justify-center hover:transform hover:scale-[1.1] transition-all duration-500 shadow-md shadow-[#76b5d1]">
            <h3 className="pb-3 text-2xl font-bold text-[#78bcca]"><FaFolder className="mx-auto "/></h3>
               <h3 className="text-[hsl(0,0%,90%)] text-xl capitalize font-semibold">projects</h3>
               <h4 className="text-[#eae7e7] pt-2 text-lg">20+ projects</h4>
            </div>
          </div>
          <p className="text-[#d4e9f4] text-lg mt-[4rem] leading-[2rem] md:mt-2 mb-8">I am a skilled and passionate web developer with experience in creating visually appealling and user-friendly websites.i have a strong understanding of designs and a keen eye for details and proficients in HTML,JAVASCRIPT,TAILWIND CSS and REACT JS.</p>
          <Link to="contact" spy={true} smooth={true} offset={-120} duration={500}  className="bg-[#78bcca] text-lg uppercase font-medium rounded-md px-5 py-3 hover:bg-[#d4e9f4] transition-all duration-500 cursor-pointer">hire me</Link>
        </div>
          </div>
      </div>
    </div>
    </>
   );
}
 
export default About;
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";
const Hero = () => {
  return ( 
    <>
    <div id="home" className="hero-component relative w-full h-[calc(100vh-5rem)] mt-20">
      <div className="img absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center w-[85%] md:w-[70%] lg:w-auto">
        <img src="/images/man01.jpg" alt="my_self" className="mx-auto w-[13rem] h-[13rem] sm:w-[18rem] sm:h-[16rem] rounded-tr-[15rem] rounded-br-xl rounded-bl-xl rounded-tl-[15rem] object-cover"/>
       <div className="text-left w-[100%] mx-auto mt-12">
       <h5 className="text-[hsl(0,0%,90%)] capitalize text-[1.2rem] mb-1 ">hello,</h5>
        <h1 className=" text-2xl lg:text-4xl font-semibold text-[hsl(0,0%,90%)] capitalize leading-[2.5rem] md:leading-[3rem] ">i'm <span className="text-[#e5a55d] uppercase">idris,</span><br />website developer (frontend)</h1>
        <p className="text-[#d4e9f4] text-lg mt-2 mb-8">I am a skilled and passionate web developer with experience in creating visually appealling and user-friendly websites</p>
        <Link to="contact" spy={true} smooth={true} offset={-120} duration={500}  className="bg-[#78bcca] text-lg uppercase font-medium rounded-md px-8 py-4 hover:bg-[#d4e9f4] transition-all duration-500 cursor-pointer" >let's talk</Link>
       </div>
      <ul className="socials absolute top-[25%] hidden md:block">
        <li className="mb-3 text-xl text-[#78bcca] font-bold hover:transform hover:translate-x-[0.6rem] transition-all duration-500"><a href=""><FaFacebook/></a></li>
        <li className="mb-3 text-xl text-[#78bcca] font-bold hover:transform hover:translate-x-[0.6rem] transition-all duration-500"><a href=""><FaLinkedinIn/></a></li>
        <li className="mb-3 text-xl text-[#78bcca] font-bold hover:transform hover:translate-x-[0.6rem] transition-all duration-500"><a href=""><FaXTwitter/></a></li>
        <li className="mb-3 text-xl text-[#78bcca] font-bold hover:transform hover:translate-x-[0.6rem] transition-all duration-500"><a href=""><IoLogoWhatsapp/></a></li>
      </ul>
      <div className={`scroll-down absolute top-[27%] right-0 transform rotate-[90deg] text-[#78bcca] cursor-pointer text-lg hidden md:block`}>
       <Link to="footer" spy={true} smooth={true} offset={-120} duration={500} className="flex items-center">scroll down <HiArrowLongRight className="ml-2 text-xl block text-[hsl(0,0%,90%)] "/></Link>
      </div> 
      </div>
    </div>
    </>
   );
}
 
export default Hero;
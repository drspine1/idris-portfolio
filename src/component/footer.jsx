import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return ( 
    <>
    <div className="footer w-full border-t-2   py-8 border-[grey] mt-32 mx-auto text-center">
    <div className="footer-copy-right px-3 w-full">
    <div className="icons flex items-center gap-4 justify-center">
      <a href="mailto://idrismutolib5@gmail.com" className="hover:transform hover:translate-y-[-4px] transition duration-500"><MdOutlineEmail className="text-[#c1e8ff] uppercase pb-2 text-3xl"/></a>
     <a href="" className="hover:transform hover:translate-y-[-4px] transition duration-500"> <FaGithub className="text-[#c1e8ff] uppercase pb-2 text-3xl"/></a>
    </div>
        <small className="text-[#ebe8e8] text-lg md:text-lg pt-4 block">&copy; <span>idris mutolib</span> Projects.All rights reserved </small>
       </div> 
    </div>
    </>
   );
}
 
export default Footer;
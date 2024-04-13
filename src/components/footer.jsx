import {FaFacebook} from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return ( 
    <>
    <div id="footer" className='mt-40 mx-auto text-center w-full bg-[#78bcca] py-16'>
      <h1 className='upppercase text-2xl font-semibold pb-4 cursor-pointer'><Link to="home" spy={true} smooth={true} offset={-95} duration={500}>SKEEZY</Link></h1>
      <div className="footer-links mb-4">
      <Link  to="home" spy={true} smooth={true} offset={-100} duration={500} className='mx-4 text-lg font-medium capitalize block pb-3 sm:inline-block text-[#023246] cursor-pointer'>home</Link >
        <Link to="about" spy={true} smooth={true} offset={-95} duration={500}  className='mx-4 text-lg font-medium capitalize block pb-3 sm:inline-block text-[#023246] cursor-pointer'>about</Link >
        <Link to="skill" spy={true} smooth={true} offset={-95} duration={500}  className='mx-4 text-lg font-medium capitalize block pb-3 sm:inline-block text-[#023246] cursor-pointer'>skills</Link >
        <Link to="portfolio" spy={true} smooth={true} offset={-95} duration={500}  className='mx-4 text-lg font-medium capitalize block pb-3 sm:inline-block text-[#023246] cursor-pointer'>portfolio</Link >
        <Link to="contact" spy={true} smooth={true} offset={-95} duration={500} className='mx-4 text-lg font-medium capitalize block pb-3 sm:inline-block text-[#023246] cursor-pointer'>contact</Link >
      </div>
        <div className="footer-socials flex justify-center items-center my-5">
          <a href=""className='mx-3 text-2xl font-bold hover:transform hover:-translate-y-1 transition duration-500'><FaFacebook/></a>
          <a href=""className='mx-3 text-2xl font-bold hover:transform hover:-translate-y-1 transition duration-500'><FaTwitter/></a>
          <a href=""className='mx-3 text-2xl font-bold hover:transform hover:-translate-y-1 transition duration-500'><IoLogoWhatsapp/></a>
        </div>
       <div className="footer-copy-right">
        <hr className=''/>
        <small className='mt-4 block text-lg'>&copy; SKEEZY Projects.All rights reserved </small>
       </div> 
    </div>
    </>
   );
}
 
export default Footer;
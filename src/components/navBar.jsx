import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useState } from "react";
const NavBar = () => {
  const [showNav,setShowNav]  = useState(false)
  return ( 
    <>
    <div className="nav-bar w-full h-[5rem] bg-[#023246] shadow-md shadow-[#437083] fixed left-0 top-0 z-20">
      <nav className="w-full h-full mx-auto text-center flex justify-between items-center p-6 relative ">
        <div className="logo flex items-center">
          <h1 className="text-[whitesmoke] uppercase text-3xl font-semibold">skeezy</h1>
          <span className="w-5 h-5 bg-[#78bcca] block rounded-full ml-2"></span>
        </div>
      
          <ul className="links hidden md:block">
            <li className="inline-block lg:mx-6 md:mx-3 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>home</Link></li>
            <li className="inline-block lg:mx-6 md:mx-3 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-95} duration={500}>about</Link></li>
            <li className="inline-block lg:mx-6 md:mx-3 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link activeClass="active" to="skill" spy={true} smooth={true} offset={-95} duration={500}>skills</Link></li>
            <li className="inline-block lg:mx-6 md:mx-3 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-95} duration={500}>portfolio</Link></li>
            <li className="inline-block lg:mx-6 md:mx-3 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-95} duration={500}>contact</Link></li>
          </ul>
          <ul className={`links block md:hidden absolute top-[100%] left-0 bg-[whitesmoke] w-full text-left overflow-hidden    ${showNav ? "h-[280px] py-8 pl-6" :"h-0"}`}>
            <li className="block pb-4 mx-6 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link to="home" spy={true} smooth={true} offset={-120} duration={500} onClick={()=>setShowNav(!showNav)}>home</Link></li>
            <li className="block pb-4 mx-6 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link to="about" spy={true} smooth={true} offset={-120} duration={500} onClick={()=>setShowNav(!showNav)}>about</Link></li>
            <li className="block pb-4 mx-6 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link to="skill" spy={true} smooth={true} offset={-120} duration={500} onClick={()=>setShowNav(!showNav)}>skills</Link></li>
            <li className="block pb-4 mx-6 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link to="portfolio" spy={true} smooth={true} offset={-120} duration={500} onClick={()=>setShowNav(!showNav)}>portfolio</Link></li>
            <li className="block pb-4 mx-6 uppercase text-lg font-semibold text-[#78bcca] cursor-pointer"><Link to="contact" spy={true} smooth={true} offset={-120} duration={500}  onClick={()=>setShowNav(!showNav)}>contact</Link></li>
          </ul>
    
        <button className="menu-btn block md:hidden text-[whitesmoke] text-2xl font-bold" onClick={()=>setShowNav(!showNav)}>
        {
          showNav? <HiX/> :  <GiHamburgerMenu/>
        }
        </button>
      </nav>
    </div>
    </>
   );
}
 
export default NavBar;
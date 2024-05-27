import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const active = "text-[#e5a55d]"
  return ( 
    <>
   <header className=" text-white  bg-[#831683] shadow-sm shadow-[#8c438c] fixed left-0 top-0 z-10 w-full ">
   <nav className="relative flex justify-between items-center p-6">
      <div className="logo">
      <div class="flex items-center">
  
  <svg class="h-10 w-10 mr-2 text-[white]" viewBox="0 0 24 24" fill="#e5a55d">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H8v-2h3V7.5l4 4-4 4z"/>
  </svg>

  <div>

    <p class="text-base text-[#c1e8ff] leading-tight">Web Developer</p>
  </div>
</div>

        <div className="dot"></div>
      </div>
      <ul className="mr-6  hidden sm:block">
       <li className="inline-block mx-2 md:mx-8 cursor-pointer"><Link activeClass={active}  to="about" offset={-110}  spy={true} smooth={true} duration={500} className="text-lg md:text-xl font-medium uppercase">about</Link></li>
       <li className="inline-block mx-2 md:mx-8 cursor-pointer"><Link activeClass={active}  to="skills" spy={true} smooth={true} offset={-110} duration={500} className="text-lg md:text-xl font-medium uppercase">skills</Link></li>
       <li className="inline-block mx-2 md:mx-8 cursor-pointer"><Link activeClass={active}  to="portfolio" spy={true} smooth={true} offset={-110} duration={500} className="text-lg md:text-xl font-medium uppercase">project</Link></li>
       <li className="inline-block mx-2 md:mx-8 cursor-pointer"><Link activeClass={active}  to="contact" spy={true} smooth={true} offset={-110} duration={500}  className="text-lg md:text-xl font-medium uppercase ">contact</Link></li>
      </ul>

      <ul className={`menu-slide block sm:hidden absolute top-[100%] right-0  transition duration-500   h-screen w-4/5 text-center pt-12 ${toggle ? "mr-0":"mr-[-100%]"}`}>
       <li><Link activeClass="active"  to="about" spy={true} smooth={true} offset={-130} duration={500} className="text-xl font-medium uppercase text-[#fff]" onClick={()=>setToggle(false)}>about</Link></li>
       <li className="pt-12"><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-130} duration={500} className="text-xl font-medium uppercase text-[#fff]" onClick={()=>setToggle(false)}>skills</Link></li>
       <li className="pt-12"><Link activeClass="active"  to="portfolio" spy={true} smooth={true} offset={-130} duration={500} className="text-xl font-medium uppercase text-[#fff]" onClick={()=>setToggle(false)}>projects</Link></li>
       <li className="pt-12" ><Link activeClass="active"  to="contact" spy={true} smooth={true} offset={-130} duration={500} className="text-xl font-medium uppercase text-[#fff]" onClick={()=>setToggle(false)}>contact</Link></li>
      </ul>
      <div className="toggle-btn block sm:hidden">
        <button className="text-[white] text-2xl font-bold " onClick={()=>setToggle(!toggle)}>
          {
          toggle ? <LiaTimesSolid />: <CiMenuFries/>
          }
          
          </button>
      </div>
    </nav>
   </header>
    </>
   );
}
 
export default Navbar;
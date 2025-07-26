import {Link} from "react-scroll"
import {motion} from "framer-motion"
const Hero = () => {

 

  return (  
    <>
 
<section 
className="bg-cover bg-center bg-no-repeat py-20 text-center mt-16 md:mt-28" id="home" >
  <div className="bg-opacity-80 p-10 px-4 rounded-lg max-w-3xl mx-auto">
    <motion.h1 
    initial={{y:"15px",opacity:0}}
    whileInView={{y:0,opacity:1}}
    viewport={{once:true,amount:0.2}}
    transition={{delay:0.2,duration:0.3}}

    className=" text-3xl md:text-4xl font-bold text-[#353635] mb-4">Hello, I'm Idris Mutolib</motion.h1>
    <motion.h2 
     initial={{y:"15px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true,amount:0.2}}
     transition={{delay:0.4,duration:0.3}}
    className=" text-lg md:text-2xl text-[#f39f5a] mb-4">A Passionate Web Developer </motion.h2>
    <motion.p 
     initial={{y:"15px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true,amount:0.2}}
     transition={{delay:0.6,duration:0.3}}
    
    className="text-[#545353] mb-12 text-lg  md:text-xl">I specialize in building responsive, user-first web applications using modern tools like React, next.js and Tailwind. My goal is to build websites that not only look great but are intuitive and fast</motion.p>

<div className="grid grid-cols-2 gap-4 items-center text-center">
  <motion.button
  initial={{scale:0.7,opacity:0}}
  whileInView={{scale:1,opacity:1}}
  viewport={{once:true,amount:0.2}}
  transition={{delay:1,duration:0.3}}
>
<Link to="project" className="links-btn  cursor-pointer text-[white] text-sm  md:text-lg shadow-[#2a152a]/100  shadow-md font-semibold py-3 px-6 rounded  hover:bg-[grey] transition-all duration-500 hover:text-white" spy={true} smooth={true} offset={-110} duration={500} >View My Work</Link>
</motion.button>
<motion.button
 initial={{scale:0.7,opacity:0}}
  whileInView={{scale:1,opacity:1}}
  viewport={{once:true,amount:0.2}}
  transition={{delay:0.8,duration:0.3}}
>
  <a
  href="/images/Mutolib_Resume.pdf"
  download
  className="links-btn  cursor-pointer text-[white] text-sm  md:text-lg shadow-[#2a152a]/100  shadow-md font-semibold py-3 px-6 rounded  hover:bg-[grey] transition-all duration-500 hover:text-white"
>
  Download CV
</a>
</motion.button>
</div>
  </div>
</section>

    </>
  );
}
 
export default Hero;

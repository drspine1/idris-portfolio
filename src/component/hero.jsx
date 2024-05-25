import {Link} from "react-scroll"
import {motion} from "framer-motion"
const Hero = () => {

 

  return (  
    <>
 
<section 
class="bg-cover bg-center bg-no-repeat py-20 text-center mt-16 md:mt-28" id="home" style={{}}>
  <div class="bg-opacity-80 p-10 rounded-lg max-w-3xl mx-auto">
    <motion.h1 
    initial={{y:"15px",opacity:0}}
    whileInView={{y:0,opacity:1}}
    viewport={{once:true,amount:0.2}}
    transition={{delay:0.2,duration:0.3}}

    className=" text-3xl md:text-4xl font-bold text-[#f6f7f3] mb-4">Hello, I'm Idris Mutolib</motion.h1>
    <motion.h2 
     initial={{y:"15px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true,amount:0.2}}
     transition={{delay:0.4,duration:0.3}}
    className=" text-lg md:text-2xl text-[#f39f5a] mb-4">A Passionate Web Developer Based in Nigeria</motion.h2>
    <motion.p 
     initial={{y:"15px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true,amount:0.2}}
     transition={{delay:0.6,duration:0.3}}
    
    className="text-[#ebe8e8] mb-12 text-lg  md:text-xl">I specialize in creating dynamic and beautiful web pages. I have been in the field for over 2 years, and have been loving every minute of it. I am a developer and overall thinker.</motion.p>
<motion.button
  initial={{scale:0.7,opacity:0}}
  whileInView={{scale:1,opacity:1}}
  viewport={{once:true,amount:0.2}}
  transition={{delay:1,duration:0.3}}
>
<Link to="portfolio" className="bg-[#ebe8e8] cursor-pointer text-[#052659] text-xl font-semibold py-2 px-4 rounded  hover:bg-[grey] transition-all duration-500 hover:text-white" spy={true} smooth={true} offset={-110} duration={500} >View My Work</Link>
</motion.button>
  </div>
</section>

    </>
  );
}
 
export default Hero;
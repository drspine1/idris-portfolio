import React from 'react';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
const AboutMe = () => {
  return (
<>
<div className="about-container px-8 md:px-14 lg:px-32  w-[100%] text-center mx-auto mt-32 border" id='about'>
<div className=''>
  <motion.h5  
  initial={{scaleZ:0.5,opacity:0}}
  whileInView={{scaleZ:1, opacity:1}}
  viewport={{once:true, amount:0.4}}
  transition={{delay:0.2,duration:0.4}}
  className='text-[purple] uppercase pb-2'>get to know</motion.h5>
  <motion.h2 
    initial={{scaleZ:0.5,opacity:0}}
    whileInView={{scaleZ:1, opacity:1}}
    viewport={{once:true, amount:0.4}}
    transition={{delay:0.4,duration:0.4}}
  className="text-3xl font-bold mb-12 uppercase text-[#353635] " >About Me</motion.h2>
<div className="upper-me flex flex-col-reverse md:flex-row gap-[5%] text-left">
  <motion.div 
    initial={{scale:0.7,opacity:0}}
    whileInView={{scale:1, opacity:1}}
    viewport={{once:true, amount:0.4}}
    transition={{delay:0.2,duration:0.4}}
  className="about-img flex-[35%] mt-20 md:mt-0">
    <img src="images/avar.jpg" alt="" className='w-full object-cover h-[22rem]'/>
  </motion.div>
  <div className="about-content flex-[60%]">
  
      <motion.p 
        initial={{y:"45px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4,type:"stiffness"}}
      className="text-lg mb-8 text-[#1b1a1a]">
        Hi there! I'm <span className="font-bold text-[#f39f5a] text-xl">idris mutolib</span >, a passionate  Frontend Developer with a unique journey into the world of technology. With a background in Science Laboratory and Technology, I've always been drawn to problem-solving and innovation. After earning my ND in Science Laboratory and Technology, I embarked on a self-study journey in web development, fueled by a desire to create meaningful digital experiences.
      </motion.p>
      <motion.p 
        initial={{y:"35px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.4,duration:0.4}}
      
      className="text-lg mb-4 text-[#1b1a1a]">
        Over the past three years, I've immersed myself in the world of frontend development, honing my skills through self-directed learning and hands-on project work. Through building personal projects, I've gained invaluable experience in <span className='text-[#f39f5a] italic'>HTML | CSS | JS | React | Tailwind | Redux Toolkit</span>, crafting intuitive user interfaces and bringing creative ideas to life.
      </motion.p>
      <p className="text-lg mt-4 text-[#1b1a1a] mb-8">
        Let's build something amazing together!
      </p>
      <Link to="contact" spy={true} smooth={true} offset={-110} duration={500}  className='links-btn shadow-md shadow-[#2a152a]/100 cursor-pointer py-3 mt-6  text-[white] rounded border-0 px-5 text-lg hover:bg-[grey] transition-all duration-500 hover:text-white'>Get in Touch</Link>
  </div>
</div>
</div>


</div>
</>
  );
}

export default AboutMe;

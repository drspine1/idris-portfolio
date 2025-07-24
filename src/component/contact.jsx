import { motion } from "framer-motion";
const Contact = () => {
  return ( 
    <>
    <div className="contact-container w-[90%] md:w-[60%] mx-auto text-center mt-40 bg-white/10 backdrop-blur-md p-8 rounded-xl" id="contact">
     <motion.div
      initial={{y:"15px",opacity:0}}
      whileInView={{y:0,opacity:1}}
      viewport={{once:true,amount:0.2}}
      transition={{delay:0.2,duration:0.3}}
     
     >
     <h5 className='text-[purple] uppercase pb-2'>get in touch</h5>
        <h2  className="text-3xl font-bold mb-12 uppercase text-[#353635] ">contact me</h2>
     </motion.div>
        <motion.div 
         initial={{y:"15px",opacity:0}}
         whileInView={{y:0,opacity:1}}
         viewport={{once:true,amount:0.2}}
         transition={{delay:0.5,duration:0.3}}
        className="message">
        <p className="text-[#1b1a1a] mb-12  text-xl">I'm currently looking for new opportunities. i'm open to discussing web development projects (frontend),and  collaborations. Let's connect and create something amazing together!
          </p>
          <p className="text-[#1b1a1a] mb-12  text-xl"> Feel free to reach out to me via email.</p>
        <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true,amount:0.2}}
          transition={{delay:0.8,duration:0.3}}
        >
            {/*className='bg-[#9333ea] shadow-[#2a152a]/100 shadow-md text-lg  py-3 mt-6  text-[white] rounded border-0 px-5   hover:bg-[grey] transition-all duration-500 hover:text-white'
            className='bg-[#9333ea] hover:bg-[#7e22ce] text-white py-3 px-6 rounded-xl shadow-md transition-all duration-300'
            */}
        <a href="mailto:idrismutolib5@gmail.com" 
        
       className='links-btn shadow-[#2a152a]/100 shadow-md text-lg  py-3 mt-6  text-[white] rounded border-0 px-5   hover:bg-[grey] transition-all duration-500 hover:text-white'
      >let's talk</a>
        </motion.button>

         
     
        </motion.div>
    </div>
    
    </>
   );
}
 
export default Contact;
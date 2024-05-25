import { motion } from "framer-motion";
const Contact = () => {
  return ( 
    <>
    <div className="contact-container w-[80%] md:w-[50%] mx-auto text-center mt-40" id="contact">
     <motion.div
      initial={{y:"15px",opacity:0}}
      whileInView={{y:0,opacity:1}}
      viewport={{once:true,amount:0.2}}
      transition={{delay:0.2,duration:0.3}}
     
     >
     <h5 className='text-[#c1e8ff] uppercase pb-2'>get in touch</h5>
        <h2  className="text-3xl font-bold mb-12 uppercase text-[#b1aeae] ">contact me</h2>
     </motion.div>
        <motion.div 
         initial={{y:"15px",opacity:0}}
         whileInView={{y:0,opacity:1}}
         viewport={{once:true,amount:0.2}}
         transition={{delay:0.5,duration:0.3}}
        className="message">
        <p className="text-[#ebe8e8] mb-12  text-xl">I'm currently looking for new opportunities. i'm open to discussing web development projects (frontend),and  collaborations. Let's connect and create something amazing together!
          </p>
          <p className="text-[#ebe8e8] mb-12  text-xl"> Feel free to reach out to me via email.</p>
        <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true,amount:0.2}}
          transition={{delay:0.8,duration:0.3}}
        >
        <a href="mailto://idrismutolib5@gmail.com" className=' text-lg  py-2 mt-4 bg-[#ebe8e8] text-[#052659] rounded border-0 px-5   hover:bg-[grey] transition-all duration-500 hover:text-white'>let's talk</a>
        </motion.button>

         
     
        </motion.div>
    </div>
    
    </>
   );
}
 
export default Contact;
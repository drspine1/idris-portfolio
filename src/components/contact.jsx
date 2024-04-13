import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
const Contact = () => {
  return ( 
    <>
    <div id="contact" className="contact-component w-[90%] text-center mx-auto mt-40">
    <h5 className="text-[#eae7e7] text-[0.9rem] uppercase font-medium">get in touch</h5>
      <h2 className="text-[#b0e5ef] capitalize text-3xl font-semibold pt-1">contact me</h2>
    <div className="flex flex-col-reverse md:flex-row gap-[10%] mt-20">
      <div className="address flex-[30%] mt-16 md:mt-0">
        <div className="mb-8">

      
         <h3 className="uppercase text-xl font-semibold text-[#d4e9f4]">Address:</h3>
          <p className="text-[whitesmoke] text-lg pt-3  flex   justify-center"><VscLocation className=" text-2xl text-[#b0e5ef] font-bold mb-4 mr-3"/>No2 Fetuga Str. Ladilak,Shomolu LGA <br />Lagos State, Nigeria</p>
        </div>
        <div className="mb-8">
          
          <h3 className="uppercase text-xl font-semibold text-[#d4e9f4]">Phone:</h3>
          <p className="text-[whitesmoke] text-lg pt-3 flex   justify-center"><MdOutlinePhone className=" text-2xl text-[#b0e5ef] font-bold mb-4 mr-3"/>09163297925</p>
        </div>
        <div className="mb-8">
       
          <h3 className="uppercase text-xl font-semibold text-[#d4e9f4]">Email:</h3>
          <p className="text-[whitesmoke] text-lg pt-3 flex   justify-center"><MdOutlineEmail className=" text-2xl text-[#b0e5ef] font-bold mb-4 mr-3"/>idrismutolib5@gmail.com</p>
        </div>
      </div>
      <form className="flex-[60%]">
        <input type="text" placeholder="your name" className="w-full mb-7 p-6 outline-none text-lg"/>
        <input type="email" placeholder="email id" className="w-full mb-7 p-6 outline-none text-lg"/>
        <textarea name="" placeholder="your message" className="w-full mb-7 p-6 outline-none text-lg min-h-40 "></textarea>
        <button  className="bg-[#78bcca] text-lg uppercase font-medium rounded-md px-8 py-3  hover:bg-[#d4e9f4] transition-all duration-500 cursor-pointer">submit</button>
      </form>
    </div>
    </div>
    </>
   );
}
 
export default Contact;
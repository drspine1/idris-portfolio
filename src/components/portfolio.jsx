import { useState } from "react";
import data from "../components/portfolioData"
console.log(data)
const Portfolio = () => {
  const [project,setProject] = useState(data)
  return ( 
    <>
   <div id="portfolio" className="w-[90%] md:w-[80%] mx-auto text-center mt-48">
   <h5 className="text-[#eae7e7] text-[0.9rem] uppercase font-medium">my projects</h5>
      <h2 className="text-[#b0e5ef] capitalize text-3xl font-semibold pt-1">portfolio</h2>
   <div className="porfolio  grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16">
       {
        project.map((projects)=>{
          const {id,img,tittle,btn} = projects
          return <div key={id} className=" bg-[#137eb7] rounded-md">
            <div className="img ">
              <img src={img} alt={tittle}  className="mx-auto w-full h-[15rem] overflow-hidden rounded-tl-md rounded-tr-md"/>
               </div>
               <div className="px-4 py-8">
               <h4 className="text-lg text-[#b0e5ef] capitalize font-medium">{tittle}</h4>
              <a href="#" className="bg-[whitesmoke] block py-3 mt-4 text-lg uppercase font-medium rounded hover:bg-[#d4e9f4] transition-all duration-500">{btn}</a>
               </div>
            
          </div>
        })
       }
    </div>
   </div>
    </>
   );
}
 
export default Portfolio;
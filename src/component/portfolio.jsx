import data from "../component/skillsData"
console.log(data)
const Portfolio = () => {
  return ( 
    <>
    <div className="portfolio-container mt-40  w-[90%] md:w-[80%] lg:w-[90%] text-center mx-auto " id="portfolio">
      <h5  className='text-[#c1e8ff] uppercase pb-2'>portfolio</h5>
      <h2 className="text-3xl font-bold mb-12 uppercase text-[#b1aeae] " >my works</h2>
      <div className="works-container  grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 ">
        {data.map((data) =>{
          const {id,image,description,demo,github,technologies} = data
          return <div key={id} className="bg-[grey] rounded w-[22rem] sm:w-[18rem] h-[27rem] sm:h-[30rem] md:w-[21rem] shadow-sm shadow-slate-300">
             <img src={image} alt=""  className="w-full h-[14rem] opacity-50 object-cover"/>
             <div className="info mt-6 px-4">
              <h4 className="text-[#ebe8e8]">{description}</h4>
              <p className="text-[#f39f5a]"><span className="capitalize text-white font-semibold">technology</span>:{technologies.join(',')}</p>
              <div className="link flex gap-6 justify-center mt-4">
                <a href={github} className="bg-[#656565] rounded text-white uppercase  hover:bg-[#3a3939] transition-all duration-500  text-sm p-2">source code</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className="bg-[#656565] hover:bg-[#3a3939] transition-all duration-500 rounded text-white uppercase  text-sm p-2 px-3">live demo</a>
              </div>
             </div>
          </div>
        })}
      </div>
    </div>
    </>
   );
}
 
export default Portfolio;
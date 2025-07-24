




import { motion } from "framer-motion"
import projects from "./portfolioData"


const Portfolio = () => {
  return (
    <section id="project" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="uppercase text-[purple] mb-2">my work</h5>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#353635]">Portfolio Projects</h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-[#601560] backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src={`/${project.image}`}
                  alt="Project thumbnail"
                  fill
                  className="object-cover w-full"
                />
              </div>

              <p className="text-gray-300 mb-3 text-sm">{project.description}</p>

              <div className="flex   mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs  px-1 py-1  text-[#f39f5a]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-[#f4c9f4] hover:text-white"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-[#f4c9f4] hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

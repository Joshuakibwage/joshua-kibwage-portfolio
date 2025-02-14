import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/projectsImage.png";
import project2 from "../assets/project2-image.png";


const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "Travel planner project",
        links: {
            site: "https://travel-planner-ebon.vercel.app/",
            github: "https://github.com/Joshuakibwage/travel-planner"
        },
    },
    {
        img: project2,
        title: "project #2",
        description: "Todo list project",
        links: {
            site: "https://mytodolist-eosin.vercel.app/",
            github: "https://github.com/Joshuakibwage/react-todo"
        },
    }
]

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20 " id="projects">
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Projects</h2>
        {projects.map((project, index) => (
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
            >
                <div className="w-full md:w-1/2 p-4">
                    <img 
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                        <a href={project.links.site}
                        className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                        >View Site</a>
                        <a href={project.links.github}
                          className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                        ><AiOutlineGithub/></a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Portfolio
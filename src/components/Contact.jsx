// import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div id="about" className="px-6 max-w-[1000px] mx-auto md:my-12 ">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">I'm a passionate and dedicated front-end developer with a keen eye for detail and a love for creating visually engaging, user-friendly web experiences. I recently completed an intensive front-end development boot-camp at ALX Africa, where I honed my skills in HTML, CSS, JavaScript, and modern libraries like React.</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto my-4">I thrive on building responsive, intuitive designs that bring ideas to life, blending creativity with technical expertise. As someone who values collaboration and continuous learning, I stay up-to-date with the latest industry trends and best practices to ensure the solutions I create meet both user needs and business goals.</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">Let’s connect and build something amazing together!</p>
                </div>
                <div>

                </div>
            </div>
            <form 
                action="https://getform.io/f/awnnzzkb"
                method="POST"
                className="max-w-6xl p-5 md:p-12"
                id="contact"
            >
                <p className="text-gray-200 font-bold text-xl mb-2 ">Let's Connect!</p>

                <input 
                    type="text" 
                    id="name"
                    placeholder="Name ..."
                    name="name"
                    className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />


                <input 
                    type="email" 
                    id="email"
                    placeholder="Your email ..."
                    name="email"
                    className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />


                <textarea 
                    type="textarea" 
                    id="textarea"
                    placeholder="Your message ..."
                    cols="30"
                    rows="4"
                    className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />

                <button     
                    type="submit"
                    className="w-full py-3 rounded-md text-gray-300 font-semibold text-xl bg-primary-color
                     hover:bg-yellow-500"
                >
                    Send Message
                </button>

            </form>
        </div>
        </Reveal>
    </div>
  )
}

export default Contact
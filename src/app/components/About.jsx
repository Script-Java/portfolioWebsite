import Image from "next/image";
import { FaPython, FaReact, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiDaisyui, SiCanva, SiNextui   } from "react-icons/si";
import tehran from "../assets/tehran.jpg";

const About = () => {

    return (
        <div id="about" className="my-40">
            <h3 className="text-5xl lg:text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">About me</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                <div className="">
                    <div className="p-4 w-full flex flex-col items-center justify-center lg:justify-normal max-w-6xl">
                        <Image src={tehran} className="w-full rounded-xl shadow-primary" alt="My Hometown (tehran) iran"/>
                        <p className="text-xl lg:text-2xl text-center lg:text-start py-4">I was born in Tehran, Iran, where the culture and traditions shaped my perspective on life. Moving to the United States in the fourth grade taught me resilience and adaptability, helping me navigate a new environment while holding onto my roots. This blend of experiences has shaped who I am today.</p>
                        <p className="text-xl lg:text-2xl text-center lg:text-start py-4">My passion for programming began during the COVID-19 pandemic. Over the past four years, I’ve specialized in Python, JavaScript, and web development, creating tools like KitCraft and automating tasks with APIs. Programming has become my way of solving problems and building meaningful solutions.</p>
                        <p className="text-xl lg:text-2xl text-center lg:text-start py-4">I’m deeply passionate about helping small businesses grow. Using my technical skills, I enjoy creating tools and systems that help entrepreneurs overcome challenges and scale effectively. Supporting their success drives me to continue innovating and making a difference.</p>

                    </div>
                    

                </div>
                

                <div className="p-4">

                    <div className="">
                        <h3 className="text-2xl lg:text-3xl text-center lg:text-start text-white font-bold">Programming Tools</h3>
                        <div className="my-4">
                            <ul className="flex py-4 text-5xl justify-center lg:justify-normal lg:flex-none flex-wrap lg:text-6xl gap-4">
                                <li className="text-primary"><FaPython/></li>
                                <li className="text-primary"><IoLogoJavascript/></li>
                                <li className="text-primary"><FaReact/></li>
                                <li className="text-primary"><RiNextjsFill/></li>
                                <li className="text-primary"><FaHtml5/></li>
                                <li className="text-primary"><FaCss3/></li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-4">
                        <h3 className="text-2xl lg:text-3xl text-center lg:text-start text-white font-bold">UI Libraries</h3>
                        <div className="">
                            <ul className="flex py-4 text-5xl justify-center lg:justify-normal lg:flex-none flex-wrap lg:text-6xl gap-4">
                                <li className="text-secondary"><RiTailwindCssFill/></li>
                                <li className="text-secondary"><FaBootstrap/></li>
                                <li className="text-secondary"><SiDaisyui/></li>
                                <li className="text-secondary"><SiNextui/></li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-4">
                        <h3 className="text-2xl lg:text-3xl text-center lg:text-start py-4 text-white font-bold">Design Tools</h3>
                        <div className="">
                            <ul className="flex text-5xl justify-center lg:justify-normal lg:flex-none flex-wrap lg:text-6xl gap-4">
                                <li className="text-accent"><SiCanva/></li>
                                <li className="text-accent"><FaFigma/></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
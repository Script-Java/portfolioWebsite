import Image from "next/image";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import Link from "next/link";
import { FaRegWindowRestore } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const BlogsSection = () => {

    return (
        <div id="blogs" className="my-40">
            <h3 className="text-5xl lg:text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">Blogs</h3>
            <div className="flex justify-center lg:justify-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">  

                <div className="card bg-base-100 p-4 lg:w-96 shadow-xl">
                  <figure>
                    <Image src={img1} alt="project 1"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                        Why Is an Online Presence Important?
                    
                    </h2>
                    <p>An introduction to why your online presence is crucial for your business.</p>
                  </div>
                  <Link className="btn btn-primary" href={"/blog/why-is-an-online-presence-important"} passHref>
                    view
                    <FaRegWindowRestore className="text-xl"/>
                  </Link>
                </div>

                <div className="card bg-base-100 p-4 lg:w-96 shadow-xl">
                  <figure>
                    <Image src={img2} alt="project 2"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                        Why Your Business Needs a Website
                    </h2>
                    <p>This blog explores the essential reasons why every business needs a website, highlighting its role in building credibility, reaching wider audiences, and driving growth in the digital age.</p>
                  </div>
                  <Link className="btn btn-primary" href={"/blog/why-your-business-needs-a-website"} passHref>
                    view
                    <FaRegWindowRestore className="text-xl"/>
                  </Link>
                </div>

                <div className="card bg-base-100 p-4 lg:w-96 shadow-xl">
                  <figure>
                    <Image src={img3} alt="project 3"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                        Benefits of Hiring a Web Developer
                    </h2>
                    <p>This blog highlights the key advantages of hiring a professional web developer, including customized designs, improved user experience, enhanced security, and scalable solutions to elevate your business's online presence.</p>
                    <div className="card-actions justify-end">
                    </div>
                  </div>
                  <Link className="btn btn-primary" href={"/blog/benefits-of-hiring-a-web-developer"} passHref>
                    view
                    <FaRegWindowRestore className="text-xl"/>
                  </Link>

                </div>

                <div className="card bg-base-100 p-4 lg:w-96 shadow-xl">
                  <figure>
                    <Image src={img4} alt="project 4"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                        Why Isn’t My Website Ranking on Google?

                    </h2>
                    <p>An introduction to common reasons why your website may not be ranking on Google and how to fix them.</p>
                  </div>
                  <Link className="btn btn-primary" href={"/blog/why-isnt-my-website-ranking-on-google"} passHref>
                    view
                    <FaRegWindowRestore className="text-xl"/>
                  </Link>

                </div>



                </div>
            </div>
            <Link className="text-center btn btn-ghost flex my-10 justify-center text-xl" href={"/blog"} passHref>
              View All
              <FaArrowRight className="text-xl"/>

            </Link>
        </div>
    )
}

export default BlogsSection;
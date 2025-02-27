import Image from "next/image";
import img1 from "../assets/bayarea.jpg";
import img2 from "../assets/anubis.jpg";
import img3 from "../assets/glasspro.jpg";
import img4 from "../assets/atrinwebdev.jpg";

import Link from "next/link";
import { FaRegWindowRestore } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Projects = () => {

    return (
        <div id="projects" className="my-80 lg:my-40">
            <h3 className="text-5xl lg:text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">Projects</h3>
            <div className="flex justify-center lg:justify-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">  

                <div className="card bg-base-100 p-4 lg:w-96 shadow-xl">
                  <figure>
                    <Image src={img1} alt="project 1"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Bay Area PA
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Advocates for policyholders, negotiate insurance claims for maximum compensation.</p>
                    <div className="card-actions justify-end">
                      <div className="badge bg-accent text-black font-bold badge-outline">React</div>
                      <div className="badge bg-accent text-black font-bold badge-outline">JavaScript</div>
                    </div>
                  </div>
                  <Link className="btn btn-primary" href={"https://www.bayareapa.com/"} passHref>
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
                      Anubis Smoke Shop
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Anubis Smoke Shop, we are dedicated to providing a premium selection of vape products, glassware, hookah essentials, and smoking accessories.</p>
                    <div className="card-actions justify-end">
                      <div className="badge bg-accent text-black font-bold badge-outline">React</div>
                      <div className="badge bg-accent text-black font-bold badge-outline">JavaScript</div>
                    </div>
                  </div>
                  <Link className="btn btn-primary" href={"https://anubissmokeshop.com/"} passHref>
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
                      Glass Pros
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Transparent Pricing & Trusted Glass Experts | Glass Replacement Pros, we provide affordable, transparent pricing </p>
                    <div className="card-actions justify-end">
                      <div className="badge bg-accent text-black font-bold badge-outline">React</div>
                      <div className="badge bg-accent text-black font-bold badge-outline">JavaScript</div>
                    </div>
                  </div>
                  <Link className="btn btn-primary" href={"https://glassreplacementpros.com/"} passHref>
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
                      Atrinwebdev
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>
                    atrinwebdev, we create custom websites, powerful SEO, high-converting ads, and business software to help your brand grow and succeed online.</p>
                    <div className="card-actions justify-end">
                      <div className="badge bg-accent text-black font-bold badge-outline">React</div>
                      <div className="badge bg-accent text-black font-bold badge-outline">JavaScript</div>
                    </div>
                  </div>
                  <Link className="btn btn-primary" href={"https://www.atrinwebdev.com/"} passHref>
                    view
                    <FaRegWindowRestore className="text-xl"/>
                  </Link>

                </div>



                </div>
            </div>
            <Link className="text-center btn btn-ghost flex my-10 justify-center text-xl" href={"/projects"} passHref>
              View All
              <FaArrowRight className="text-xl"/>

            </Link>
        </div>
    )
}

export default Projects;
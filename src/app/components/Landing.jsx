"use client";

import { MdOutlineDownloading } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import me from "../assets/atrinpicture.jpg";

const Landing = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/atrinResume.pdf"; // Path to your resume file in the public folder
        link.download = "AtrinShahroudi_Resume.pdf"; // Desired file name for the downloaded file
        link.click();
    };

    return (
        <div id="home" className="my-40 lg:my-20">
            <div>
                <div className="flex items-center justify-center h-[90vh]">
                    <div className="container block lg:flex lg:items-center lg:justify-between">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl mt-40 lg:mt-4">Hey there 👋🏼</h3>
                            <h1 className="text-4xl lg:text-6xl max-w-6xl text-primary font-bold my-4">
                                I'm Atrin Shahroudi a Software Developer
                            </h1>
                            <h3 className="text-2xl lg:text-3xl my-4">
                                currently focused on building user experiences that drive growth.
                            </h3>
                            <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start my-4">
                                <button
                                    onClick={handleDownload}
                                    className="flex btn btn-secondary px-10 gap-1 items-center"
                                >
                                    Resume <MdOutlineDownloading className="text-2xl" />
                                </button>
                                <div className="flex gap-4 border-l-2 border-black pl-4">
                                    <Link href="https://www.instagram.com/atrinshahroudi/" className="btn btn-accent text-xl rounded-full" passHref>
                                            <FaInstagram />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/atrin-shahroudi/" className="btn btn-accent text-xl rounded-full" passHref>
                                            <FaLinkedinIn />
                                    </Link>
                                    <Link href="https://github.com/Script-Java" className="btn btn-accent text-xl rounded-full" passHref>
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end my-4">
                        <Image
                            className="rounded-xl rotate-0 lg:-rotate-6 my-10 lg:my-4 shadow-primary shadow-2xl"
                            src={me}
                            width={400} // Set smaller width for default
                            // Add height for consistency
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                            alt="Atrin Shahroudi"
                          />
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default Landing;

"use client"
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import logo from "../assets/logo.svg"
import React, {useState} from 'react';
import { MdOutlineDownloading } from "react-icons/md";
import { motion } from 'framer-motion';
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/atrinResume.pdf'; // Path to your resume file in the public folder
    link.download = 'AtrinShahroudi_Resume.pdf'; // Desired file name for the downloaded file
    link.click();
  };


    return (
        <div className="mb-40 lg:mb-0">
            <div className="navbar p-4 bg-base-100">
              <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost" passHref>
                  <Image src={logo} alt="Atrin logo" width={40} height={40}/>
                </Link>
              </div>
              <ul className=" gap-4 lg:flex md:hidden hidden">
                <li className="btn">
                  <Link href={'/'} passHref>Home</Link>
                </li>
                <li className="btn">
                  <Link href={'/projects'} passHref>Projects</Link>
                </li>
                <li className="btn">
                  <Link href={'/blog'} passHref>Blogs</Link>
                </li>
                <li className="btn">
                  <Link href={'/contact'} passHref>Contact</Link>
                </li>
                <li className="btn btn-secondary">
                  <motion.button className="flex items-center" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} onClick={handleDownload}>Resume <span><MdOutlineDownloading className="text-xl"/></span></motion.button>
                </li>
              </ul>
              <div className="flex-none">
                <button onClick={toggleMenu} className="btn btn-square btn-ghost lg:hidden">
                  <CgMenuRight className="text-3xl"></CgMenuRight>
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="">
                <ul className="menu">
                  <li className="btn">
                    <Link href={'/'} passHref>Home</Link>
                  </li>
                  <li className="btn">
                    <Link href={'/projects'} passHref>Projects</Link>
                  </li>
                  <li className="btn">
                    <Link href={'/blog'} passHref>Blogs</Link>
                  </li>
                  <li className="btn">
                    <Link href={'/contact'} passHref>Contact</Link>
                  </li>
                  <li className="btn btn-secondary">
                    <motion.button className="flex items-center" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} onClick={handleDownload}>Resume <span><MdOutlineDownloading className="text-xl"/></span></motion.button>
                  </li>

                </ul>
              </div>
            )}
            
        </div>
    )
}

export default Navbar;
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Landing></Landing>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

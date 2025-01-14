import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Faq from "./components/Faq";
import BlogsSection from "./components/Blogs";


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Landing></Landing>
      <Projects></Projects>
      <About></About>
      <Faq></Faq>
      <BlogsSection></BlogsSection>
      <Footer></Footer>
    </div>
  );
}

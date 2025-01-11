import Image from "next/image";
import logo from "../assets/logo.svg"

const Footer = () => {

    return (
        <div className="">
            <footer className="footer bg-neutral flex justify-center text-neutral-content items-center p-4">
              <aside className="grid-flow-col items-center">
                <Image src={logo} width={24} alt="My logo"/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
              </aside>
            </footer>
        </div>
    )
}

export default Footer;
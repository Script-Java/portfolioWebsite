"use client";

import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Script from "next/script";
import img1 from "../assets/mtl.jpg";
import img2 from "../assets/TFPNB.jpg";
import img3 from "../assets/tfsm.jpg";
import img4 from "../assets/pap.jpg";
import img5 from "../assets/lbj.jpg";
import img6 from "../assets/locklair.jpg";
import img7 from "../assets/data.jpg";
import img8 from "../assets/tokentrail.jpg";
import img9 from "../assets/motitask.jpg";
import img10 from "../assets/nar.jpg";
import img11 from "../assets/brilliance.jpg";

export default function Portfolio() {
    const projects = [
        { url: "https://premierpa.claims/", img: img4, alt: "premierpa" },
        { url: "https://www.brillianceskin.us/", img: img11, alt: "brilliance skin" },
        { url: "https://texasfivestarmarketing.com/", img: img3, alt: "texasfivestarmarketing" },
        { url: "https://texasfivestarpaintandbody.com/", img: img2, alt: "texasfivestarpaintandbody" },
        { url: "https://magictouchpaintingllc.com/", img: img1, alt: "magic touch" },
        { url: "https://lbjfoodmart.netlify.app", img: img5, alt: "lbj" },
    ];

    const flaskProjects = [
        { url: "https://locklair.onrender.com", img: img6, alt: "locklair" },
        { url: "https://datavisualization-67od.onrender.com", img: img7, alt: "datavisualization" },
        { url: "https://tokentrail.onrender.com", img: img8, alt: "tokentrail" },
        { url: "https://motitask.onrender.com", img: img9, alt: "Motitask" },
    ];

    const shopifyProjects = [
        { url: "https://narcissistclothing.co/", img: img10, alt: "Narcissist" },
    ];

    const renderProjects = (projects) =>
        projects.map(({ url, img, alt }) => (
            <Link href={url} passHref key={url} target="_blank">
                <div className="mockup-browser bg-base-300 border">
                    <div className="mockup-browser-toolbar">
                        <div className="input">{url}</div>
                    </div>
                    <Image src={img} alt={alt} />
                </div>
            </Link>
        ));

    return (
        <div className="container mx-auto p-4">
            <Script
                id="facebook-pixel-projects"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        if (typeof window !== 'undefined' && window.fbq) {
                            fbq('track', 'PageView', { page: 'Projects' });
                        }
                    `,
                }}
            />
            <Navbar></Navbar>

            <div className="my-40">
                <h3 className="text-5xl lg:text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">All Projects</h3>

                <div>
                    <div>
                        <h3 className="p-4 text-xl my-10 font-bold">Web Development 🖥️</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {renderProjects(projects)}
                        </div>
                    </div>

                    <div>
                        <h3 className="p-4 text-xl my-10 font-bold">Python / Flask 🐍</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {renderProjects(flaskProjects)}
                        </div>
                    </div>

                    <div>
                        <h3 className="p-4 text-xl my-10 font-bold">Shopify 🛒</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {renderProjects(shopifyProjects)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

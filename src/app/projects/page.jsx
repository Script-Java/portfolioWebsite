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
import img11 from "../assets/brilliance.jpg";
import img12 from "../assets/anubis.jpg";
import img13 from "../assets/dfwglass.jpg";
import img14 from "../assets/glassgo.jpg";
import img15 from "../assets/glassrepl.jpg";
import img16 from "../assets/glasspro.jpg";
import img17 from "../assets/bayarea.jpg";
import img18 from "../assets/atrinwebdev.jpg";

export default function Portfolio() {
    const projects = [
        { url: "https://anubissmokeshop.com/", img: img12, alt: "anubissmokeshop" },
        { url: "https://www.atrinwebdev.com/", img: img18, alt: "atrinwebdev" },
        { url: "https://www.bayareapa.com/", img: img17, alt: "bayarea" },
        { url: "https://glassreplacementpros.com/", img: img16, alt: "glasspros" },
        { url: "https://dallasglassandauto.com/", img: img15, alt: "dallasglassreplacement" },
        { url: "https://dfwglassmart.com/", img: img13, alt: "dfwglass" },
        { url: "https://glassgollc.com/", img: img14, alt: "glassgo" },
        { url: "https://premierpa.claims/", img: img4, alt: "premierpa" },
        { url: "https://www.brillianceskin.us/", img: img11, alt: "brillianceskin" },
        { url: "https://texasfivestarmarketing.com/", img: img3, alt: "texasfivestarmarketing" },
        { url: "https://texasfivestarpaintandbody.com/", img: img2, alt: "texasfivestarpaintandbody" },
        { url: "https://magictouchpaintingllc.com/", img: img1, alt: "magictouch" },
        { url: "https://lbjfoodmart.netlify.app", img: img5, alt: "lbj" },
    ];


    const renderProjects = (projects) =>
        projects.map(({ url, img, alt }) => (
            <Link href={url} passHref key={url} target="_blank">
                <div className="mockup-browser bg-base-300 border">
                    <div className="mockup-browser-toolbar">
                        <div className="input">{url}</div>
                    </div>
                    <Image className="h-64" src={img} alt={alt} />
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

                </div>
            </div>

            <Footer />
        </div>
    );
}

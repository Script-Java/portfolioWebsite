import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://atrinshahroudi.com"),
  title: "Atrin Shahroudi | Web Dev & SEO Specialist",
  description:
    "Helping businesses grow with expert web development, SEO, and digital marketing strategies.",
  keywords: [
    "Atrin Shahroudi",
    "Web Developer",
    "SEO Specialist",
    "Digital Marketing Expert",
    "Custom website design",
    "React Developer",
    "Business Growth Solutions",
    "Website Optimization",
    "Local SEO Expert",
    "Online presence",
    "Online branding",
    "How to rank my business on Google",
    "Website redesign services for businesses"
  ],
  author: "Atrin Shahroudi",
  applicationName: "Atrin Shahroudi Portfolio",
  canonical: "https://atrinshahroudi.com", // Add canonical tag
  openGraph: {
    type: "website",
    url: "https://atrinshahroudi.com",
    title: "Atrin Shahroudi | Web Dev & SEO Specialist",
    description:
      "Providing web development, SEO, and digital marketing solutions to help businesses grow their online presence.",
    site_name: "Atrin Shahroudi Portfolio",
    images: [
      {
        url: "https://atrinshahroudi.com/assets/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Atrin Shahroudi - Web Developer & SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@atrinshahroudi", // Replace with your Twitter handle
    title: "Atrin Shahroudi | Web Dev & SEO Specialist",
    description:
      "Helping businesses grow with expert web development, SEO, and digital marketing strategies.",
    image: "https://atrinshahroudi.com/assets/preview.jpg",
  },

  xRobotsTag: [
    { path: "/private/*", value: "noindex, nofollow" },
    { path: "/public/*", value: "index, follow" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="application-name" content={metadata.applicationName} />
        <meta name="robots" content={metadata.xRobotsTag[1].value} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

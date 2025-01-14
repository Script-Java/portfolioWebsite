import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

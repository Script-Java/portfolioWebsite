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
  title: "Atrin Shahroudi | Web Developer & SEO Specialist",
  description:
    "Atrin Shahroudi - Expert in web development, SEO, and digital marketing. I help businesses and individuals grow their online presence with tailored strategies and optimized solutions.",
  keywords: [
    "Atrin Shahroudi",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TailwindCSS Developer",
    "SEO Specialist",
    "Digital Marketing",
    "Online Marketing",
    "Business Growth",
    "Website Optimization",
    "Social Media Management",
    "Lead Generation",
    "Content Strategy",
    "Local SEO",
    "E-commerce Development",
    "Online Presence",
    "Web Development",
    "React",
    "Next.js",
    "TailwindCSS",
    "Frontend Development",
    "Marketing Strategies",
    "Performance Optimization",
    "User Experience Design",
    "Conversion Rate Optimization",
    "Responsive Design",
    "Analytics",
    "Content Marketing",
    "Pay-Per-Click Advertising",
    "Brand Awareness",
    "Search Engine Optimization",
    "Website Maintenance",
  ],
  author: "Atrin Shahroudi",
  applicationName: "Atrin Shahroudi Portfolio",
  openGraph: {
    type: "website",
    url: "https://atrinshahroudi.com",
    title: "Atrin Shahroudi | Web Developer & SEO Specialist",
    description:
      "Providing web development, SEO, and digital marketing solutions to help businesses grow their online presence.",
    images: [
      {
        url: '../app/assets/preview.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Atrin Shahroudi - Web Developer & SEO Specialist",
      },
    ],
  },
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

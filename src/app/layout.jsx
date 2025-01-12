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
  title: "Atrin Shahroudi",
  description: "My name is Atrin Shahroudi, I help grow online presence for businesses and individuals.",
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

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
  authors: [{ name: "Atrin Shahroudi" }],
  applicationName: "Atrin Shahroudi Portfolio",
  alternates: {
    canonical: "https://atrinshahroudi.com",
  },
  openGraph: {
    type: "website",
    url: "https://atrinshahroudi.com",
    title: "Atrin Shahroudi | Web Dev & SEO Specialist",
    description:
      "Providing web development, SEO, and digital marketing solutions to help businesses grow their online presence.",
    siteName: "Atrin Shahroudi Portfolio",
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
    site: "@atrinshahroudi",
    title: "Atrin Shahroudi | Web Dev & SEO Specialist",
    description:
      "Helping businesses grow with expert web development, SEO, and digital marketing strategies.",
    images: ["https://atrinshahroudi.com/assets/preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Atrin Shahroudi" />
        <meta name="application-name" content={metadata.applicationName} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Facebook Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}

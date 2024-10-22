import { Figtree } from "next/font/google";
import Nav from "./components/common/nav";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
    title: "SkillInstill | Training, Consulting, Development, and Technology Hiring",
    description:
        "Training, Consulting, Development, and Technology Hiring. As the fastest-growing IT Services company in India, we take pride in providing an unparalleled range of services all under one roof",
    metadataBase: new URL("https://skillinstill.com/"),
    openGraph: {
        title: "SkillInstill",
        description:
            "Training, Consulting, Development, and Technology Hiring. As the fastest-growing IT Services company in India, we take pride in providing an unparalleled range of services all under one roof",
        url: "https://skillinstill.com/",
        siteName:
            "SkillInstill | Training, Consulting, Development, and Technology Hiring",
        images: [
            {
                url: "https://skillinstill.com/og.png",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SkillInstill | Training, Consulting, Development, and Technology Hiring",
        description:
            "Training, Consulting, Development, and Technology Hiring. As the fastest-growing IT Services company in India, we take pride in providing an unparalleled range of services all under one roof",
        // creator: "@haripras_d",
        image: "https://skillinstill.com/og.png",
    },
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html data-theme="light" lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href="https://www.skillinstill.com/" />
            </head>
            <body
                className={` ${figtree.className} flex flex-col min-h-100dvh antialiased`}
            >
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}

import { Figtree } from "next/font/google";
import Nav from "./components/common/nav";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
    title: "SkillInstill",
    description: "Training • Consulting • Development",
    metadataBase: new URL("https://skillinstill.com/"),
    openGraph: {
        title: "SkillInstill",
        description: "Training • Consulting • Development",
        url: "https://skillinstill.com/",
        siteName: "SkillInstill",
        images: [
            {
                url: "https://skillinstill.com/icon.png",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SkillInstill",
        description: "Training • Consulting • Development",
        // creator: "@haripras_d",
        image: "https://skillinstill.com/icon.png",
    },
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html data-theme="light" lang="en">
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

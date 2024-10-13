import { navItems } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { FaBuilding, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full mt-auto mb-0 bg-k flex flex-col justify-center items-center pb-8 pt-4">
            <Image
                src={"/full-logo-b.png"}
                width={200}
                height={50}
                alt="logo"
            />
            <div className=" w-4/6 my-6 gap-8 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                <div className="flex flex-col justify-center items-center md:items-start font-semibold md:text-xl gap-4">
                    <Link
                        className="flex flex-col md:flex-row gap-2 text-center justify-center md:justify-start items-center"
                        href="/"
                    >
                        <FaBuilding />
                        Address, Address, Address
                    </Link>
                    <Link
                        className="flex flex-col md:flex-row gap-2 items-center"
                        href="tel:9876543210"
                    >
                        <FaPhone />
                        9876543210
                    </Link>
                </div>
                <div className="flex gap-12 md:text-2xl justify-center items-center">
                    <Link href={"#"}>
                        <IoMdMail />
                    </Link>
                    <Link href={"#"}>
                        <FaFacebookF />
                    </Link>
                    <Link href={"#"}>
                        <FaXTwitter />
                    </Link>
                    <Link href={"#"}>
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
            <div className="flex gap-3 md:gap-6 my-6">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={"/#" + item.link}
                        className="flex gap-3 md:gap-6 text-xs md:text-base hover:text-primary anim"
                    >
                        {item.name}{" "}
                        <span className="inline">
                            {index === navItems.length - 1 ? "" : "/"}
                        </span>
                    </Link>
                ))}
            </div>

            <p className="text-sm text-zinc-400">
                © {currentYear} Skill Instill. All rights reserved.
            </p>
        </footer>
    );
}

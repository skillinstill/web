"use client";
import { navItems } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*desktop navbar*/}
            <nav className="flex pc justify-between toppp bg-white/80 backdrop-blur-lg top-0 left-0 drop-shadow-lg items-center pr-12 pl-8 w-full">
                <Image
                    priority
                    className="object-contain w-28"
                    src={"/full-logo-b.png"}
                    width={100}
                    height={50}
                    alt=""
                />
                <ul className="flex text-slate-600 gap-6 lg:gap-12 font-semibold">
                    {navItems.map((item, index) => (
                        <li
                            className="hover:text-slate-900 group py-6 relative anim"
                            key={index}
                        >
                            <Link
                                className="flex items-center gap-2"
                                href={"/#" + item.link}
                            >
                                {" "}
                                {item.icon}
                                {item.name}
                            </Link>
                            <div
                                className={` w-full h-[1.5px] bg-[#7CC318] toppp translate-x-3 absolute bottom-0 group-hover:scale-x-100 scale-x-0 anim origin-left`}
                            />
                        </li>
                    ))}
                </ul>
                <Link
                    href={"/"}
                    className="bg-green-500 text-white font-semibold rounded-full px-8 p-4"
                >
                    Contact us
                </Link>
            </nav>

            {/*mobile navbar*/}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`mob text-white text-2xl bg-green-500 anim-slo toppp rounded-full w-12 h-12 flex justify-center items-center fixed bottom-6 right-8 drop-shadow-xl ${
                    isOpen ? "rotate-180 " : "rotate-0"
                } `}
            >
                {isOpen ? <IoClose /> : <CgMenuMotion />}
            </button>

            <nav
                className={` ${
                    isOpen
                        ? "left-0 pointer-events-auto"
                        : "-left-full pointer-events-none"
                } anim-slo z-50 fixed mob drop-shadow-2xl top-0 h-[100dvh] w-10/12 pt-8 bg-white`}
            >
                <ul className="flex flex-col w-full text-slate-600 gap-6 font-semibold">
                    {navItems.map((item, index) => (
                        <li
                            onClick={() => setIsOpen(false)}
                            className="hover:text-slate-900 border-b border-b-green-100 w-full group p-4 px-8 relative anim"
                            key={index}
                        >
                            <Link
                                className="flex items-center gap-2"
                                href={"#" + item.link}
                            >
                                {" "}
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                onClick={() => setIsOpen(false)}
                className={` ${
                    isOpen ? "block" : "hidden"
                } h-[100dvh] z-10 w-screen fixed top-0 left-0`}
            />
        </>
    );
}

"use client";
import heroo from "@/assets/hero-asset.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedText from "../text-anim";

export default function Hero() {
    const wordArray = [
        "Technology Solutions",
        "Developer tools",
        "Complex Engineering",
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    //function to change the word in a span of 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentTextIndex + 1) % wordArray.length;
            setCurrentTextIndex(nextIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentTextIndex, wordArray.length]);

    const text = wordArray[currentTextIndex];

    return (
        <div className="h-[90dvh] p-16 pt-0 flex md:justify-between items-end md:items-center w-full">
            <div className="flex overflow-hidden items-center w-full rounded-3xl h-full justify-center bg-[#8da8d4]">
                <div className="md:ml-24 lg:ml-36">
                    {/* <Image
                        priority
                        className="object-contain w-40 mb-4"
                        src={"/icon.png"}
                        width={200}
                        height={200}
                        alt=""
                    /> */}
                    <h1 className="text-neutral-100 tracking-tighter text-5xl md:text-6xl">
                        Transform your{" "}
                        <span className=" text-neutral-800 tracking-tight block whitespace-nowrap">
                            <AnimatedText key={currentTextIndex} text={text} />
                        </span>{" "}
                        with our Expert-driven approach.
                    </h1>
                    <Link
                        className="mt-6 md:mt-12 border-b-2 border-b-neutral-300 pb-2 w-fit md:ml-2 text-xl text-neutral-700 block"
                        href="#about"
                    >
                        Read More →
                    </Link>
                </div>
                <Image
                    className=" absolute top-0 right-0 md:relative lg:pl-16 lg:pr-12 w-[75%] md:w-[30rem] lg:w-[40rem] "
                    src={heroo}
                    alt="hero"
                />
            </div>
        </div>
    );
}

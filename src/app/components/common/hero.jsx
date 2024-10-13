"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const contentArray = [
        {
            text: "We Empower your Team to stay competitive and Innovative.",
            color: "#fff",
        },
        {
            text: "Transform your Technology solutions with our Expert-driven approach.",
            color: "#1e1e1e",
        },
        {
            text: "Focus on your Strengths, we will find the Talent for your Success.",
            color: "#1e1e1e",
        },
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentTextIndex + 1) % contentArray.length;
            setCurrentTextIndex(nextIndex);
            setCurrentImageIndex(nextIndex + 1);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentTextIndex, contentArray.length]);

    return (
        <div className="h-[100dvh] relative md:h-[90dvh] md:p-12 md:pt-0 flex md:justify-between items-end md:items-center w-full">
            <AnimatePresence mode="wait">
                <div className="flex flex-wrap md:flex-nowrap overflow-hidden p-12 md:p-0 md:items-center w-full md:rounded-3xl h-full justify-center relative">
                    <motion.div
                        key={currentImageIndex}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url('/asset-${currentImageIndex}.webp')`,
                        }}
                        className={`w-full h-full object-cover absolute top-0 left-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <div className="md:ml-24 lg:ml-36 mt-16 md:mt-0 relative z-10">
                        <AnimatePresence mode="wait">
                            <TextHero
                                key={currentTextIndex} // Dynamic key for TextHero
                                text={contentArray[currentTextIndex].text}
                                color={contentArray[currentTextIndex].color}
                            />
                        </AnimatePresence>
                        <Link
                            className="mt-6 md:mt-12 border-b border-b-slate-500 pb-2 w-fit md:ml-2 md:text-xl text-slate-500 block"
                            href="#about"
                        >
                            Read More →
                        </Link>
                    </div>
                    <motion.div
                        key={currentImageIndex}
                        style={{
                            backgroundImage: `url('/asset-${currentImageIndex}.webp')`,
                        }}
                        className={`w-full mob h-[50dvh] bg-no-repeat bg-cover bg-right-bottom absolute bottom-0 left-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </AnimatePresence>
        </div>
    );
}

const TextHero = ({ text, color }) => {
    const words = text.split(" ").filter(Boolean);
    return (
        <motion.div className="w-11/12 md:w-1/2 flex flex-wrap">
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    style={{ color: color }}
                    initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    // exit={{ opacity: 0, y: 15, filter: "blur(5px)" }} // Exit animation
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.15,
                    }}
                    className="tracking-tighter text-4xl md:text-6xl"
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </motion.div>
    );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ImageWithSideContent({
    title,
    details,
    desc,
    img,
    imgOnLeft,
}) {
    return (
        <div
            className={`w-full flex flex-col items-center md:flex-wrap lg:flex-nowrap shrink-0 py-12 px-8 lg:px-0 mx-auto md:flex-row max-w-screen-xl ${
                imgOnLeft ? "md:flex-row-reverse justify-between md:gap-12" : ""
            } `}
        >
            <div className="flex flex-col mb-6 md:min-w-[20rem] gap-2">
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="heading w-11/12 md:w-5/6"
                >
                    {title}
                </motion.h1>
                <p className="text-sm  z-20 md:text-sm break-words w-full md:w-11/12 mt-2 text-zinc-800">
                    {desc}
                </p>

                {details.map((detail, idx) => (
                    <div
                        key={idx}
                        className="collapse collapse-arrow bg-base-200"
                    >
                        <input
                            type="radio"
                            name="my-accordion-3"
                            defaultChecked
                        />
                        <div className="collapse-title text-xl font-medium">
                            {detail.q}
                        </div>
                        <div className="collapse-content">
                            <p>{detail.a}</p>
                        </div>
                    </div>
                ))}
                <br />
            </div>
            {img && (
                <Image
                    src={img}
                    alt=""
                    className="object-cover image-reveal min-h-[15rem] md:h-[30rem] w-full mx-auto max-w-2xl rounded-lg"
                />
            )}
        </div>
    );
}

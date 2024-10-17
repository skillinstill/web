"use client";
import { servicesData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import NotFound from "../not-found";

export default function Services({ params }) {
    const isPresent = servicesData.find(
        (service) => service.route === params.id
    );

    const data = servicesData.find((service) => service.route === params.id);

    return (
        <>
            {isPresent ? (
                <div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-screen fixed bg-white top-0 left-0 toppp h-[100dvh] flex justify-center items-center"
                >
                    <Link
                        href="/"
                        className="absolute top-12 right-8 text-red-500 text-3xl"
                    >
                        <IoClose />
                    </Link>
                    <div className="bg-back overflow-y-scroll no-scrollbar flex flex-col-reverse md:flex-row md:gap-12 justify-between h-[90dvh] w-11/12 p-8 md:p-12 rounded-3xl md:rounded-[3rem] md:w-10/12">
                        <div className="md:w-1/2">
                            <h1 className="text-3xl md:text-5xl font-thin tracking-tighter">
                                {data.name}
                            </h1>
                            <p className="text-xl md:text-2xl align-bottom py-4 md:py-8 font-thin">
                                {data.desc}
                            </p>
                            <div className="flex w-full md:w-fit justify-between md:justify-start gap-4">
                                {data.id > 1 && (
                                    <Link
                                        href={
                                            servicesData[data.id - 2]?.route ||
                                            "/"
                                        }
                                        className="text-green-600 text-3xl"
                                    >
                                        ←
                                    </Link>
                                )}
                                {data.id < servicesData.length && (
                                    <Link
                                        href={
                                            servicesData[data.id]?.route || "/"
                                        }
                                        className="text-green-600 text-3xl"
                                    >
                                        →
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="flex w-1/2 shrink-0 max-h-[20rem] no-scrollbar md:max-h-[unset] md:flex-col py-4 gap-4 overflow-x-scroll md:overflow-y-scroll">
                            {data.imgs.map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    className="object-cover  md:w-auto max-h-[60vh] shrink-0 rounded-xl hover:drop-shadow-md anim"
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}

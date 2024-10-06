import Link from "next/link";

export default function CTASection() {
    return (
        <div
            className={`bg-zinc-900 min-h-[20rem] justify-center relative overflow-hidden w-full py-16 px-8 md:px-36 my-16 flex flex-col gap-3 items-center mx-auto
            `}
        >
            <h1
                className={`text-xl z-20 md:text-3xl font-light drop-shadow-lg text-white text-center mx-auto w-full max-w-xl `}
            >
                We are always looking for emerging talents around the globe
            </h1>
            <Link
                href={"/"}
                className="bg-green-500 text-white font-semibold rounded-full px-8 p-4"
            >
                Join us
            </Link>
            {/* <Image
                    src={img}
                    width={700}
                    height={300}
                    alt=""
                    className="absolute no-select pointer-events-none grayscale top-1/2 -translate-y-1/2 left-0 opacity-10 w-full h-full origin-center object-cover"
                /> */}
        </div>
    );
}

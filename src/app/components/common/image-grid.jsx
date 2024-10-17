"use client";

import v1 from "@/assets/venue/venue (1).jpg";
import v2 from "@/assets/venue/venue (2).jpg";
import v3 from "@/assets/venue/venue (3).jpg";
import v4 from "@/assets/venue/venue (4).jpg";
import v5 from "@/assets/venue/venue (5).jpg";
import Image from "next/image";

const ImageGrid = () => {
    const images = [v1, v2, v3, v4, v5];

    return (
        <div className="max-w-screen-xl mt-12 mx-auto p-4">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="relative h-64">
                    <Image
                        src={images[0]}
                        alt="Image 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg  hover:grayscale grayscale-0 anim hover:shadow-lg"
                    />
                </div>
                <div className="relative h-64">
                    <Image
                        src={images[1]}
                        alt="Image 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg  hover:grayscale grayscale-0 anim hover:shadow-lg"
                    />
                </div>
                <div className="relative h-64">
                    <Image
                        src={images[2]}
                        alt="Image 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg  hover:grayscale grayscale-0 anim hover:shadow-lg"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64">
                    <Image
                        src={images[3]}
                        alt="Image 4"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg  hover:grayscale grayscale-0 anim hover:shadow-lg"
                    />
                </div>
                <div className="relative h-64">
                    <Image
                        src={images[4]}
                        alt="Image 5"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg  hover:grayscale grayscale-0 anim hover:shadow-lg"
                    />
                </div>
            </div>
            <p className="text-center text-2xl my-8 mx-auto text-w font-semibold tracking-tighter text-green-600">
                State-of-the-Art Corporate Training spaces in Chennai and
                Bangalore
            </p>
            <style jsx>{`
                .grid {
                    grid-template-rows: repeat(2, minmax(200px, 1fr));
                }
                @media (min-width: 768px) {
                    .grid {
                        grid-template-rows: repeat(1, minmax(200px, 1fr));
                    }
                }
            `}</style>
        </div>
    );
};

export default ImageGrid;

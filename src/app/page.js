import Image from "next/image";
import ast2 from "../assets/ast-2.png";
import circ from "../assets/circ.png";
import Hero from "./components/common/hero";

import Link from "next/link";
import s1 from "../assets/services/Services 1.svg";
import s2 from "../assets/services/Services 2.svg";
import s3 from "../assets/services/Services 3.svg";
import s4 from "../assets/services/Services 4.svg";
import ImageWithSideContent from "./components/image-wth-content";

export default function Home() {
    const services = [
        {
            name: "training-as-a-service",
            img: s1,
            details: [
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
            ],
        },
        {
            name: "hiring-as-a-service",
            img: s2,
            details: [
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
            ],
        },
        {
            name: "technology-consulting",
            img: s3,
            details: [
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
            ],
        },
        {
            name: "software-development",
            img: s4,
            details: [
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
                {
                    q: "Tailored Training Programs",
                    a: "We customize training modules to align with your company&apos;s unique needs, from foundational skills to advanced tech specializations.",
                },
            ],
        },
    ];

    const FancyTitle = ({ text, shadow }) => {
        return (
            <div className="relative">
                <h1 className="text-[7rem] uppercase pointer-events-none absolute centerrr z-[10] text-green-400/20 font-thin text-center">
                    {shadow || text}
                </h1>
                <h1 className="text-5xl relative z-40 block text-neutral-700 font-semibold text-center">
                    {text}
                </h1>
            </div>
        );
    };

    return (
        <main>
            <Hero />
            <section
                id="about"
                className="flex md:flex-nowrap gap-x-12 my-16 flex-wrap relative mx-auto px-36 "
            >
                <Image src={circ} alt="" className="absolute -top-16 left-0" />
                <Image src={ast2} alt="" className="w-1/2 " />
                <div>
                    <h3 className="border-s-8 font-semibold text-4xl border-s-green-500 p-4 pl-6">
                        About{" "}
                        <span className="text-green-500 uppercase">
                            Skill Instill
                        </span>
                    </h3>
                    <p className="mt-4 pl-8 text-neutral-700">
                        SKILL INSTILL Technologies, your trusted taaS
                        (Technology as a Service) partner. Our foundation is
                        built on technology, and we are dedicated to delivering
                        a comprehensive suite of offerings including Training,
                        Consulting, Development, and Technology Hiring
                        (Laterals). <br /> <br />
                        As the fastest-growing IT Services company in India, we
                        take pride in providing an unparalleled range of
                        Technology Training, Consulting, and Hiring Services all
                        under one roof. With over 12 years of collective
                        experience in the Learning & Development domain,
                        we&apos;ve assembled a network of 350+ Freelance
                        Technical Consultants & Trainers, specializing in Niche
                        and Super Niche technologies.
                    </p>
                </div>
            </section>

            <section id="services" className="my-16">
                <FancyTitle text="Services" />
                <div className="flex flex-wrap justify-center items-center my-16 gap-12 max-w-screen-xl mx-auto">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            className="w-[12rem] md:w-auto md:max-w-[16rem]"
                            href={"#" + service.name}
                        >
                            <Image src={service.img} alt={service.name} />
                        </Link>
                    ))}
                </div>

                <div>
                    <ImageWithSideContent
                        img={ast2}
                        title={"Training as a Service ( TaaS )"}
                        desc={
                            "Unlock your teams full potential with SKILL INSTILLs Training as a Service (TaaS) solution. Designed to provide ongoing, scalable, and customizable training, our TaaS platform equips your organization with the critical skills needed to thrive in todays fast-paced technology landscape. Whether for new hires, experienced teams, or executive leaders, our flexible training approach delivers expertise directly to your workforce when and where they need it."
                        }
                        details={services[0].details}
                    />
                    <ImageWithSideContent
                        img={ast2}
                        imgOnLeft={true}
                        title={"Hiring as a Service (HaaS) Recruitment"}
                        desc={
                            "Designed to help organizations efficiently recruit the best talent in the tech industry. Our flexible and comprehensive recruitment solutions are built to address your specific hiring needs, ensuring you have access to top-tier candidates with the right skills and experience to drive your business forward."
                        }
                        details={services[1].details}
                    />
                    <ImageWithSideContent
                        img={ast2}
                        title={"Technology Consulting"}
                        desc={
                            "Unlock your team’s full potential with SKILL INSTILL's Training as a Service (TaaS) solution. Designed to provide ongoing, scalable, and customizable training, our TaaS platform equips your organization with the critical skills needed to thrive in todays fast-paced technology landscape. Whether for new hires, experienced teams, or executive leaders, our flexible training approach delivers expertise directly to your workforce when and where they need it."
                        }
                        details={services[2].details}
                    />
                    <ImageWithSideContent
                        img={ast2}
                        imgOnLeft={true}
                        title={"Software Development"}
                        desc={
                            "Designed to help organizations efficiently recruit the best talent in the tech industry. Our flexible and comprehensive recruitment solutions are built to address your specific hiring needs, ensuring you have access to top-tier candidates with the right skills and experience to drive your business forward."
                        }
                        details={services[3].details}
                    />
                </div>
            </section>

            <section className="relative">
                <FancyTitle text={"Our Training venue"} shadow={"GALLERY"} />

                <Image src={circ} alt="" className="absolute -top-16 left-0" />

                <Image
                    src={circ}
                    alt=""
                    className="absolute -scale-x-100 -bottom-16 right-0"
                />
                <div></div>
            </section>
        </main>
    );
}

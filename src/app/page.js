import Image from "next/image";
import ast2 from "../assets/ast-2.png";
import circ from "../assets/circ.png";
import Hero from "./components/common/hero";

import Link from "next/link";
import s1 from "../assets/services/Services 1.svg";
import s2 from "../assets/services/Services 2.svg";
import s3 from "../assets/services/Services 3.svg";
import s4 from "../assets/services/Services 4.svg";

import im1 from "../assets/services/img/service-1.png";
import im2 from "../assets/services/img/service-2.png";
import im3 from "../assets/services/img/service-3.png";
import im4 from "../assets/services/img/service-4.png";

import ContactForm from "./components/common/enquiry";
import ImageGrid from "./components/common/image-grid";
import CTASection from "./components/cta-section";
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
                    q: "Expert Instructors",
                    a: "Learn directly from industry veterans with hands-on expertise in emerging technologies, digital transformation, and leadership development.",
                },
                {
                    q: "Flexible Delivery Models",
                    a: "Choose between online, on-site, or hybrid training options to best fit your team's schedule and operational needs.",
                },
                {
                    q: "Continuous Learning",
                    a: "Stay ahead of technological advancements with a dynamic curriculum that evolves with the industry.",
                },
                {
                    q: "Data-Driven Insights",
                    a: "Monitor team progress and training impact through performance analytics, ensuring a direct link to business outcomes.",
                },
            ],
        },
        {
            name: "hiring-as-a-service",
            img: s2,
            details: [
                {
                    q: "Custom Talent Sourcing",
                    a: "We develop a recruitment strategy tailored to your industry, company culture, and specific job requirements, sourcing candidates who are the best fit for your team.",
                },
                {
                    q: "Tech-Savvy Recruiter",
                    a: "Our recruitment experts specialize in finding talent for highly technical roles, ensuring you get candidates with the precise skills your business demands.",
                },
                {
                    q: "End-to-End Recruitment",
                    a: "From job posting and candidate sourcing to interviews and onboarding, we handle the entire recruitment process, saving you time and resources.",
                },
                {
                    q: "Flexible Hiring Models",
                    a: "Whether you need to hire full-time employees, contract workers, or project-based talent, our adaptable hiring solutions ensure a perfect match for your business needs.",
                },
                {
                    q: "Virtual HR Solutions",
                    a: "Simplify your HR operations with powerful, accelerating recruitment, streamlining onboarding, and optimizing employee growth, all while saving time and costs.",
                },
            ],
        },
        {
            name: "consulting-as-a-service",
            img: s3,
            details: [
                {
                    q: "Expert Insights",
                    a: "Access top consultants with deep industry expertise, ready to tackle your most pressing challenges.",
                },
                {
                    q: "Customized Solutions",
                    a: "Get tailored strategies and solutions that align with your business goals and drive impactful results.",
                },
                {
                    q: "Scalable Support",
                    a: "Engage with our services on your terms, from project-based engagements to ongoing advisory support.",
                },
                {
                    q: "Efficient Implementation",
                    a: "Accelerate your initiatives with our streamlined approach and proven methodologies.",
                },
            ],
        },
        {
            name: "software-development",
            img: s4,
            details: [
                {
                    q: "Custom Software Solutions",
                    a: "Design and develop bespoke applications that align perfectly with your unique business requirements and goals.",
                },
                {
                    q: "User-Centric Design",
                    a: "Focus on delivering intuitive and engaging user experiences that drive satisfaction and adoption.",
                },
                {
                    q: "Cutting-Edge Technologies",
                    a: "Leverage the latest technologies and frameworks to build robust, secure, and high-performance applications.",
                },
            ],
        },
    ];

    const FancyTitle = ({ text, shadow }) => {
        return (
            <div className="relative w-full overflow-x-clip overflow-y-visible group">
                <h1 className="text-[7rem] uppercase pointer-events-none absolute centerrr z-[10] text-green-400/15 blur-[3px] group-hover:blur-0 anim font-thin text-center">
                    {shadow || text}
                </h1>
                <h1 className="text-3xl md:text-5xl relative z-40 block text-neutral-700 font-semibold text-center">
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
                className="flex flex-wrap lg:flex-nowrap gap-x-12 my-16 relative mx-auto md:pr-8 md:px-36 "
            >
                <Image
                    src={circ}
                    alt=""
                    className="absolute pc -top-16 left-0"
                />
                <Image src={ast2} alt="" className="md:w-1/2 w-full mx-auto" />
                <div>
                    <h3 className="border-s-8 font-semibold whitespace-nowrap text-2xl md:text-4xl border-s-green-500 p-4 pl-4 md:pl-6">
                        About{" "}
                        <span className="text-green-500 whitespace-nowrap uppercase">
                            Skill Instill
                        </span>
                    </h3>
                    <p className="mt-4 pl-6 md:pl-8 w-11/12 text-sm md:text-base break-words text-neutral-700">
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
                <div className="flex flex-wrap justify-center items-center my-16 gap-2 md:gap-12 max-w-screen-xl mx-auto">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            className=" min-w-[8rem] w-[calc(50%-1rem)] md:w-auto md:max-w-[16rem]"
                            href={"#" + service.name}
                        >
                            <Image src={service.img} alt={service.name} />
                        </Link>
                    ))}
                </div>

                <div>
                    <ImageWithSideContent
                        img={im1}
                        title={"Training as a Service ( TaaS )"}
                        desc={
                            "Unlock your teams full potential with SKILL INSTILLs Training as a Service (TaaS) solution. Designed to provide ongoing, scalable, and customizable training, our TaaS platform equips your organization with the critical skills needed to thrive in todays fast-paced technology landscape. Whether for new hires, experienced teams, or executive leaders, our flexible training approach delivers expertise directly to your workforce when and where they need it."
                        }
                        details={services[0].details}
                    />
                    <ImageWithSideContent
                        img={im2}
                        imgOnLeft={true}
                        title={"Hiring as a Service (HaaS) Recruitment"}
                        desc={
                            "Designed to help organizations efficiently recruit the best talent in the tech industry. Our flexible and comprehensive recruitment solutions are built to address your specific hiring needs, ensuring you have access to top-tier candidates with the right skills and experience to drive your business forward."
                        }
                        details={services[1].details}
                    />
                    <ImageWithSideContent
                        img={im3}
                        title={"Technology Consulting"}
                        desc={
                            "Unlock your team’s full potential with SKILL INSTILL's Training as a Service (TaaS) solution. Designed to provide ongoing, scalable, and customizable training, our TaaS platform equips your organization with the critical skills needed to thrive in todays fast-paced technology landscape. Whether for new hires, experienced teams, or executive leaders, our flexible training approach delivers expertise directly to your workforce when and where they need it."
                        }
                        details={services[2].details}
                    />
                    <ImageWithSideContent
                        img={im4}
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
                <div>
                    <ImageGrid />
                </div>
            </section>

            <section id="careers">
                <CTASection />
            </section>

            <section className="my-24">
                <FancyTitle text={"Reach Us"} shadow={"CONTACT"} />
                <ContactForm />
            </section>
        </main>
    );
}

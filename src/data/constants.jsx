import {
    HiBriefcase,
    HiCollection,
    HiHome,
    HiInformationCircle,
} from "react-icons/hi";

export const navItems = [
    {
        name: "Home",
        link: "home",
        icon: <HiHome color="#7CC318" />,
    },
    {
        name: "About",
        link: "about",
        icon: <HiInformationCircle color="#7CC318" />,
    },
    {
        name: "Services",
        link: "services",
        icon: <HiCollection color="#7CC318" />,
    },
    {
        name: "Careers",
        link: "careers",
        icon: <HiBriefcase color="#7CC318" />,
    },
    // {
    //     name: "Resources",
    //     link: "resources",
    //     icon: <HiBookOpen color="#7CC318" />,
    // },
    // {
    //     name: "Contact",
    //     link: "contact",
    //     icon: <HiLightningBolt color="#7CC318" />,
    // },
];

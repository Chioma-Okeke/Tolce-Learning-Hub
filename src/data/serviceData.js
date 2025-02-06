import image1 from "../assets/outreaches/outreach-1.jpg";
import image2 from "../assets/outreaches/outreach-2.jpg";
import image3 from "../assets/outreaches/outreach-3.jpg";
import image4 from "../assets/outreaches/outreach-4.jpg";
import image5 from "../assets/outreaches/outreach-5.jpg";
import image6 from "../assets/outreaches/outreach-6.jpg";
import image7 from "../assets/outreaches/outreach-7.jpg";
import image8 from "../assets/outreaches/outreach-8.jpg";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbGraphFilled } from "react-icons/tb";
import { BiBook, BiCalendar, BiHeart, BiUser } from "react-icons/bi";

export const whatWeOffer = [
    {
        name: "Children Outreaches",
        link: "/outreaches",
    },
    {
        name: "Skill Acquisition",
        link: "/skillacquisition",
    },
];

export const values = [
    {
        id: 1,
        Icon: TbGraphFilled,
        value: "Personal Development",
        description:
            "We believe that investing in oneself is the greatest form of investment. We are BIG on continuous self-improvement and growth, encouraging lifelong learning and self-awareness to reach one's full potential.",
    },
    {
        id: 2,
        Icon: VscWorkspaceTrusted,
        value: "Integrity",
        description:
            "We are honest and uphold strong moral principles. We do what is right even when no one is watching and are truthful in our actions and words.",
    },
    {
        id: 3,
        Icon: FaGraduationCap,
        value: "Continuous Professional Development",
        description:
            "We actively seek opportunities to learn and grow, staying current with industry trends to enhance our skills and adapt to new challenges.",
    },
    {
        id: 4,
        Icon: FaHandHoldingHeart,
        value: "Service",
        description:
            "We believe we rise by serving. As students get equipped, they use acquired skills to solve problems in local communities through outreaches.",
    },
];

export const sellingPoints = [
    {
        Icon: BiBook,
        title: "Holistic Approach to Learning",
        message:
            "Our programs cover both digital and soft skills, ensuring well-rounded personal and professional development.",
    },
    {
        Icon: BiCalendar,
        title: "Flexible Learning",
        message:
            "Catering to various learning styles and schedules with self-paced modules, live sessions, and mentoring.",
    },
    {
        Icon: BiUser,
        title: "Expert Instructors",
        message:
            "Learn from industry experts with real-world experience and a passion for teaching.",
    },
    {
        Icon: BiHeart,
        title: "Corporate Social Responsibility",
        message:
            " Solving global problems through various community projects which tend to build problem solving skills of students.",
    },
];

export const galleryCategoriesImages = [
    {
        id: 1,
        imageLink: image1,
    },
    {
        id: 2,
        imageLink: image2,
    },
    {
        id: 3,
        imageLink: image3,
    },
    {
        id: 4,
        imageLink: image4,
    },
    {
        id: 5,
        imageLink: image5,
    },
    {
        id: 6,
        imageLink: image6,
    },
    {
        id: 7,
        imageLink: image7,
    },
    {
        id: 8,
        imageLink: image8,
    },
];

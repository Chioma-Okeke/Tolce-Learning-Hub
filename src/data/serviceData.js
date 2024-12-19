
import { PiChatsCircleLight, PiMapPinLight, PiPhoneCallThin } from "react-icons/pi";
import { GoZap } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import image1 from "../assets/service-images/image1.png"
import image2 from "../assets/service-images/image2.png"
import image3 from "../assets/service-images/image3.png"
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbGraphFilled } from "react-icons/tb";

export const serviceData = [
    {
        id: 1,
        Icon: PiChatsCircleLight,
        title: "Digital skills",
        description: "Students are equipped through self-paced course on Microsoft Excel and Power BI for Data Analytics."
    },
    {
        id: 2,
        Icon: PiMapPinLight,
        title: "Soft skills",
        description: "Communication skills (written and oral presentation skills), personal branding, emotional intelligence while promoting a strong reading culture through the Reading club."
    },
    {
        id: 3,
        Icon: PiPhoneCallThin,
        title: "Outreach",
        description: " At the end of every cohort, students organize Orphanage or Public Secondary School outreaches with the aim of equipping young ones and educating them on the value of education."
    },
]

export const individualServiceData = [
    {
        id: 1,
        src: image1,
        Icon: PiChatsCircleLight,
        title: "Digital and Soft Skills",
        description: "Students are equipped through self-paced digital skills and soft skills such as Microsoft Excel, Power BI, Communication/Presentation skills, Personal branding, emotional intelligence, etc."
    },
    {
        id: 2,
        src: image2,
        Icon: GoZap,
        title: "Reading Club",
        description: "We are building intellectually sound youths through the promotion of a strong reading culture. Members of the club read a book per month and bi-weekly reviews are conducted. This helps to develop intellectual capacity and strong communication skills"
    },
    {
        id: 3,
        src: image3,
        Icon: FaChartLine,
        title: "Digital Skills",
        description: "Students organize Orphanage or Public Secondary School outreaches to promote early exposure to the right skills and opportunities through setting up learning hubs where children are teenagers are exposed to reading, playing educational games while organizing seminars and workshops, etc."
    },
]

export const values = [
    {
        id: 1,
        Icon: TbGraphFilled,
        value: "Personal Development",
        description: "We believe that investing in oneself is the greatest form of investment. We are BIG on continuous self-improvement and growth, encouraging lifelong learning and self-awareness to reach one's full potential.",
    },
    {
        id: 2,
        Icon: VscWorkspaceTrusted,
        value: "Integrity",
        description: "We are honest and uphold strong moral principles. We do what is right even when no one is watching and are truthful in our actions and words.",
    },
    {
        id: 3,
        Icon: FaGraduationCap,
        value: "Continuous Professional Development",
        description: "We actively seek opportunities to learn and grow, staying current with industry trends to enhance our skills and adapt to new challenges.",
    },
    {
        id: 4,
        Icon: FaHandHoldingHeart,
        value: "Service",
        description: "We believe we rise by serving. As students get equipped, they use acquired skills to solve problems in local communities through outreaches.",
    },
]
export const programData = {
    beginners: {
        packages: [
            {
                id: "student-package",
                title: "Student Package",
                price: "NGN30,000",
                targetAudience: [
                    "Individuals with little to no experience in digital tools",
                    "Undergraduates and post-graduate students",
                    "Fresh Graduates seeking corporate careers",
                    "National Youth Service Corp (NYSC) members",
                ],
                structure: {
                    duration: "5-week course",
                    format: "Virtual self-paced modules with bi-weekly live classes",
                    content: [
                        "Introduction to Communication Skills (Effective Email writing and Presentation skills)",
                        "Group Case study on Macro-economic issues",
                        "Introduction to Excel (Basic Excel navigation and functions)",
                        "Essential Microsoft Excel Functions and Data Cleansing",
                        "Data Analysis and Visualization (Pivot tables, Charts, Visually Appealing Dashboards, etc.)",
                        "Bonus Interview Preparation Sessions",
                    ],
                },
                interactive: [
                    "Real-world case studies",
                    "Macroeconomic role-play simulations",
                    "Hands-on weekly projects",
                    "Community project work",
                ],
            },
            {
                id: "professional-package",
                title: "Professional Package",
                price: "NGN40,000",
                targetAudience: [
                    "Individuals with little to no experience in digital tools and soft skills",
                    "Early Career Starters",
                    "Professionals looking to enhance their technical and soft skills",
                    "Professionals seeking mentorship opportunities",
                ],
                structure: {
                    duration: "8-week course",
                    format: "Virtual self-paced modules with bi-weekly live classes",
                    content: [
                        "Introduction to Communication Skills (Effective Email writing and Presentation skills)",
                        "Introduction to Excel (Basic Excel navigation and functions)",
                        "Essential Microsoft Excel Functions and Data Cleansing",
                        "Data Analysis and Visualization using Microsoft Excel (Pivot tables, Charts, Dashboards)",
                        "Data Visualization using Microsoft Power BI",
                        "LinkedIn Optimization/Personal Branding",
                    ],
                },
                interactive: [
                    "Real-world case studies",
                    "Role Plays: Simulated interactions on real world problems",
                    "Hands-on weekly projects",
                    "Final Project Presentation",
                ],
            },
        ],
        additionalFeatures: [
            "Certification: Upon completion of each program, participants receive a certificate of achievement.",
            "Career Services: Job referrals, recommendations, and interview preparation sessions.",
            "Alumni Community: Access to a learning community for continuous support and webinars on trending career topics."
        ]
    },
    intermediate: {
        packages: [
            {
                id: "advance-skills-package",
                title: "Advanced Digital Skills",
                price: "NGN50,000",
                targetAudience: [
                    "Individuals with basic knowledge looking to advance their digital and soft skills",
                    "This applies to students, fresh graduates, professionals, business owners, freelancers, etc",
                ],
                structure: {
                    duration: "8-week course",
                    format: "Blended learning (online modules + live workshops)",
                    content: [
                        "Essential Microsoft Excel Functions and Data Cleansing",
                        "Advanced Data Cleansing using Power Query (Transformations, Merge & Append, etc.) ",
                        "Microsoft Power BI (Data Modelling, Data Visualization, Basic DAX measures and columns, etc.)",
                        "Advanced DAX, Publishing to Power BI service, etc.",
                        "Introduction to Structured Query Language (SQL).",
                        "Communication Skills (Effective email writing, presentation skills.)",
                        "LinkedIn Optimization and Personal Branding.",
                    ],
                },
                interactive: [
                    "Advanced industry case studies",
                    "Simulated interactions on real world problems to strengthen critical thinking, analytical skills, teamwork, and problem solving",
                    "Hands-on weekly projects",
                    "Final Project Presentation",
                ],
            },
        ],
        additionalFeatures: [
            "Certification: Upon completion of each program, participants receive a certificate of achievement.",
            "Career Services: Access to job referrals, resume building workshops, and interview preparation sessions."
        ]
    },
};

export const summarizedProgramData = {
    beginners: {
        packages: [
            {
                id: "student-package",
                title: "Student Package",
                price: "NGN 30,000",
                features: [
                    "Target Audience: Designed for beginners, undergraduates, fresh graduates, and NYSC members aiming to build digital and soft skills.",
                    "Program Structure: A 5-week virtual, self-paced course with bi-weekly live classes.",
                    "Core Content: Covers communication skills, Excel basics, data analysis, dashboards, and interview preparation.",
                    "Interactive Learning: Includes real-world case studies, role plays, simulations, and weekly projects to build critical thinking and problem-solving skills.",
                    "Community Impact: Culminates in a group project to solve local problems, enhancing leadership and collaboration.",
                    "Additional Features: Bonus sessions on interview prep and a final project presentation."
                ]
            },
            {
                id: "professional-package",
                title: "Professional Package",
                price: "NGN 40,000",
                features: [
                    "Target Audience: Ideal for beginners, early career starters, professionals looking to improve technical and soft skills, and those seeking mentorship opportunities.",
                    "Program Structure: An 8-week virtual, self-paced course with bi-weekly live classes.",
                    "Core Content: Focuses on communication skills, Excel fundamentals, data visualization with Power BI, and LinkedIn optimization for personal branding.",
                    "Interactive Learning: Includes real-world case studies, role plays, and simulations to build critical thinking, teamwork, and problem-solving abilities.",
                    "Practical Projects: Hands-on weekly assignments and a final project presentation to apply learning effectively.",
                    "Career Development: Offers tools for personal branding and data-driven problem-solving, preparing participants for professional growth."
                ]
            }
        ]
    },
    intermediate: {
        packages: [
            {
                id: "advanced-digital-skills",
                title: "Advanced Digital Skills",
                price: "NGN 50,000",
                features: [
                    "Target Audience: Perfect for individuals with basic knowledge aiming to advance their digital and soft skills, including students, professionals, business owners, and freelancers.",
                    "Program Structure: An 8-week blended course combining online modules with live workshops for an interactive experience.",
                    "Core Content: Covers advanced Excel, Power Query, Power BI, SQL, communication skills, and LinkedIn optimization.",
                    "Interactive Learning: Includes real-world case studies, role plays, and simulations to enhance problem-solving and teamwork.",
                    "Practical Projects: Weekly hands-on projects and a final project presentation to reinforce learning.",
                    "Professional Growth: Develops personal branding, advanced technical skills, and critical thinking for career advancement."
                ]
            }
        ]
    }
}
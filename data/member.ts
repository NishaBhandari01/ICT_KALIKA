type Socials = {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
    x?: string;
    website?:string;
};

type Member = {
    name?: string;
    role?: string;
    image?: string;
    socials?: Socials;
    bio?: string;
    skills?: string[]
};

type MemberCategory = {
    category: string;
    tag?: string;
    members: Member[];
};


const members: MemberCategory[] = [
    {
        category: "Board of Directors",
        tag: "The passionate people behind every event, creative idea, mentorship session, and everything that makes our community thrive.",
        members: [
            {
                name: "Siddhant Panthi",
                role: "President",
                image: "/siddhant-panthi.avif",
                socials: {
                    github: "https://github.com/siddhantpanthi",
                    instagram: "https://www.instagram.com/siddu.psd",
                },
                bio: "Leading the club with passion for technology and innovation.",
                skills: ["Leadership", "Web Development", "Project Management", "Graphics Designing"]
            },
            {
                name: "Sanjog Pandey",
                role: "Vice President",
                image: "/sanjog-pandey.avif",
                socials: {
                    linkedin: "https://linkedin.com/in/sangogpandey",
                    github: "https://github.com/sangogpandey",
                    instagram: "https://instagram.com/sangogpandey"
                },
                bio: "Coordinating events and fostering collaboration among members.",
                skills: ["Event Management", "UI/UX Design", "Team Building"]
            },
            {
                name: "Ramit Neupane",
                role: "Secretary",
                image: "/ramit.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/ramitcornorceo/",
                    github: "https://github.com/ramatneupane",
                    website: "https://ramatneupane.dev"
                },
                bio: "Documentation for the club.",
                skills: ["Documentation", "Communication", "Organization"]
            },
            {
                name: "Shasank Shrestha",
                role: "Treasurer",
                image: "/shasank-shrestha.avif",
                socials: {
                    linkedin: "https://linkedin.com/in/shasankshrestha",
                    email: "shasankshrestha59@gmail.com",
                    github: "https://github.com/shasank00"
                },
                bio: "Documentation for the club.",
                skills: ["Documentation", "Communication", "Organization"]
            },
            {
                name: "Bishnu Adhikari",
                role: "Head of Executive",
                image: "/bishnu-adhikari.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/bishnu-adhikari-8bb6242a5/",
                    email: "yamadeath0@gmail.com"

                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Member Engagement"]
            },
            {
                name: "Nayan Acharya",
                role: "IT Head",
                image: "/nayan-acharya.avif",
                socials: {
                    github: "https://github.com/nayan135",
                    linkedin: "https://www.linkedin.com/in/nayan135/",
                    x: "https://x.com/nooneknows135",
                    instagram: "https://www.instagram.com/naayan135",
                    email: "nayan@ypstem.org",
                    website: "https://nayan135.com.np"
                },
                bio: "Overseeing technical projects and infrastructure.",
                skills: ["System Administration", "DevOps", "Technical Leadership"]
            },
            {
                name: "Narayan Bhusal",
                role: "IT Officer",
                image: "/narayan-bhusal.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/naranbhusal02/",
                    x: "https://x.com/naranbhusal02",
                    email: "narayan@ypstem.org"

                },
                bio: "Supporting technical initiatives and member development.",
                skills: ["Web Development", "Mentoring", "Project Coordination"]
            },
            {
                name: "Nishan Regmi",
                role: "Media",
                image: "/NISHAN REGMI.avif",
                socials: {
                    linkedin: "https://linkedin.com/in/nishanregmi",
                    email: "nishanregmi@gmail.com"
                },
                bio: "Managing club media presence and communications.",
                skills: ["Content Creation", "Social Media", "Photography"]
            },
            {
                name: "Sweta Lamsal",
                role: "Joint Secretary",
                image: "/sweta-lamsal.avif",
                socials: {
                    facebook: "https://www.facebook.com/swe.ta.119000",
                    email: "swetadonna@gmail.com"
                },
                bio: "Managing club media presence and communications.",
                skills: ["Communication", "Organization", "Event Planning"]
            },
            {
                name: "Princep Khanal",
                role: "CS Representative",
                image: "/princep.avif",
                socials: {
                    instagram: "https://www.instagram.com/princepkhanal69",
                    email: "khanalprincep625@gmai.com"
                },
                bio: "Representing the Computer Science department and facilitating member engagement.",
                skills: ["Representation", "Coordination", "Engagement"]
            },
            {
                name: "Asmit Gautam",
                role: "Morning Representative",
                image: "/asmit.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/asmit-gautam-b29173335/",
                    instagram: "https://www.instagram.com/asmitgautam92",
                },
                bio: "Representing the Morning batch and facilitating member engagement.",
                skills: ["Representation", "Coordination", "Engagement"]
            },
            {
                name: "Aaditya Khanal",
                role: "Leader of 11",
                image: "/aaditya-khanal.avif",
                socials: {
                    facebook: "https://www.facebook.com/aaditya.khanal.7999",
                    email: "khanalaaditya27@gmail.com"
                },
                bio: "Engaging team with various events throughout the club.",
                skills: ["Leadership", "Communication", "Management"]
            },
            {
                name: "Himanshu Sapkota",
                role: "Leader of 10",
                image: "/himanshu-sapkota.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/himanshu-sapkota-3b5488339?originalSubdomain=np",
                    email: "himanshuspkt@gmail.com"
                },
                bio: "Engaging team with various events throughout the club..",
                skills: ["Leadership", "Communication", "Management"]
            },
            {
                name: "Samriddha Poudel",
                role: "Leader of 9",
                image: "/samriddha-poudel.avif",
                socials: {
                    facebook: "https://www.facebook.com/samriddha.poudel.869291",
                    email: "poudelsamriddha46@gmail.com"
                },
                bio: "Engaging team with various events throughout the club..",
                skills: ["Leadership", "Communication", "Management"]
            },
            {
                name: "Prazwal Roka",
                role: "Executive Member",
                image: "/prazwal-roka.avif",
                socials: {
                    linkedin: "https://linkedin.com/in/prazwalroka",
                    email: "prazwalroka@gmail.com"
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Amit Pandey",
                role: "Executive Member",
                image: "/Amit-Pandey.avif",
                socials: {
                    facebook: "https://www.facebook.com/amit.pandey.922255",
                    email: "pandeyamit2064@gmail.com"
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Girija Karki",
                role: "Executive Member",
                image: "/girija-karki.avif",
                socials: {
                    instagram: "https://www.instagram.com/_sanjokkarki?igsh=MXhmbmQxZno3eWFjaA==",
                    email: "karkisanjok06@gmail.com"
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Sumit Kawar Magar",
                role: "Executive Member",
                image: "/sumit-kawar-magar.avif",
                socials: {
                    instagram: "https://www.instagram.com/aridorikichi/profilecard/?igsh=cWtwbjBreGNhZHE0",
                    email: "aridorikichi@gmail.com"
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Anshu Aryal",
                role: "Executive Member",
                image: "/anshu-aryal.avif",
                socials: {
                    instagram: "https://www.instagram.com/anshuaryal15?igsh=MWgwZnpkNnR3dWF1cw==",
                    email: "aryalanshu64@gmail.com"
                },
                bio: "Documentation for the club.",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Nischal Darnal",
                role: "Executive Member",
                image: "/nischal-darnal.avif",
                socials: {
                    facebook: "https://www.facebook.com/share/1LeiXMA3Zb/",
                    email: "nischaldarnal69@gmail.com"
                },
                bio: "Documentation for the club.",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Raunak Acharya",
                role: "Executive Member",
                image: "/raunak-acharya.avif",
                socials: {
                    facebook: "https://www.facebook.com/share/18xxwiHzee/",
                    email: "raunakacharya0@gmail.com"
                },
                bio: "Documentation for the club.",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Aman Pokharel",
                role: "Executive Member",
                image: "/aman-pokharel.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/aman-pokharel-59b146287/",
                    email: "amanpokharel69@gmail.com"
                },
                bio: "Documentation for the club.",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Susant Gautam",
                role: "Executive Member",
                image: "/susant-gautam.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/sushant-gautam-705144314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    email: "sushantgautam854@gmail.com"
                },
                bio: "Documentation for the club.",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Shrijan Pandey",
                role: "Executive Member",
                image: "/shrijan.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/shrijan-pandey-539198314/",
                    facebook: "https://www.facebook.com/kanxo.xoro.73307634",
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
            {
                name: "Mansoon Paudel",
                role: "Executive Member",
                image: "/mansoon-paudel.avif",
                socials: {
                    linkedin: "https://www.linkedin.com/in/mansoon-paudel/",
                    facebook: "https://www.facebook.com/mansoon.paudel.2025/",
                },
                bio: "Contributing to strategic planning and club operations.",
                skills: ["Frontend Development", "UI/UX Designing",]
            },
            {
                name: "Anushka Pokhrel",
                role: "Executive Member",
                image: "/anushka-pokhrel.avif",
                socials: {
                    facebook: "https://www.facebook.com/anushka.pokhrel.871838/",
                    email: "shovasasa0@gmail.com"
                },
                bio: "Contributing to strategic planning and club operations",
                skills: ["Strategy", "Operations", "Engagement"]
            },
        ],
    },
    {
        category: "advisors",
        tag: "The experienced mentors and guiding minds who support our community with their knowledge, insights, and direction.",
        members: [
            {
                "name": "Dinesh Thapa",
                "role": "Advisor",
                "image": "/dinesh-thapa.avif"
            },
            {
                "name": "Arbind Kumar Dubey",
                "role": "Advisor",
                "image": "/arbind-dubey.avif"
            },
            {
                "name": "Vishnu Neupane",
                "role": "Advisor",
                "image": "/vishnu-neupane.avif"
            }
        ]
    },
    {
        category: "president advisor",
        members: [{
            "name": "Hemraj Shahi",
            "role": "Presidential Advisor",
            "image": "/hemraj-shahi.avif"
        }]
    },
    {
        category: "grade_12",
        members: [
            {
                "name": "Awashkar Shrestha Nagarkoti",
                "role": "Member"
            },
            {
                "name": "Lakshya Khanal",
                "role": "Member"
            },
            {
                "name": "Pari Adhikari",
                "role": "Member"
            },
            {
                "name": "Shisir Dhakal",
                "role": "Member"
            },
            {
                "name": "Aayush Kunwar Chhetri",
                "role": "Member"
            },
            {
                "name": "Ravi Tharu",
                "role": "Member"
            },
            {
                "name": "Kamal Prasad Bhandari",
                "role": "Member"
            },
            {
                "name": "Anjish Nyoupane",
                "role": "Member"
            },
            {
                "name": "Bishal Pokhrel",
                "role": "Member"
            },
            {
                "name": "Aayush Kalwar",
                "role": "Member"
            }
        ]
    },
    {
        "category": "grade_11",
        "members": [
            {
                "name": "Prashant Pandey",
                "role": "Member"
            },
            {
                "name": "Sagar Sharma",
                "role": "Member"
            },
            {
                "name": "Keshav Sharma Ghimire",
                "role": "Member"
            },
            {
                "name": "Aswin Gautam",
                "role": "Member"
            },
            {
                "name": "Asim Kandel",
                "role": "Member"
            },
            {
                "name": "Sujan Barghare",
                "role": "Member"
            },
            {
                "name": "Sugam Neupane",
                "role": "Member"
            },
            {
                "name": "Danish Chidi",
                "role": "Member"
            }
        ]
    },
    {
        "category": "grade_10",
        "members": [
            {
                "name": "Abhi Tiwari",
                "role": "Member"
            },
            {
                "name": "Khusi Nisa Banu",
                "role": "Member"
            },
            {
                "name": "Rohit Kumar Teli",
                "role": "Member"
            },
            {
                "name": "Roshani Bhattarai",
                "role": "Member"
            },
            {
                "name": "Abhisek Panthi",
                "role": "Member"
            },
            {
                "name": "Jenny Thapa",
                "role": "Member"
            },
            {
                "name": "Aarakshya Khanal",
                "role": "Member"
            },
            {
                "name": "Utkarsh Shukla",
                "role": "Member"
            },
            {
                "name": "Lija Thapa Magar",
                "role": "Member"
            },
            {
                "name": "Aakriti Thapa",
                "role": "Member"
            },
            {
                "name": "Arun Thakur",
                "role": "Member"
            },
            {
                "name": "Sushant Barma",
                "role": "Member"
            }
        ]
    },
    {
        "category": "grade_9",
        "members": [
            {
                "name": "Prasoon Kandel",
                "role": "Member"
            },
            {
                "name": "Prasum Shrestha",
                "role": "Member"
            },
            {
                "name": "Dilsan Basnet",
                "role": "Member"
            },
            {
                "name": "Pratik Chalise",
                "role": "Member"
            },
            {
                "name": "Basudeb Pandey",
                "role": "Member"
            },
            {
                "name": "Giniz Gyawali",
                "role": "Member"
            },
            {
                "name": "Sakshyam Gautam",
                "role": "Member"
            },
            {
                "name": "Kapil Bahadur Chhetri",
                "role": "Member"
            },
            {
                "name": "Siddhant Poudel",
                "role": "Member"
            },
            {
                "name": "Utsab Pandey",
                "role": "Member"
            },
            {
                "name": "Bibek Pandey",
                "role": "Member"
            },
            {
                "name": "Sushan Rayamajhi",
                "role": "Member"
            },
            {
                "name": "Amrit Poudel",
                "role": "Member"
            },
            {
                "name": "Ayam Paudel",
                "role": "Member"
            },
            {
                "name": "Parbesh Gautam",
                "role": "Member"
            },
            {
                "name": "Abhishek Subedi",
                "role": "Member"
            },
            {
                "name": "Samip Bhandari",
                "role": "Member"
            },
            {
                "name": "Aayush Budhathoki",
                "role": "Member"
            },
            {
                "name": "Dipak KC",
                "role": "Member"
            },
            {
                "name": "Khuman Adhikari",
                "role": "Member"
            },
            {
                "name": "Arpan Poudel",
                "role": "Member"
            },
            {
                "name": "Aaditya Bashyal",
                "role": "Member"
            },
            {
                "name": "Spandan Baral BK",
                "role": "Member"
            },
            {
                "name": "Pratik Adhikari",
                "role": "Member"
            }
        ]
    }

];


export default members;


import {
    Award, Eye, Target,
} from 'lucide-react';

interface FoundationCard {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;

}

interface ActivityItem {
    id: string;
    title: string;
    description: string;
    image: string;
    badge: string;
}

export const foundationData: FoundationCard[] = [
    {
        id: 'mission',
        title: 'Our Mission',
        icon: <Target className="w-28 h-28 text-[#106C81]" />,
        description: 'To foster innovation, inspire creativity, and create a lasting impact through technology. We provide a platform for students to explore, learn, and excel in various fields of ICT while building a strong community of tech enthusiasts.',
   
    },
    {
        id: 'vision',
        title: 'Our Vision',
        icon: <Eye className="w-28 h-28 text-[#106C81]" />,
        description: 'To be the leading technology club that empowers students to become innovative leaders in the digital world. We envision a future where our members contribute significantly to Nepal’s technological advancement and global tech community.',
     
    },
    {
        id: 'values',
        title: 'Our Values',
        icon: <Award className="w-28 h-28 text-[#106C81]" />,
        description: 'Innovation, collaboration, excellence, and inclusivity. We believe in continuous learning, ethical technology use, and creating opportunities for all students regardless of their background or current skill level.',
    },
];

export const activities: ActivityItem[] = [
    {
        id: 'workshops',
        title: 'Workshops & Training',
        description: 'Regular hands-on sessions on modern programming languages, web development, AI/ML, and emerging software technologies.',
        image: "/workshop1.png",
        badge: 'Skill Building',
    },
    {
        id: 'competitions',
        title: 'Competitions & Hackathons',
        description: 'Organizing and participating in competitive coding contests, intense hackathons, and regional tech challenges.',
        image: "/competition1.png",
        badge: 'Competitive',
    },
    {
        id: 'projects',
        title: 'Project Development',
        description: 'Collaborative real-world projects that solve actual problems while building production-ready engineering skills.',
        image: "/project.png",
        badge: 'Hands-on',
    },
    {
        id: 'industry',
        title: 'Industry Connections',
        description: 'Exclusive networking events with tech professionals, alumni interactions, and guest lectures from industry leaders.',
        image: "/networking.png",
        badge: 'Networking',
    },
    {
        id: 'research',
        title: 'Research & Innovation',
        description: 'Supporting student-led research initiatives, experimental prototyping, and fostering an inventive engineering mindset.',
        image: "/research1.png",
        badge: 'R&D',
    },
    {
        id: 'community',
        title: 'Community Outreach',
        description: 'Tech awareness bootcamps, open-source workshops, and digital literacy initiatives empowering the local community.',
        image: "/community1.png",
        badge: 'Impact',
    },
];
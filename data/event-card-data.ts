export interface ClubEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string;
  image: string;
}

export const clubEvents: ClubEvent[] = [
  {
    id: "1",
    title: "INSTALLATION CEREMONY 2025",
    description: "Successfully completed installation ceremony marking th...",
    date: "7/27/2025",
    location: "Kalika Manavgyan Secondary School",
    participants: "100 participants",
    image: "/installation.avif", // Update with your actual image path
  },
  {
    id: "2",
    title: "NEW LEADERSHIP BEGINS",
    description: "President Siddhant Panthi reveals the Board of Directors for the...",
    date: "7/27/2025",
    location: "Kalika Manavgyan Secondary School",
    participants: "100 participants",
    image: "/mainbanner.avif",
  },
  {
    id: "3",
    title: "IT FEST 2082 - TITLE WINNERS",
    description: "ICT Club of Kalika becomes the Title Winner of IT Fest 2082...",
    date: "8/29/2025",
    location: "Chitwan",
    participants: "50 participants",
    image: "/IT FEST.avif",
  },
  {
    id: "4",
    title: "DIGITAL HORIZON - Syangja Edition",
    description: "3-day mentorship program empowering students with...",
    date: "11/6/2025",
    location: "Gainchaur Academy, Syangja",
    participants: "150 participants",
    image: "/syangjamain.avif",
  },
  {
    id: "5",
    title: "DIGITAL HORIZON - PALPA EDITION",
    description: "3-day mentorship program bringing digital literacy to Palpa -...",
    date: "6/30/2082",
    location: "Gaijha Sunrise Academy, Palpa",
    participants: "120 participants",
    image: "/palpamain.avif",
  },
  {
    id: "6",
    title: "AI GUFF - Rebooting Conversations with AI",
    description: "A session on Artificial Intelligence & its Career Roadmap delivered b...",
    date: "11/13/2025",
    location: "Kalika Manavgyan Secondary School",
    participants: "200 participants",
    image: "/aiguffmain.avif",
  },
  {
    id: "7",
    title: "Resume Building Workshop",
    description: "A professional resume building workshop organized in...",
    date: "11/27/2025",
    location: "Kalika Manavgyan Secondary School",
    participants: "30 participants",
    image: "/resume-building.avif",
  },
];
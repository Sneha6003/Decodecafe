import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ cuccessful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
]
export const expertise = [
  {
    id: 1,
    title: "Hack for India",
    slug: "hack-for-india",
    cover: "../images/e1.jpg",
    desc:'Showcased in newspapers. 10K Developers responses. 1500+ teams registered. 48 hour mega hackathon. mentors from reowned tech giants. communities collaborated.',
    date:'20 January 2024',
    mode:'offline',
    location:'ahmedabad',
    category: [{ text: "Seminar" }, { text: "Offline" }, { text: "Developers" }, { text: "Hackathon" }],
  },
  {
    id: 2,
    title: "Decode Devs Meetup",
    slug: "decode-devs-meetup",
    cover: "../images/e3.jpg",
    desc:'flagship developer meetup. speakers from amazon. tech and networking sessions. 500+ responses across the nation. fetch.ai and github sponsors.',
    date:'20 January 2024',
    mode:'offline',
    location:'rajkot',
    category: [{ text: "Software Engineers" }, { text: "Developers" }, { text: "Offline" }, { text: "Meetup" }, { text: "Seminars" }],
  },
  {
    id: 3,
    title: "Fetch.ai Hackathon",
    slug: "fetch-ai-hackathon",
    cover: "../images/e4.jpg",
    desc:'300+ participants. cash prizes worth 25k+. microagent and uagents application',
    date:'20 January 2024',
    mode:'online',
    location:'rajkot',
    category: [{ text: "AI" }, { text: "Hackathon" }],
  },
  {
    id: 4,
    title: "GDSC WOW",
    slug: "gdsc-wow",
    cover: "../images/e2.jpg",
    desc:'Speakers from tech giants. 700+ developers best WoW of that year. Partnering wit GDSC',
    date:'20 January 2024',
    mode:'offline',
    location:'gandhinagar',
    category: [{ text: "GDSC" }, { text: "Seminar" }, { text: "Developers" }, { text: "Speakers" }],
  },
]
export const testimonial = [
  {
    id: 1,
    name: "Alexander Black",
    cover: "../images/e1.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 2,
    name: "Diana Green",
    cover: "../images/e2.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
  {
    id: 3,
    name: "Alexander Black",
    cover: "../images/e3.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 4,
    name: "Diana Green",
    cover: "../images/e4.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
]

export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
]
export const blogdata = [
  {
    id: 1,
    title: "Google AI technology could transform how we self-treat and take medication",
    cover: "../images/blog1.webp",
    catgeory: "AI TECHNLOGY",
    date: "JANUARY 12, 2024",
    desc1:"How many times have you typed your symptoms into a Google search engine to diagnose whatever you think is wrong with you? I do this all the time to have an idea of what is wrong with me before I need to consult my doctor. I want to look into whether it is something I can manage myself with over-the-counter medication.",
    desc2:"Studies have indicated that most of the search engine results are not always right, especially as it concerns our health. Even so, it seems to be our first port of call for information.",
  },
  {
    id: 2,
    title: "How to Deploy ML Solutions with FastAPI, Docker, and GCP",
    cover: "../images/blog2.webp",
    catgeory: "AI-ML",
    date: "FEBRUARY 17, 2024",
    desc1:"Although it may seem that machine learning is all about training fancy models, in the real world, a model (by itself) does not generate value. To turn an ML model into an ML solution (i.e., something valuable), we must “deploy it.”",
    desc2:"This can take many different forms. For example, creating a web interface where users can interact with the model, integrating the model into an existing software system, or even simply setting up an API for developers to access the model (think of OpenAI and the like).",
  },
  {
    id: 3,
    title: "Unlocking the Future: AR/VR App Development in Toronto",
    cover: "../images/blog3.webp",
    catgeory: "AR-VR",
    date: "MARCH 9, 2024",
    desc1:"In the vibrant tech landscape of Toronto, one sector is making waves with its innovative prowess: Augmented Reality (AR) and Virtual Reality (VR) app development. As companies and consumers alike embrace the immersive experiences AR and VR offer, Toronto stands at the forefront, driven by a community of forward-thinking developers and tech enthusiasts. Let’s delve into how Toronto is becoming a hub for AR/VR app development and what makes the city an ideal ground for this technological evolution.",
    desc2:"Toronto, Canada’s largest city, is renowned for its diverse and dynamic tech scene. The city boasts a rich pool of talent, world-class educational institutions, and a robust support system for startups. Here’s why Toronto is leading the charge in AR/VR app development",
  },
  {
    id: 4,
    title: "Here Are My Cybersecurity Side-Hustles For 2024",
    cover: "../images/blog4.webp",
    catgeory: "CYBER-SECURITY",
    date: "APRIL 8, 2024",
    desc1:"A few weeks back, I wrote about my second newsletter around Cybersecurity soloprenuership.As I mentioned, the whole point of this newsletter is to help Cybersecurity professionals build additional income streams alongside their 9-to-5 jobs.",
    desc2:"This is becoming increasingly critical as Cybersecurity is no longer the layoff-proof, recession-proof haven it used to be.This week, I thought I would start listing down every single one of my income streams and side hustles that I have built beside my 9 to 5,I have tried many cybersecurity side-hustles over the years .",
  },
]
export const teamdata = [
  {
    id: 1,
    title: "Rahul Khinchi",
    cover: "../images/t1.jpg",
    post: "CORE TEAM",
    linkedin: "https://www.linkedin.com/in/rahulkhinchi03/",
    github: "https://github.com/Rahulkhinchi03", 
    portfolio: "https://linktr.ee/rahhul.k7",
  },
  {
    id: 2,
    title: "Kshtij Varma",
    cover: "../images/Kshitij-Varma_Tech.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/kshitijvarma21/",
    github: "https://github.com/kstij", 
    portfolio: "https://kshitijvarma.me",
  },
  {
    id: 3,
    title: "Shiv Vishen",
    cover: "../images/Shiv_Vishen - Marketing Team.jpg",
    post: "MARKETING TEAM",
    linkedin: "https://www.linkedin.com/in/shivvishen/",
    github: "https://github.com/shvshn", 
  },
  {
    id: 20,
    title: "Harsh Trivedi",
    cover: "../images/Harsh-Trivedi_OutReach Team.jpg",
    post: "OUTREACH TEAM",
    linkedin: "https://www.linkedin.com/in/harsh-trivedi03/",
    github: "https://github.com/Harsh-Trivedi03", 
    
  },
  {
    id: 4,
    title: "Reedham Pujara",
    cover: "../images/img.jpeg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/reedham-pujara/",
    github: "https://github.com/Reedham20", 
    
  },
  {
    id: 5,
    title: "Sahil Tiwari",
    cover: "../images/SAHIL_TECH-TEAM.jpg",
    post: "TEACH TEAM",
    linkedin: "https://www.linkedin.com/in/sahil-tiwari-8a166926b",
    github: "https://github.com/sahil-1610", 
    
  },
  {
    id: 6,
    title: "Sneha Singh",
    cover: "../images/SnehaTech.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/sneha-singh-636578273/",
    github: "https://github.com/Sneha6003", 
    
  },
  {
    id: 7,
    title: "Urmit Tajwala",
    cover: "../images/Urmit_ design .jpg",
    post: "DESIGN TEAM",
    linkedin: "https://www.linkedin.com/in/urmit-tajwala-5296a1221/",
    github: "https://github.com/URMIT18", 
    
  },
  {
    id: 8,
    title: "Kenil Kavar",
    cover: "../images/Kenil Kavar_TECH.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/kenil-kavar",
    github: "https://github.com/Kenil-kavar", 
    
  },
  {
    id: 9,
    title: "Nidhi Dattani",
    cover: "../images/Nidhi_Dattani-Marketing Team.jpg",
    post: "MARKETING TEAM",
    linkedin: "http://www.linkedin.com/in/nidhidattani",
    github: "https://github.com/nidhidattani13", 
    
  },
  {
    id: 10,
    title: "Vidya Sinha",
    cover: "../images/VIDYA_SINHA Marketing Team.jpg",
    post: "MARKETING TEAM",
    linkedin: "https://www.linkedin.com/in/vidya-sinha-88715224b?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BH%2FzgEISCQm62Dpve%2FUuJJQ%3D%3D",
    github: "https://github.com/VidyaSinha", 
    
  },
  {
    id: 11,
    title: "Vaibhav Sharma",
    cover: "../images/Vaibhav Sharma_Design.jpg",
    post: "DESIGN TEAM",
    linkedin: "https://www.linkedin.com/in/vaibhav-sharma-84606b256/",
    github: "https://github.com/vaibhavvext", 
    portfolio: "https://www.instagram.com/vlenduh/",
  },
  {
    id: 12,
    title: "Khushal Khandelwal",
    cover: "../images/KhushalKhandelwal_Teach.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/khushal-khandelwal/",
    github: "https://github.com/K-Khushal", 
    portfolio: "https://khushalkhandelwal.com/",
  },
  {
    id: 13,
    title: "Yagnesh Patoriya",
    cover: "../images/YAGNESH.jpg",
    post: "CORE TEAM",
    linkedin: "https://www.linkedin.com/in/yagnesh-patoriya",
    github: "https://github.com/yaggit", 
    
  },
  {
    id: 14,
    title: "Nishi Panchal ",
    cover: "../images/Nishi Panchal - TECH.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/nishi-panchal-a09b64255",
    github: "https://github.com/nishi1403", 
    
  },
  {
    id: 15,
    title: "Pratik Dungano",
    cover: "../images/Pratik Dungano-TECH.jpeg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/pratik-dungano-9a6892250/",
    github: "https://github.com/Pratik-Dungano", 
    
  },
  {
    id: 16,
    title: "Parv Pareek",
    cover: "../images/Parv_Pareek-Tech.png",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/parvpareek",
    github: "https://github.com/parvpareek", 
    portfolio: "https://parvpareek.github.io",
  },
  {
    id: 17,
    title: "Virengiri Goswami",
    cover: "../images/Virengiri_TECH.jpg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/virengiri-goswami",
    github: "https://github.com/Veerengiri", 
    
  },
  {
    id: 18,
    title: "Nishtha Pitroda",
    cover: "../images/Nishtha_Pitroda_TECHTEAM.jpeg",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/nishthapitroda/",
    github: "https://github.com/pitrodanishtha09", 
    portfolio: "https://portfolio-website-nualjr7xj-nishtha-pitrodas-projects.vercel.app/",
  },
  {
    id: 19,
    title: "Dinesh Talwadker",
    cover: "../images/DINESH_TALWADKER_TECH_TEAM.png",
    post: "TECH TEAM",
    linkedin: "https://www.linkedin.com/in/dineshtalwadker/",
    github: "https://github.com/dinxsh/", 
    portfolio: "https://dinxsh.xyz/",
  },
  {
    id: 21,
    title: "Darshan Gupta",
    cover: "../images/Darshan_Gupta - Design.png",
    post: "DESIGN TEAM",
    linkedin: "https://www.linkedin.com/in/darshanguptatech/",
    github: "https://github.com/DDgupta07", 
    portfolio: "https://bento.me/darshanguptadesign",
  },
  
]

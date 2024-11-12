import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Graphics Designer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Mnistry of Innovation and Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developed and maintained web applications using Redux, Express.js, and React frameworks across multiple projects.",
        "Collaborated with cross-functional teams, including hardware specialists and project managers, to ensure cohesive and high-quality project outcomes.",
        "Implemented responsive design principles and ensured cross-browser compatibility.",
        "Participated in code reviews, providing constructive feedback to other developers and ensuring adherence to best practices.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Adika",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Hardware Engineer and Full Stack Developer",
      company_name: "Moti Engineering",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Diagnosed and resolved hardware issues in financial systems, ensuring smooth operations of card readers, cash dispensers, and receipt printers.",
        "Collaborated with technical teams to replace faulty components and improve system reliability.",
        "Analyzed and fixed software glitches affecting transaction processing, ensuring seamless user interactions.",
        "Actively participated in troubleshooting sessions, contributing to a team-oriented problem-solving environment.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "GIGI Leather",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kirubel’s courage to tackle any challenge head-on and his relentless focus on finishing tasks to perfection made him an invaluable team member",
      name: "Kibrom Hailu",
      designation: "Backend Developer",
      company: "A2SV",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFSLXOJqLfuuw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727891087095?e=1736985600&v=beta&t=DBHppN_RPaMIuuUYensDPcQNdTBr3iwwu2yDEYPghNw",
    },
    {
      testimonial:
        "Working with Kirubel showed me the power of persistence—he’s unstoppable until the job is done, inspiring everyone around him to give their best",
      name: "Lidya Abraham",
      designation: "Data Analyst",
      company: "Kaldis Coffee",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEY_Jdgb4-d9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724235226620?e=1736985600&v=beta&t=oDq2L6VsCgoJz3Ndzr9WmZMFGcrzMZ-IrRnWmRp_Mw0",
    },
    {
      testimonial:
        "Kirubel’s fearless approach to problem-solving and dedication to excellence have raised the bar for our entire team",
      name: "Leole Masresha",
      designation: "Full Stack Developer",
      company: "Ashewa Technologies",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGz-V77slGgLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720463495156?e=1736985600&v=beta&t=eFAVsdeO9oBAruvgw072opqDd-mfe4-rt2A_eeWXX-4",
    },
  ];
  
  const projects = [
    {
      name: "Apple-Clone",
      description:
        "A web-based platform replicating Apple's website, showcasing a seamless and responsive design with product displays, navigation, and interactive elements, offering users an authentic Apple browsing experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Kiracr/Apple-clone",
      ive_code_link: "https://gilded-bubblegum-99254e.netlify.app/",
    },
    {
      name: "Amazon-Clone",
      description:
        "A web-based platform that emulates Amazon’s online shopping experience, allowing users to browse, search, and view product details across categories, featuring a user-friendly interface with shopping cart and checkout functionalities ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Kiracr/Amazon-Clone",
      ive_code_link: "https://amazon-clone-by-kira.netlify.app/",
    },
    {
      name: "Netflix-Clone",
      description:
        "A web-based platform replicating Netflix’s streaming service, allowing users to browse, search, and view details for various movies and shows, featuring a sleek, responsive interface with user authentication and personalized watchlists for an immersive viewing experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Kiracr/Netflix-Clone",
      ive_code_link: "https://netflix-clone-1e77f.web.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
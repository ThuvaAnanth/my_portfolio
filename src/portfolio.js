/* Enhanced Portfolio Configuration for UI/UX Designer - Thuvaraga */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "THUVARAGA",
  title: "Hi, I'm Thuvaraga",
  subTitle: emoji(
    "🎨 Passionate UI/UX Designer & Frontend Developer creating intuitive digital experiences that blend creativity with functionality. I specialize in user-centered design, prototyping in Figma, and bringing designs to life with React & modern web technologies ✨"
  ),
  resumeLink: "https://drive.google.com/file/d/1fFgyqiFMZQysLm8ikNn3RJJEg3rmtGzy/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ThuvaAnanth",
  linkedin: "https://www.linkedin.com/in/thuvaraga-anantharajah-9674292b3/",
  gmail: "thuvananth14@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "UI/UX DESIGNER & FRONTEND DEVELOPER CRAFTING EXCEPTIONAL USER EXPERIENCES",
  skills: [
    emoji("🎨 Design user-centered interfaces with a focus on usability, accessibility, and aesthetic appeal"),
    emoji("🔬 Conduct user research, create wireframes, prototypes, and design systems using Figma"),
    emoji("⚡ Develop responsive web applications with React, ensuring pixel-perfect implementation of designs"),
    emoji("📱 Create seamless experiences across web and mobile platforms with modern design principles")
  ],
  softwareSkills: [
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Adobe XD", 
      fontAwesomeClassname: "fab fa-adobe"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "J/Methodist Girls' High School",
      logo: require("./assets/images/WhatsApp Image 2025-01-30 at 23.32.30_061587f8.jpg"),
      subHeader: "A/L Physical Science",
      duration: "2011 - 2019",
      desc: "Member of Board of Prefects from 2017 to 2019. Developed leadership skills and organizational abilities that later contributed to my design thinking approach."
    },
    {
      schoolName: "SLIIT University",
      logo: require("./assets/images/WhatsApp Image 2025-01-30 at 23.33.06_d0e1df83.jpg"),
      subHeader: "BSc (Hons) in Information Technology",
      duration: "September 2022 - April 2026",
      desc: "Specializing in Information Technology with focus on UI/UX Design and Frontend Development. Currently maintaining strong academic performance while gaining practical experience through internships.",
      descBullets: [
        "Specialized coursework in Human-Computer Interaction and User Experience Design",
        "Active participation in design competitions and technology workshops",
        "Internship experience at SriLankan Airlines as UI/UX Designer & Software Engineer"
      ]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "UI/UX Design (Figma)",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "User Research & Testing",
      progressPercentage: "85%"
    },
    {
      Stack: "Prototyping & Wireframing", 
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Developer",
      company: "Techorin",
      companylogo: require("./assets/images/work.jpeg"),
      date: "March 2025 - Present",
      desc: "Currently working as a Frontend Developer specializing in modern web technologies. Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React to create engaging user experiences.",
      descBullets: [
        "Developing responsive web applications using React.js",
        "Writing clean, maintainable code with HTML5, CSS3, and ES6+ JavaScript",
        "Implementing modern UI/UX designs with pixel-perfect accuracy",
        "Collaborating with design and backend teams to deliver seamless user experiences"
      ]
    },
    {
      role: "UI/UX Designer & Software Engineer",
      company: "SriLankan Airlines",
      companylogo: require("./assets/images/th.jpeg"),
      date: "June 2024 - February 2025",
      desc: "Led UI/UX design initiatives and frontend development projects, creating intuitive user interfaces for various airline systems. Collaborated with cross-functional teams to deliver user-centered design solutions that improved operational efficiency and customer experience.",
      descBullets: [
        "Designed and prototyped multiple web applications using Figma",
        "Implemented responsive frontend designs using modern web technologies",
        "Conducted user research and usability testing to optimize user experience",
        "Created design systems and style guides for consistent UI patterns"
      ]
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Featured Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "UI/UX DESIGN PROJECTS SHOWCASING USER-CENTERED SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/th (1).jpeg"),
      projectName: "Crisis Management System",
      projectDesc: "Comprehensive web application for emergency response management featuring intuitive dashboards, real-time notifications, and streamlined workflows for crisis coordination teams.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.figma.com/proto/zlfbPTfUOzHcQCQg8k5mog/Crisis-Management?page-id=96%3A275&node-id=96-276&p=f&viewport=526%2C359%2C0.37&t=wIf91CnRkaBh07qo-1&scaling=min-zoom&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/Screenshot 2025-01-31 102023.png"),
      projectName: "Charika - Digital Platform",
      projectDesc: "Modern web application designed with Angular.js and Figma, focusing on user engagement and seamless navigation. Features responsive design and optimized user flows.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.figma.com/proto/H0NgZ6ElBnZ3Vc22A0fI59/Charika?page-id=239%3A397&node-id=611-39&viewport=102%2C156%2C0.05&t=AwQlgszDlm0aPJL6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=611%3A39"
        }
      ]
    },
    {
      image: require("./assets/images/OIP.jpeg"),
      projectName: "Nandhu’s Kitchen Menu Design",
      projectDesc: "Designed a premium food promotional menu and branding poster using Canva for an authentic Jaffna cuisine restaurant, focusing on customer engagement, product visibility, and marketing-driven visual hierarchy.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.canva.com/design/DAHL91mVkLQ/-2VKeziLwvnq2v1HIOdcWA/edit"
        }
      ]
    },
    {
      image: require("./assets/images/th (3).jpeg"),
      projectName: "Aero Letters - Communication Hub",
      projectDesc: "Streamlined communication platform for airline operations, featuring clean interface design and efficient workflow management for internal correspondence.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.figma.com/proto/C6HU1RTTmGJFbYo3d3PuJ6/AeroLetters?page-id=0%3A1&node-id=3-2&p=f&viewport=505%2C355%2C0.04&t=F2WKjbp1pSzeQiZ1-1&scaling=min-zoom&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/OIP (1).jpeg"),
      projectName: "Nandhu’s Kitchen – Menu Poster v2",
      projectDesc: "Designed a professional restaurant menu poster in Canva for an authentic Jaffna cuisine brand, focusing on attractive food presentation, clear menu structure, and strong brand visibility for marketing and customer engagement.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.canva.com/design/DAHH1Tf8svk/Ado0MIh1SjXtvHUkHq781g/edit"
        }
      ]
    },
    {
      image: require("./assets/images/OIP (2).jpeg"),
      projectName: "Corrado’s Restaurant – Menu Design",
      projectDesc: "Designed a promotional lunch menu in Canva with clear food sections, pricing, and an attractive layout to improve customer engagement and restaurant marketing.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.canva.com/design/DAHINZgeVXU/Y6TV2YicdzvxzCAXJw0Jcg/edit"
        }
      ]
    },
    {
      image: require("./assets/images/th (6).jpeg"),
      projectName: "Athoc - Emergency Communication",
      projectDesc: "Emergency communication system with focus on rapid information dissemination and crisis response coordination. Designed for clarity and accessibility under pressure.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://www.figma.com/proto/BEmfAxhvH6XRpGA4JKlvAU/Adhoc?page-id=417%3A638&node-id=706-2574&viewport=410%2C322%2C0.02&t=ykk466YrdDrVHoGe-1&scaling=scale-down&content-scaling=fixed"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "UI/UX Design Excellence",
      subtitle: "Successfully designed and delivered 8+ user-centered applications during internship at SriLankan Airlines, improving user experience and operational efficiency.",
      image: require("./assets/images/WhatsApp Image 2025-01-31 at 00.10.03_4bc6cb42.jpg"),
      imageAlt: "UI/UX Achievement",
      footerLink: []
    },
    {
      title: "Figma Design Systems",
      subtitle: "Created comprehensive design systems and component libraries, ensuring consistency across multiple projects and reducing design-to-development time by 40%.",
      image: require("./assets/images/WhatsApp Image 2025-01-31 at 00.10.03_4bc6cb42.jpg"),
      imageAlt: "Design Systems",
      footerLink: []
    },
    {
      title: "User-Centered Design Approach",
      subtitle: "Applied design thinking methodologies and conducted user research to create solutions that prioritize user needs and business objectives.",
      image: require("./assets/images/WhatsApp Image 2025-01-31 at 00.10.03_4bc6cb42.jpg"),
      imageAlt: "UCD Achievement", 
      footerLink: []
    }
  ],
  display: true
};

// Blog Section
const blogSection = {};

// Talk Section
const talkSection = {};

// Podcast Section
const podcastSection = {};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Let's Work Together ✨"),
  subtitle: "Ready to discuss your next project? Get in touch!",
  number: "+94777557672",
  email_address: "thuvananth14@gmail.com"
};

// Twitter Section
const twitterDetails = {};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

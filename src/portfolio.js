/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivang Tripathi",
  title: "Hi all, I'm Shivang",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Client and Server side applications with Java / SpringBoot / Kafka / Redis and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KaWxV2RU3jcd7Epbv1yEcpvCPJA2ED0N/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shivang370",
  linkedin: "https://www.linkedin.com/in/shivang-tripathi-354b69200/",
  gmail: "shivangtripathi370@gmail.com",
  medium: "https://medium.com/@shiva19rocks",
  stackoverflow: "https://stackoverflow.com/users/15637703/shivang19",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly secure/robust & fast client-server applications"
    ),
    emoji("⚡ Use Proficient tools like Postman/ Intellij/ MySQL WorkBench/ BitBucket/ GitHub/ JIRA"),
    emoji(
      "⚡ Integration of third party services such as NSDL/ AWS / API Gateway"
    ),emoji(
      "⚡ Using AWS & Microservices to build scalable applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Spring-Boot",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "MySql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "JWT",
      fontAwesomeClassname  :"fab fa-keycdn"
    },
    {
      skillName: "MicroService",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Rest-API",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "DynamoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Unleash",
      fontAwesomeClassname: "fa fa-toggle-on"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha Univesity",
      logo: require("./assets/images/GGSIPU.png"),
      subHeader: "Master of Computer Applications in Computer Science",
      duration: "December 2020 - June 2022",
      desc: "Ranked top 5% in the program.",
      descBullets: [
        "Performed BitCoin Price Prediction using Social Impact Analysis",
      ]
    },
    {
      schoolName: "Delhi University, Dyal Singh College",
      logo: require("./assets/images/UOD.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - October 2020",
      desc: "Ranked top 10% in the program. Joined National Cadet Corps and attained NCC-'C' Certificate",
      descBullets: ["Implemented Student Feedback System in Major Project"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "20%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "CredAble",
      companylogo: require("./assets/images/CredAble.jpeg"),
      date: "Feb 2022 – Present",
      desc: "Java |Spring Boot |Rest API |Kafka |Redis |MicroService |Git |JWT |",
      descBullets: [
        "Provided Message Level Encryption for request & response for secure data transfer",
        "Implemented JWT Authorization for enhancing security",
        "Developed Fast, Secure, Reliable API's for Client-Server Communications",
        "Implemented API Documentation using Swagger",
        "Worked with team on the implementation of Grpc for logging DFX API Gateway."
      ]
    },
    {
      role: "SDE-2",
      company: "HashedIn",
      companylogo: require("./assets/images/HashedIn_Logo.jpeg"),
      date: "Apr 2024 - Feb 2025",
      desc: "Java |Spring Boot |OOP |Kafka | WebFlux |MicroServices |Git |Camel |Junits |Design-Patterns |",
      descBullets: [
        "Used Gen AI for Tibco to Spring Boot along with OSP to Spring Boot conversion with prompt tuning.",
        "Implemented Event driven architecture using Kafka/Camel & WebClient for Asynchronous communication between microservices",
        "Optimized SQL queries and applied indexing mechanisms, improving query response time",
        "Created unit tests to validate functionality of codebase, ensuring 90% test coverage"
      ]
    },
    {
      role: "Software Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/Sapients_Logo.jpg"),
      date: "Feb 2025 – Present",
      desc: "Java |Spring Reactive |Rest API |DynamoDb |AWS |MicroService |Unleash |JWT |",
      descBullets: [
        "Developed a high-performance, reusable wrapper library in Java using Unleash SDK for feature flag management across microservices, reducing feature rollout latency by 40% and enabling near-instantaneous feature toggling,significantly improving deployment agility and operational efficiency.",
        "Built scalable microservices and REST APIs leveraging Spring Reactive, AWS DynamoDB, API Gateway for rate limiting, and AWS SNS, achieving a 30% increase in system throughput, ensuring high availability with 99.99% uptime, and delivering seamless, low-latency, cloud integrations for critical applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications that I have done !",

  achievementsCards: [
    {
      title: "Algo ++ Online Certification",
      subtitle: "Completed Certifcation from CodingBlocks for DSALGO",
      image: require("./assets/images/CodingBlocks.png"),
      imageAlt: "CodingBlocks Logo",
      footerLink: [
        {name: "Certification", url: "https://online.codingblocks.com/certificates/CBOL-181263-b4cd"}
      ]
    },
    {
      
      title: "SQL Intermediate Level",
      subtitle: "Completed Certifcation from HackerRank for SQL",
      image: require("./assets/images/HackerRank.webp"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/a08f6219b10e"}
      ]
    },

    {
      title: "SQL Complete BootCamp",
      subtitle: "Completed Certifcation from Udemy for SQL",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: "http://ude.my/UC-debc607f-fe34-4622-b666-3911d62f15ce"}
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Completed Certifcation from AWS for Cloud Practitioner",
      image: require("./assets/images/AWS.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/6e037d2b-a85d-46d9-a50f-01a9705d2472/public_url"}
      ]
    },
    {
      title: "GCP Associate Cloud Engineer",
      subtitle: "Completed Certifcation from GCP for Associate Cloud Engineer",
      image: require("./assets/images/GCP_Logo.png"),
      imageAlt: "GCP Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/9131b7a1-e126-4efd-8db2-5a821cfedb57/public_url"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9821548025",
  email_address: "shivangtripathi370@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};

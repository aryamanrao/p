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
  username: "Aryaman Rao",
  title: "Hi all, I'm Aryaman Rao",
  subTitle: emoji(
    "Enthusiastic Data Architect 📊 adept at sculpting comprehensive data ecosystems, from collection to visualization, leveraging tools such as Python, Java, C++, SQL, Apache Spark, and cutting-edge data engineering methodologies. Passionate about crafting actionable insights and driving informed decisions through the power of data."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QM5d7pBycazmncGePGCGole53RFVSmqn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/aryamanrao",
  gmail: "aryamanrao18@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Adventurous Data Engineer 🚀 on a mission to conquer every data technology stack imaginable! From wrangling data with Python and SQL to soaring through the cloud with Apache Spark and beyond, I thrive on pushing the boundaries of what's possible in the world of data engineering. Let's dive deep into the data cosmos and uncover new frontiers together!",
  skills: [
    emoji(
      "⚡ Expertise in designing and deploying robust data pipelines using Python, SQL, Apache Airflow, and AWS services, ensuring efficient and reliable data processing."
    ),
    emoji("⚡  Specialize in optimizing data pipelines, boosting query performance, and ensuring rock-solid data integrity and security across diverse projects, from real-time analytics to cloud-native architectures."),
    emoji(
      "⚡  Proficient in integrating and optimizing cloud resources across AWS and Azure environments, ensuring seamless data management and interoperability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      skillName: "SpringBoot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      SkillName: "Apache Airflow",
      FontAwesomeClassname: "fab fa-airflow"
    },
    {
    SkillName: "Microsoft Azure",
    FontAwesomeClassname: "fab fa-microsoft"
    },
  
    {
    SkillName: "ServiceNow",
    FontAwesomeClassname: "fab fa-servicenow"
    },

   {
    SkillName: "Prometheus",
    FontAwesomelassname: "fas fa-chart-bar"
   },

  {
    SkillName: "Grafana",
    FontAwesomeClassname: "fas fa-chart-line"
  },

  {
    SkillName: "PostgreSQL",
    FontAwesomeClassname: "fas fa-database"
  },

  {
    SkillName: "MongoDB",
    FontAwesomeClassname: "fab fa-mongodb"
  },

  {
    SkillName: "Kubernetes",
    FontAwesomeClassname: "fab fa-kubernetes"
  },

{
  SkillName: "Jenkins",
  FontAwesomeClassname:"fa-brands fa-jenkins"
},

{
  SkillName: "Node.js",
  FontAwesomeClassname: "fab fa-node-js"
},

{
  SkillName: "TensorFlow",
  FontAwesomeClassname: "fab fa-tensorflow"
},

{
  SkillName: "D3.js",
  FontAwesomeClassname: "fab fa-d3"
},

{
  SkillName: "Pandas",
  FontAwesomeClassname: "fa-solid fa-raccoon"
},

{
  SkillName: "PyTorch",
  FontAwesomeClassname: "fab fa-pytorch"
},

{
  SkillName: "Apache Spark",
  FontAwesomeClassname: "fab fa-spark"
},

{
  SkillName: "Apache Airflow",
  FontAwesomeClassname: "fab fa-airflow"
},

{
  SkillName: "Apache Hadoop",
  FontAwesomeClassname: "fas fa-hdd"
},

{
  SkillName: "Apache Kafka",
  FontAwesomeClassname: "fas fa-project-diagram"
},

{
  SkillName: "Apache Cassandra",
  FontAwesomeClassname: "fas fa-database"
}

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois at Chicago",
      logo: require("./assets/images/uic.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August  2022 - May 2024",
      desc: "Participated in the research of 'Optimizing Real-time Data Processing in Distributed Systems: A Comparative Study of Stream Processing Frameworks'",
      descBullets: [
        "Advanced Natural Language Processing",
        "Advanced Database systems ",
        "Advanced Algorithms and Data Structures",
        "Mobile Application Development",
        "Big Data Visualisation and visual Analytics",
        "Advanced Machine Learning and Data Mining",
        "Deep Learning for computer Vision",
        "Machine learning for Graphs",
        "Parallel and Concurrent Programming",
        "Advanced Software Engineering Principles",
        "Cloud archietect designing ",
      ]
    },
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      logo: require("./assets/images/Chaitanya_Bharathi_Institute_of_Technology_logo - Copy.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 2015 - May 2019",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS Ecosystem: Proficiency in various AWS services such as S3, Redshift, EMR, Glue, Athena, and Lambda ", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },

    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Apache Spark: Expertise in Apache Spark for processing large-scale datasets in distributed environments, implementing complex data transformations, and building machine learning pipelines.",
      progressPercentage: "80%"
   
    },
    {
      Stack: "Mastery of the Python data ecosystem, including libraries like Pandas, NumPy, Scikit-learn, and TensorFlow/PyTorch for data manipulation, analysis, modeling, and machine learning.",
      progressPercentage: "85%"
    },
    {
      Stack:  "Expertise in containerization technologies like Docker and container orchestration platforms like Kubernetes for deploying and managing data-intensive applications in scalable and portable environments.",
      progressPercentage: "75%"
    }

  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Engineer",
      company: "University of Illinois at Chicago",
      companylogo: require("./assets/images/uic.png"),
      date: "Sept 2022 – Present",
      descBullets: [
        "Orchestrated a comprehensive overhaul of data infrastructure leveraging Amazon Redshift and Snowflake, resulting in a 35% enhancement in query efficiency and a 50% augmentation in analytics capacity, thereby empowering the organization with robust, scalable data capabilities.",
        "Spearheaded a transformative shift in ETL processes by integrating Apache Airflow, culminating in a remarkable 40% reduction in processing times and a 60% improvement in data integrity through automated checks, solidifying analytics reliability and elevating insight quality to new heights."
      ]
    },
    {
      role: "Lead Data Engineer",
      company: "Nekthan Gamming",
      companylogo: require("./assets/images/download (2).png"),
      date: "Apr 2021 – July 2022",
      descBullets: [
        "Orchestrated the migration of legacy data systems to Amazon Redshift, ensuring seamless integration and minimal disruption to ongoing operations, resulting in a streamlined and centralized data architecture.",
        "Spearheaded the development and implementation of robust data governance policies and procedures, ensuring compliance with industry regulations such as GDPR and CCPA, while fostering a culture of data-driven decision-making and innovation within the organization."
      ]
    },
    {
      role: "Data Engineer - 3",
      company: "Markov Technologies",
      companylogo: require("./assets/images/markov_research_and_analytics_services_opc_pvt_ltd_cover.jfif"),
      date: "Jul 2019 – Mar 2021",
      descBullets: ["Led strategic AWS deployments for an e-commerce leader, utilizing services such as S3, Redshift, and Glue to enhance data processing efficiency. Employed Infrastructure as Code (IaC), auto-scaling, and load balancing techniques, resulting in a 25% increase in market reach while concurrently reducing operational costs."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ratnadeep - Copy.jfif"),
      projectName: "Ratnadeep",
      projectDesc: "Delivery",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ratnadeep.online/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ss - Copy.png"),
      projectName: "ShoppersStop",
      projectDesc: "One stop express for Fshion",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.shoppersstop.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Hyderabad",
      subtitle:
        "First person from my college to be selected as Google Code-in Finalist from 4000 students from 77 different colleges.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Deans List 2024- University of Illinois at chicago",
      subtitle:
        "In recognition of academic excellence, I was honored to be among the top 10 computer science students selected for the Dean's List at the University of Illinois at Chicago (UIC). This achievement reflects my dedication to excellence in my studies and highlights my commitment to academic achievement within the field of computer science.",
      image: require("./assets/images/uic - Copy.png"),
      imageAlt: "UIC Logo",
      footerLink: [
        
      ]
    },

    {
      title: "Best Research paper at Chaitanya Bharathi Institute of Technology  ",
      subtitle: "I am proud to have been awarded the first prize for my research paper at Chaitanya Bharathi Institute of Technology. This acknowledgment not only validates the quality and significance of my research but also underscores my dedication to scholarly inquiry and innovation within the field of Deep Learning. Winning this prestigious award has further fueled my passion for academic exploration and reinforced my commitment to making meaningful contributions to the field.",
      image: require("./assets/images/Chaitanya_Bharathi_Institute_of_Technology_logo.png"),
      imageAlt: "CBIT Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ijrar.org/viewfull.php?&p_id=IJRAR21D1585"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
  "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-312-678-1614",
  email_address: "aryamanrao18@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
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
  display: false // Set false to hide this section, defaults to true
};
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

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

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Yang Xu",
  title: "Hi all, I'm Yang",
  subTitle: emoji(
    "A Backend Developer with considerable training and passion to solve problems and grow, is fast-learning, self-motivated and able to work well in a team. Seeking for Opportunities in Software Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QDSaZ2QJPBS5sWJ3FsyihTMSsCDArsCY/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hyperyx37",
  linkedin: "https://www.linkedin.com/in/yang-xu-0426a9180/",
  gmail: "hyperyx37@gmail.com",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "Acquired Knowledge in both software programming and hardware programming",
  skills: [
    emoji(
      "⚡ Academic experiences in PCB design and hardware programming, Advanced Understanding in DSP and image processing"
    ),
    emoji(
      "⚡ Basic understanding of Machine learning with school and personal projects"
    ),
    emoji(
      "⚡ Understand Object Oriented Programming and commonly used algorithm"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western University",
      logo: require("./assets/images/Westernlogo.jpg"),
      subHeader: "Master of Engineering in Electrical and Computer Engineering",
      duration: "September 2019 - October 2020",
      desc: "GPA: 3.7"
    },
    {
      schoolName: "Ohio State University",
      logo: require("./assets/images/OhioLogo.jpg"),
      subHeader: "Bachelor of Science in Electrical and Computer Engineering",
      duration: "September 2013 - April 2019",
      desc: "Major GPA: 3.755"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Hardware",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine learning and algorithm",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Developer",
      company: "Broadridge",
      companylogo: require("./assets/images/broadridge-logo.png"),
      date: "Sep 2021 – Present",
      desc: "Working as an Backend Developer, main stack Java and PL/SQL",
      descBullets: [
        "Build and optimize SQL server queries and Java code",
        "Develop and maintain financial solution applications",
        "Use version control tool Subversion(SVN), project modeling tool Rational Rose, IBM liberty Server and internal project management tool"
      ]
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
  title: "Projects",
  subtitle: "SOME ACADEMIC AND PERSONAL PROJECTS ON GITHUB",
  projects: [
    {
      image: require("./assets/images/SketchPad.png"),
      projectName: "Java SketchPad",
      projectDesc:
        "Use Java AWT API to program a sketchpad program with additional functions of selection, move, cut, copy, paste and undo",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/hyperyx37/SketchPad"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/HeartDisease.png"),
      projectName: "HeartDisease analysis",
      projectDesc: "Implement several models to analyze heart disease",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/hyperyx37/HeartDisease"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Java-Covid-Tracker.webp"),
      projectName: "Java Covid Tracker",
      projectDesc: "Track the cases of Covid in different areas",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/hyperyx37/Java-Covid-Tracker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Calculator.png"),
      projectName: "Java Calculator",
      projectDesc: "Use Java AWT API to design a simple calculator project",
      footerLink: [
        {
          name: "Visit Github repository",
          url: "https://github.com/hyperyx37/Calculator"
        }
      ]
    },
    {
      image: require("./assets/images/Github.png"),
      projectName: "More Projects",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Github Homepage",
          url: "https://github.com/hyperyx37"
        }
        //  you can add extra buttons here.
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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
  display: false // Set false to hide this section, defaults to true
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
  number: "",
  email_address: "hyperyx37@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};

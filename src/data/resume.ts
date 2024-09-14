import { type Props as ResumeItemProps } from "../components/resume/ResumeItem.astro";
import { type Props as ResumeSectionProps } from "../components/resume/ResumeSection.astro";

export const resumeData: ResumeValue = [
  {
    title: "Software Engineer",
    fromDate: new Date("April 1, 2023"),
    companyName: "Metabase",
    location: "Remote • Tallinn, Estonia",
    icon: "metabase",
    technologies: [
      "Typescript",
      "Javascript",
      "Clojure",
      "React",
      "Styled Components",
      "CSS Modules",
      "Mantine",
      "Postgres",
      "git",
    ],
    items: [
      {
        title: "Embedding SDK for React",
        description: [
          "Implemented key features such as collection browser, interactive questions with customizable layouts, static dashboards, and question creation/editing functionality.",
          "Improved SDK authentication mechanisms, including JWT flows and API keys.",
          "Implemented dynamic fonts, stable IDs, and customization options for various SDK components.",
        ],
        link: "https://gist.github.com/oisincoveney/ed817b2944e9bfc2d0ea1016f93ebcb8",
      },
      {
        title: "Support filters in global search results",
        description: [
          "Redesigned the quick search dropdown and the main search page in collaboration with designers, backend engineers, and product managers.",
          "Added new filters for open source and enterprise customers with new Typescript components and modifications to Clojure repository code.",
        ],
        link: "https://github.com/metabase/metabase/issues/27982",
      },
      {
        title: "Auto-wiring dashboard field filters",
        description: [
          "Improved the usability and speed of adding dashboard filters by automatically detecting and applying filters to similar queries within the dashboard.",
          "Added explanatory toast and an 'Undo' button help users revert changes if needed.",
        ],
        link: "https://github.com/metabase/metabase/issues/35147",
      },
      {
        title: "Improve Embedding Discoverability and Usability",
        description: [
          "Collaborated with designers and product managers to improve static/public dashboard embedding.",
          "Added menu to simplify public link sharing, new menu items to encourage static and interactive embedding, and new BE settings code to present the company license to open source users.",
        ],
        link: "https://github.com/metabase/metabase/issues/35961",
      },
      {
        title: "Code Refactoring for Design System, TS, and CSS Modules",
        description: [
          "Worked with designers to explore different frontend frameworks to develop a design system for Metabase.",
          "Converted many components to Typescript and MB Design System, in an attempt to increase maintainability while reducing prop-drilling, code duplication, and bugs.",
          "Moved components away from styled components towards Mantine components and CSS modules to reduce the number of style systems within the codebase and allow for increased customizability for the Embedding SDK.",
        ],
        link: "https://github.com/metabase/metabase/issues/35961",
      },
      {
        title: "Bug Fixes",
        description: [
          "Worked with product designers, managers, and engineering staff to ensure that bugs were solved in a timely manner, and wrote end-to-end and unit tests to ensure that bugs do not pop up again.",
        ],
        link: "https://gist.github.com/oisincoveney/4b6ee58a6c8a6576f3cdaab67f89bbb3",
      },
    ],
  },
  {
    title: "Founding Software Engineer",
    fromDate: new Date("June 30, 2021"),
    toDate: new Date("March 18, 2023"),
    companyName: "Alvin",
    location: "Tallinn, Estonia",
    icon: "alvin",
    technologies: [
      "Typescript",
      "Javascript",
      "Vue.js",
      "Python",
      "Django",
      "Postgres",
      "Elasticsearch",
      "ANTLR",
      "git",
    ],
    items: [
      {
        title:
          "Code-Driven Design Pipeline, UI Standardization, and Vue 3 Migration",
        description: [
          "Developed design pipeline and created Alvin-specific UI library to help non-frontend developers generate rapid prototypes more easily.",
          "Added Storybook, Chromatic, and story.to.design to code base to increase component documentation, automate visual regression testing, and help product managers create designs based on latest component versions.",
          "Led effort to migrate our Vue 2 + Webpack stack to Vue 3 + Vite, allowing for better code reusability, quicker prototyping, and 50% lower build times for automated testing and cloud dev environment generation.",
        ],
      },
      {
        link: "https://docs.alvin.ai/feature-guide/search",
        title: "Search Language & Asset Discovery",
        description: [
          "Created an internal search language using ANTLR to drive the development of asset search and discovery, and simplify the display of asset filters and search results.",
          "Designed and implemented the Assets page, an advanced data asset search page with filters for usage, names, tags, and other metadata.",
          "Created the Views page for saved searches, allowing data engineers to create and share sets of filters with other stakeholders.",
        ],
      },
      {
        title: "External Data Lineage Integration with Amundsen",
        description: [
          "Developed an open source connector to provide Alvin’s data lineage capabilities to existing Amundsen users, and delivered a presentation to the Amundsen community about plugin development.",
        ],
        link: "https://medium.com/alvin-ai/data-lineage-in-amundsen-powered-by-alvin-df50cd40944c",
      },
      {
        title: "Data Catalogue & Product UI Overhaul",
        description: [
          "Designed and developed product UI overhaul to focus on data catalogue and search capabilities, implemented with Vue + Quasar + SASS.",
          "Documented research on competing tools and generated wireframes for internal feedback with Figma.",
        ],
      },
      {
        title: "Impact Analysis Optimization",
        description: [
          "Optimized asset impact analysis with Elasticsearch and Python threading, reducing load times by 30%.",
        ],
        link: "https://docs.alvin.ai/feature-guide/impact-analysis",
      },
    ],
  },
  {
    title: "Full Stack Software Engineer",
    fromDate: new Date("May 15, 2020"),
    toDate: new Date("August 15, 2020"),
    companyName: "GoLinks",
    location: "Remote • San Jose, CA",
    technologies: [
      "Javascript",
      "React",
      "jQuery",
      "Bootstrap",
      "PHP",
      "MySQL",
    ],
    icon: "golinks",
    items: [
      {
        title: "GoLinks Apps Page",
        description: [
          "Collaborated with the company designer to create a use-case driven page that allows new users to explore the possibilities of using golinks within their company.",
          "Worked with the backend engineers to create a server-side rendered page using React and PHP, while maintaining a high SEO rank for search engines.",
        ],
        link: "https://www.golinks.io/apps.php",
      },
      {
        title: "JIRA Plugin",
        description: [
          "Developed the spec and completed the first iteration of the GoLinks JIRA plugin, automatically setting golinks to be clickable within JIRA descriptions.",
        ],
        link: "https://marketplace.atlassian.com/apps/1223492/go-links",
      },
    ],
  },
  {
    title: "Full Stack Software Engineer",
    fromDate: new Date("May 15, 2019"),
    toDate: new Date("August 15, 2019"),
    companyName: "Clearwater Analytics",
    icon: "clearwater",
    location: "Boise, ID",
    technologies: [
      "Angular",
      "Typescript",
      "Spring Boot",
      "Java",
      "Bootstrap",
      "SQL Server",
    ],
    items: [
      {
        title: "Internal Tools Development",
        description: [
          "Developed internal tools in an Agile environment, including a regression testing solution and a UI for a Kubernetes deployment tool.",
        ],
      },
    ],
  },
  {
    title: "DevOps & DevEx Engineer",
    fromDate: new Date("May 15, 2018"),
    toDate: new Date("August 15, 2018"),
    companyName: "Citibank",
    location: "Dallas, TX",
    icon: "citi",
    technologies: ["Python", "Splunk", "Artifactory"],
    items: [
      {
        title: "File Download & Storage Optimization",
        description: [
          "Identified repository usage inefficiencies with Python, and unusual usage trends with Splunk dashboards for management, and deployed this solution to 25,000 developers within Citibank.",
        ],
      },
    ],
  },
];

const educationData: ResumeValue = [
  {
    title: "Masters of Science, Computing",
    companyName: "Dublin City University",
    fromDate: new Date("September 2020"),
    toDate: new Date("September 2021"),
    location: "Remote (COVID 19) • Dublin, Ireland",
    items: [
      {
        description: [
          "Practicum: Predicting Ratings of Perceived Exertion in Gaelic Football Athletes using Machine Learning Techniques",
        ],
        compact: true,
      },
    ],
  },
  {
    title: "Bachelors of Science, Computer Science",
    companyName: "San José State University",
    fromDate: new Date("August 2018"),
    toDate: new Date("May 2020"),
    location: "San José, California",
    items: [],
  },
  {
    title: "Study Abroad • Computer Science",
    companyName: "University College Dublin",
    fromDate: new Date("May 2019"),
    toDate: new Date("January 2019"),
    location: "Dublin, Ireland",
    items: [
      {
        description: [
          "Data Science in Python: Data analysis of Citibike usage within the New York Metro Area",
        ],
      },
    ],
  },
  {
    title: "Community College • General Education Courses",
    companyName: "De Anza College",
    fromDate: new Date("January 2017"),
    toDate: new Date("December 2018"),
    location: "Dublin, Ireland",
    items: [
      {
        description: ["Men's Soccer: CCCAA Conference Champions"],
      },
    ],
  },
  {
    title: "Bachelors of Science, Computer Science • Transferred",
    companyName: "Southern Methodist University",
    fromDate: new Date("August 2016"),
    toDate: new Date("December 2017"),
    location: "Dallas, Texas",
    items: [],
  },
];

const projectData: ResumeValue = [
  {
    companyName: "Last Man Standing",
    title: "In progress",
    technologies: [
      "Typescript",
      "SvelteKit",
      "NestJS",
      "Prisma",
      "ShadCN",
      "Supabase",
      "Postgres",
    ],
    items: [
      {
        description: [
          "Multiplayer game that lets players engage in betting competitions based on the results of professional football games",
          "Pulls current data Livescore API for each league and assigns points to each player based on their predictions.",
        ],
      },
    ],
  },
  {
    companyName: "oisin.ee (this website!)",
    title: "Continuously in progress",
    technologies: ["Astro", "Typescript", "Github Actions"],
    items: [
      {
        description: [
          "A small Astro website with my resume and links to my socials.",
          "Will add photos, about section, and other things when I have time",
        ],
      },
    ],
  },
];

export const RESUME = {
  experience: resumeData,
  education: educationData,
  projects: projectData,
} as const;

export type ResumeKey = keyof typeof RESUME;
export type ResumeValue = (ResumeSectionProps & { items: ResumeItemProps[] })[];

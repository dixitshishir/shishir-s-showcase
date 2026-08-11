export const profile = {
  name: "Shishir Dixit",
  fullName: "Shishir Shivashankar Dixit",
  role: "Software Engineer",
  tagline:
    "I build clean, useful web applications — from Ruby on Rails backends and RESTful APIs to polished React frontends, with a growing focus on AI and RAG systems.",
  location: "Bengaluru, India",
  email: "sdixit2301@gmail.com",
  phone: "+91 9739989373",
  github: "https://github.com/dixitshishir",
  linkedin: "https://www.linkedin.com/in/shishirdixit23",
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  github: string;
  live?: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "JobSpark AI",
    tag: "AI · Live",
    blurb:
      "AI-powered job assistance platform with intelligent resume analysis and personalized career interactions.",
    tags: ["React.js", "AI Integration", "Tailwind CSS"],
    github: "https://github.com/dixitshishir/job-spark-ai-91",
    live: "https://job-spark-ai-91.vercel.app",
  },
  {
    title: "Shree Spice Kitchen Cart",
    tag: "E-commerce · Live",
    blurb:
      "Responsive React e-commerce cart with add/remove, quantity adjust, dynamic state and real-time totals.",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/dixitshishir/shreespice-kitchen-cart",
    live: "https://shreespice-kitchen-cart.vercel.app",
  },
  {
    title: "Heritage Print / Dixit Offset Printers",
    tag: "Business Site · Live",
    blurb:
      "Responsive React SPA giving a legacy printing business a modern online presence with reusable components.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/dixitshishir/heritage-print-digital",
    live: "https://dixit-offset-printers.vercel.app",
  },
  {
    title: "Food Review · Zero-Shot Learning",
    tag: "ML · Live",
    blurb:
      "Sentiment / classification on food reviews using zero-shot learning — no task-specific training required.",
    tags: ["Python", "NLP", "Zero-Shot"],
    github: "https://github.com/dixitshishir/Food-review-using-zero-shot-learning",
    live: "https://food-review-using-zero-shot-learnin.vercel.app",
  },
  {
    title: "Matrimony Management System",
    tag: "Full-stack",
    blurb:
      "A matrimony platform handling profiles, matches and management workflows built with a PHP backend.",
    tags: ["PHP", "MySQL", "Web"],
    github: "https://github.com/dixitshishir/matrimony-mngt-systm",
  },
];

export const experience = [
  {
    role: "Product Engineer",
    company: "TCS",
    period: "Jun 2024 – Present",
    points: [
      "Developed and maintained 49 production REST APIs for the Xerox Learning Platform using Ruby and Ruby on Rails, powering Android and iOS applications serving 50,000+ users.",
      "Designed and implemented 23 APIs for the Content Player module, delivering features such as content playback, thumbnail support and enhanced media management.",
      "Built and enhanced 27 APIs for the Learn to Grow mobile application, supporting scalable backend services for Android and iOS.",
      "Worked on cross-platform file and media handling for PDF, video, audio, image and document content, addressing differences in browser behaviour across Android and iOS/Safari.",
      "Collaborated in an Agile team of 4 engineers with frontend and mobile developers to analyse requirements, develop APIs, test using Postman and BrowserStack, and deliver production-ready releases.",
      "Led my team at the TCS AI Friday Hackathon, building and presenting a multi-RAG Agent — awarded winners.",
    ],
  },

  {
    role: "Software Engineer",
    company: "Meta16 Labs",
    period: "Sep 2023 – Feb 2024",
    points: [
      "Contributed to a healthcare digitization platform using React.js and MongoDB.",
      "Led end-to-end implementation, system integration, client onboarding and data migration across Karnataka.",
    ],
  },
];

export const skills = [
  "Ruby",
  "Ruby on Rails",
  "React.js",
  "JavaScript",
  "HTML",
  "Tailwind CSS",
  "MySQL",
  "Flask",
  "RAG Systems",
  "Multi-Agent RAG",
  "Artificial Intelligence",
  "Jenkins",
  "Postman API",
  "BrowserStack",
  "Vite",
  "Vercel",
];

export const certifications = [
  {
    title: "LinkedIn Certifications",
    issuer: "Open Shishir Dixit's LinkedIn profile to view credentials",
    url: "https://www.linkedin.com/in/shishirdixit23/",
  },
];

export const profile = {
  name: "Shishir Dixit",
  fullName: "Shishir Shivashankar Dixit",
  role: "Full Stack Developer — Angular & Python",
  tagline:
    "Full-stack developer building reliable APIs and polished web experiences with Angular, Python and React. Promoted to Systems Engineer at TCS, now working as a Full Stack Developer on AI Compass, with a growing focus on AI and RAG systems.",
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
    role: "Systems Engineer — Full Stack Developer",
    company: "TCS · AI Compass",
    period: "2026 – Present",
    points: [
      "Promoted from Product Engineer to Systems Engineer and moved onto the AI Compass team as a Full Stack Developer.",
      "Building and shipping full-stack features across the Angular frontend and Python backend.",
    ],
  },
  {
    role: "Product Engineer",
    company: "TCS",
    period: "Jun 2024 – 2026",
    points: [
      "Worked as an API Developer for the Content Player module of TCS iON Digital Learning Exchange, designing scalable REST APIs and improving content delivery reliability.",
      "Debug production issues and collaborate with product, QA, frontend and mobile teams to deliver dependable learning experiences.",
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
  "Angular",
  "Python",
  "Ruby",
  "Ruby on Rails",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "RAG Systems",
  "Multi-Agent RAG",
  "LLM Integration",
  "Vector Databases",
  "Prompt Engineering",
  "Artificial Intelligence",
  "Git & GitHub",
  "CI/CD",
  "Jenkins",
  "AWS",
  "Postman API",
  "BrowserStack",
  "Agile / Scrum",
  "Vite",
  "Vercel",
];



export const certifications = [
  {
    title: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
    issued: "Oct 2026",
    expires: "Oct 2027",
  },
  {
    title: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "6a878a60-1f13-444c-bf41-6d646e0f71c5",
  },
  {
    title: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Oct 2025",
    expires: "Oct 2028",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle",
    credentialId: "102594422OCI25GAIOCP",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5CAA184D3C307CB68E0B9A80306466BCD268196F486224BC7EC0D3493B6973C9",
  },
  {
    title: "OCI Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Sep 2025",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7C1D9783B5485477AC40827BCACF4265C710CD10ECC4688F8DBD45E809BD4192",
  },
  {
    title: "DevTools Pro: Beginner to Expert with Chrome Developer Tools",
    issuer: "Udemy",
    issued: "Nov 2024",
  },
  {
    title: "Ruby on Rails 7 Essential Training",
    issuer: "LinkedIn Learning",
    issued: "Sep 2024",
    credentialId: "e43aba4991ae321f88135755eca39f4b74c1add96477ec593b457c3e60ed94e8",
  },
  {
    title: "Introduction to Cloud Identity",
    issuer: "Coursera",
    issued: "Jun 2021",
    credentialId: "20fcd636aae7e35d7aaa20643398c31f",
    url: "https://coursera.org/share/20fcd636aae7e35d7aaa20643398c31f",
  },
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    issued: "Jun 2021",
    credentialId: "QR2L2TU52GXZ",
    url: "https://www.coursera.org/account/accomplishments/certificate/QR2L2TU52GXZ",
  },
  {
    title: "Build a Face Recognition Application Using Python",
    issuer: "GUVI Geek Networks, IITM Research Park",
    issued: "May 2021",
    credentialId: "1Z33qpH66Dg702572X",
    url: "https://www.guvi.in/verify-certificate?id=1Z33qpH66Dg702572X",
  },
];

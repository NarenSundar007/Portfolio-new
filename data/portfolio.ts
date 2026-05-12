// Portfolio data structure for Naren Sundar L
// Centralized data layer prepared for API migration

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  github?: string;
  demo?: string;
  details?: string;
  image?: string;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  branch: string;
  cgpa: number;
  year: string;
}

export const heroData = {
  name: "Naren Sundar L",
  titles: [
    "AI Engineer",
    "Full Stack Developer",
    "ML Research Enthusiast",
    "Systems Builder"
  ],
  bio: "Building intelligent systems at the intersection of AI and software engineering. Passionate about solving complex problems through innovative technology.",
  cta: {
    primary: "View My Work",
    secondary: "Download Resume"
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/NarenSundar007",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/naren-sundar/",
      icon: "Linkedin"
    },
    {
      platform: "Email",
      url: "mailto:narensundar18@gmail.com",
      icon: "Mail"
    }
  ] as SocialLink[]
};

export const aboutData = {
  introduction: "Final-year Computer Science student specializing in Artificial Intelligence with a passion for building scalable systems and pushing the boundaries of what's possible with AI.",
  education: {
    degree: "B.Tech",
    branch: "Computer Science and Engineering (Artificial Intelligence)",
    institution: "Amrita Vishwa Vidyapeetham",
    cgpa: 8.48,
    year: "2024"
  } as EducationItem,
  interests: [
    "Artificial Intelligence & Machine Learning",
    "Full Stack Development",
    "Systems Architecture",
    "Cloud Infrastructure",
    "Open Source Contributions"
  ],
  highlights: [
    "AI/ML Model Development",
    "Full Stack Web Applications",
    "Real-time Systems",
    "Distributed Computing"
  ]
};

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"]
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    name: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Transformers", "LLaMA", "RAG Systems", "BERT"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases"]
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"]
  }
];

export const projectsData: Project[] = [
  {
    id: "codeproctor",
    title: "CodeProctor",
    shortDescription: "Full-stack code evaluation platform with real-time feedback",
    description: "A comprehensive code evaluation platform that enables educators and platforms to assess programming assignments with real-time feedback mechanisms.",
    technologies: ["React", "Node.js", "Python", "Docker", "PostgreSQL"],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Evaluation Speed", value: "< 2s" },
      { label: "Accuracy", value: "99.2%" }
    ],
    github: "https://github.com/codeproctordev/codeproctor",
    demo: "https://codeproctor.vercel.app/",
    details: "Built a production-grade code evaluation system with containerized execution, real-time feedback, and comprehensive test coverage. Achieved sub-2-second evaluation times through optimized resource allocation."
  },
  {
    id: "absa-bert",
    title: "Aspect-Based Sentiment Analysis using BERT + LSTM",
    shortDescription: "Advanced NLP model for fine-grained sentiment analysis",
    description: "Implemented a hybrid neural architecture combining BERT embeddings with LSTM layers for aspect-based sentiment analysis with high accuracy.",
    technologies: ["Python", "PyTorch", "BERT", "LSTM", "Transformers"],
    metrics: [
      { label: "F1-Score", value: "0.89" },
      { label: "Accuracy", value: "91%" },
      { label: "Inference", value: "50ms" }
    ],
    github: "https://github.com/NarenSundar007/ABSA-NLP",
    details: "Developed a novel approach combining BERT's contextual embeddings with LSTM's sequential processing for fine-grained aspect sentiment classification, achieving state-of-the-art results on benchmark datasets."
  },
  {
    id: "forecasting",
    title: "Statistical Load Forecasting System",
    shortDescription: "Time-series forecasting for electrical load prediction",
    description: "Built a production statistical forecasting system for predicting electrical load with high accuracy using advanced time-series analysis techniques.",
    technologies: ["Python", "Pandas", "Scikit-learn", "ARIMA", "Prophet"],
    metrics: [
      { label: "RMSE", value: "2.3%" },
      { label: "Predictions", value: "10K+ daily" },
      { label: "Uptime", value: "99.9%" }
    ],
    github: "https://github.com/NarenSundar007/Load-Forecasting",
    details: "Implemented advanced statistical forecasting using ARIMA and Prophet models with ensemble techniques, achieving 2.3% RMSE on large-scale electrical load prediction tasks."
  },
  {
    id: "iot-club",
    title: "Intel IoT Club Website",
    shortDescription: "Full-stack club platform with admin dashboard and event management",
    description: "Designed and developed a comprehensive club website with event management, member portal, and administrative dashboard for the Intel IoT Club.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "Stripe"],
    metrics: [
      { label: "Active Members", value: "200+" },
      { label: "Events", value: "20+ annually" },
      { label: "Performance", value: "98/100 Lighthouse" }
    ],
    github: "https://github.com/Intel-IoT-Club/Website-frontend",
    demo: "https://www.inteliotclub.site/",
    details: "Built a feature-rich club management platform with real-time event updates, member dashboards, payment processing, and admin controls for seamless club operations."
  },
  {
    id: "leukemia-rag",
    title: "Leukemia RAG Chatbot",
    shortDescription: "Fine-tuned LLaMA with Retrieval-Augmented Generation for medical insights",
    description: "Developed an intelligent chatbot combining fine-tuned LLaMA models with RAG architecture for accurate medical information retrieval and reasoning.",
    technologies: ["LLaMA", "RAG", "Vector DB", "FastAPI", "Python"],
    metrics: [
      { label: "Response Quality", value: "94%" },
      { label: "Latency", value: "< 1s" },
      { label: "Context Accuracy", value: "97%" }
    ],
    github: "https://github.com/NarenSundar007/LeukemiaChatBot",
    details: "Created an advanced RAG system combining fine-tuned LLaMA with medical knowledge bases for accurate clinical information retrieval, demonstrating the potential of AI in healthcare."
  }
];

export const experienceData: Experience[] = [
  {
    id: "iot-lead",
    position: "Web Developer",
    organization: "Intel IoT Club",
    duration: "2024 - 2025",
    description: "Building and Maintain Club Website and Project Deveopment.",
    achievements: [
      "Organized 5+ workshops and hackathons",
      "Built club website and event management system"
    ]
  }
];

export const publicationsData: Publication[] = [
  {
    id: "load-forecasting-publication",
    title: "Statistical Load Forecasting in Power Systems: A Comparative Study of SARIMA and Prophet Models",
    authors: ["Naren Sundar L"],
    venue: "CE2CT-2025, Graphic Era Hill University",
    year: 2025,
    doi: "10.1109/ce2ct64011.2025.10941664",
    description: "A comparative study of SARIMA and Prophet models for statistical load forecasting in power systems, presented at CE2CT-2025 and published under IEEE."
  }
];

export const resumeData = {
  title: "Naren Sundar L - Resume",
  url: "/resume.pdf",
  description: "Comprehensive resume detailing skills, experience, and academic achievements"
};

export const contactData = {
  title: "Let's Connect",
  description: "Interested in collaborating or discussing AI and software engineering? Feel free to reach out!",
  email: "narensundar18@gmail.com",
  formFields: [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "John Doe",
      required: true
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@example.com",
      required: true
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Your subject here",
      required: false
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your message...",
      required: true
    }
  ]
};

export const footerData = {
  text: "Crafted with care by Me!",
  year: new Date().getFullYear(),
  socialLinks: heroData.socials
};

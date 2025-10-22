// Mock data for Muhammed Nazim's Portfolio

export const personalInfo = {
  name: "Muhammed Nazim",
  title: "Backend Developer & DevOps Engineer",
  tagline: "Building secure, scalable systems with modern tech stacks",
  email: "muhammd.nazim06@gmail.com",
  phone: "+91-9108519916",
  location: "Bangalore, India",
  github: "https://github.com/the-nazim",
  linkedin: "https://linkedin.com/in/muhammdnazim/",
  resumeUrl: "https://customer-assets.emergentagent.com/job_4b9a29e2-817c-4323-a67a-3e80c843af20/artifacts/7ex457rb_Muhammed%20Nazim-Resume.pdf"
};

export const about = {
  description: "Computer Science graduate specializing in Backend Development, DevOps, and Cybersecurity. Experienced in building secure RESTful APIs, implementing CI/CD pipelines, and managing cloud infrastructure. Strong focus on system reliability, security best practices, and performance optimization.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "20+" },
    { label: "Uptime Achieved", value: "99%" }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Aug 2024 – Sep 2024",
    type: "Freelance",
    achievements: [
      "Increased client inquiries by 40% by designing and hosting a business website using HTML, CSS, JavaScript, and PHP",
      "Improved user engagement by 25% by developing responsive web pages and interactive customer request forms with PHP backend",
      "Ensured 24/7 website availability by managing deployment and hosting on shared services with basic security practices"
    ]
  },
  {
    id: 2,
    title: "Junior Research Assistant Fellow",
    company: "Technology Innovation Hub (TiHAN) - IIT Hyderabad",
    location: "Hyderabad, IN",
    period: "Sep 2024 – July 2025",
    type: "Research",
    achievements: [
      "Improved deployment success rate by 35% and maintained 99% uptime by engineering a Django web application integrated with GitHub CI/CD workflows, Render, and MinIO",
      "Reduced unauthorized access attempts by 95% by developing secure RESTful APIs using Django REST Framework with JWT-based granular access control mechanisms",
      "Achieved <100ms data exchange latency and 98% reliability between Raspberry Pi and NXP S32G by implementing optimized socket programming",
      "Reduced deployment time by 40% by automating pipelines with Jenkins integration, enabling real-time update checks and efficient delivery"
    ]
  },
  {
    id: 3,
    title: "IT Internal Audit Associate",
    company: "Accenture Solutions Private Ltd",
    location: "Bangalore, IN",
    period: "Dec 2022 – May 2023",
    type: "Corporate",
    achievements: [
      "Conducted IT infrastructure audits to identify gaps and mitigate risk, achieving ISO 27001 standards",
      "Evaluated internal controls in change management, identity & access management (IAM), and backup & disaster recovery processes",
      "Worked with Azure Cloud to assess and implement security configurations, data encryption, and policy enforcement across cloud workloads"
    ]
  }
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "C++", level: 85 },
    { name: "Golang", level: 75 },
    { name: "Java", level: 70 },
    { name: "C", level: 80 }
  ],
  "Backend & APIs": [
    { name: "Django", level: 90 },
    { name: "Django REST Framework", level: 90 },
    { name: "Flask", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "JWT Authentication", level: 85 }
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: 85 },
    { name: "Jenkins", level: 80 },
    { name: "GitHub CI/CD", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Azure Cloud", level: 75 }
  ],
  "Databases": [
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "SQLite", level: 80 },
    { name: "MinIO", level: 75 }
  ],
  "Systems & Tools": [
    { name: "Linux/Ubuntu Server", level: 90 },
    { name: "Socket Programming", level: 85 },
    { name: "Bash Scripting", level: 80 },
    { name: "Embedded Linux (Yocto)", level: 75 },
    { name: "Raspberry Pi/NXP S32G", level: 80 }
  ],
  "Security & Networking": [
    { name: "Cybersecurity", level: 85 },
    { name: "Computer Networking", level: 85 },
    { name: "ISO 27001", level: 80 },
    { name: "IAM & Access Control", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Secure API System for OTA Updates",
    description: "Designed and implemented a Flask-based OTA update system with encrypted file delivery for automotive environments, achieving 200+ messages/sec throughput and 98% reliability.",
    techStack: ["Flask", "C++", "Socket Programming", "JWT", "Encryption"],
    achievements: [
      "Enabled encrypted OTA file delivery with <2% packet loss",
      "Achieved 200+ messages/sec throughput over 48-hour testing",
      "98% reliability in automotive environments",
      "Reduced unauthorized access attempts by 95% through JWT-based authentication"
    ],
    metrics: {
      throughput: "200+ msg/sec",
      reliability: "98%",
      latency: "<100ms"
    }
  },
  {
    id: 2,
    title: "SaaS User Management System",
    description: "Built a Django REST API for subscription-based SaaS applications with role-based permissions and JWT authentication, optimizing performance by 35%.",
    techStack: ["Django", "DRF", "SQLite", "JWT", "REST API"],
    achievements: [
      "Optimized API performance by 35%",
      "Consistently delivering responses in <150ms",
      "Implemented role-based permission structures",
      "Scalable deployment using Render and MinIO"
    ],
    metrics: {
      performance: "+35%",
      responseTime: "<150ms",
      securityImprovement: "95%"
    }
  },
  {
    id: 3,
    title: "Real-Time Communication System for SDV",
    description: "Implemented optimized socket programming for efficient data exchange between Raspberry Pi and NXP S32G boards in software-defined vehicles.",
    techStack: ["Embedded Linux", "Yocto", "Ubuntu", "Socket Programming", "Raspberry Pi"],
    achievements: [
      "Achieved <100ms data exchange latency",
      "98% reliability between devices",
      "Flashed and configured embedded Linux OS on hardware",
      "Enabled stable real-time communication in SDV"
    ],
    metrics: {
      latency: "<100ms",
      reliability: "98%",
      uptime: "99%"
    }
  },
  {
    id: 4,
    title: "Project Management Platform with CI/CD",
    description: "Deployed a containerized project management platform with MySQL database using Docker Compose, integrated with automated Jenkins pipelines.",
    techStack: ["Docker", "Docker Compose", "Jenkins", "MySQL", "Linux"],
    achievements: [
      "Reduced deployment time by 40%",
      "Ensured consistent container orchestration",
      "Automated pipelines for real-time updates",
      "Maintained 99% uptime"
    ],
    metrics: {
      deploymentTime: "-40%",
      uptime: "99%",
      automation: "100%"
    }
  }
];

export const education = {
  degree: "Bachelor of Technology",
  major: "Computer Science and Engineering",
  specialization: "Honors in Cybersecurity",
  institution: "Christ (Deemed to be University)",
  school: "School of Engineering and Technology",
  location: "Bangalore, India"
};
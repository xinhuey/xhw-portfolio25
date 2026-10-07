export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
    {
    title: "Full Stack Developer Intern",
    company: "Compass Digital",
    period: "Sept 2025 - Dec 2025",
    description: [
        "Built a dynamic announcements module in Vue.js with configurable embedded links, improving platform communication clarity and content maintainability across client-facing cafeteria applications.",
        "Developed an AI marketing agent prototype that leveraged real-time user behavior and order data to generate personalised promotion strategies, boosting guest engagement by 80%.",
        "Implemented API endpoints for automated test cleanup and wrote end-to-end tests for Voucherify rewards integration, reducing test failed CI runs by 70% for third-party promotion workflows.",
    ],
    technologies: ["Vue.JS", "Python", "AWS"],
  },
  {
    title: "Software Developer Intern",
    company: "Imagine Communications",
    period: "May 2024 - August 2024",
    description: [
      "Developed Python and Selenium automated testing frameworks, cutting regression testing time by 50% and embedding testing into the development cycle.",
      "Maintained Docker containers and Kubernetes pods for the Versio Control broadcasting application, supporting 80% uptime.",
      "Configured AWS EC2 AMIs, reducing instance deployment time by 85% across 3 environments.",
    ],
    technologies: ["Python", "Selenium", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "VP of Development",
    company: "UW Data Science Club",
    period: "Sept 2024 - Dec 2024",
    description: [
      "Led client-facing development of a Next.js QR code scanner application with MongoDB backend and REST APIs, streamlining event check-ins for 100+ participants.",
      "Automated data validation with Python scripts to ensure data integrity across MongoDB and CSV sources.",
      "Maintained and updated a member-facing website serving 300+ users.",
    ],
    technologies: ["React", "Next.js", "MongoDB", "Python", "Bootstrap"],
  },
  {
    title: "Software Test Engineer (Display Engineering)",
    company: "Christie Digital Systems",
    period: "September 2023 - December 2023",
    description: [
      "Designed and executed test cases, logged 5 critical defects before MicroTiles LED latest software release.",
      "Enhanced and debugged a testing tool, CAWS which automates web UI testing, thus achieving 95% code coverage (Python and Selenium).",
      "Developed a Python utility tool, facilitating the efficient file format conversion for EDID files (.bin to .txt).",
      "Pioneered a log monitoring tool in Python (PyQt5) that establishes live telnet sessions to monitor and displays the logs in a table, improving efficiency and accuracy in testing phases by 40%.",
    ],
    technologies: ["Python", "Selenium", "Jenkins"],
  },
];
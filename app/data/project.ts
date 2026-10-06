export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
   {
    title: "PerryVision",
    description: "Built a full-stack binary image classifier with decoupled inference, API, and client layers; fine-tuned ResNet18 via transfer learning, achieving 97% test accuracy on a self-collected dataset.",
    image: "/images/perry.jpg",
    link: "https://github.com/xinhuey/a-platypus-or-perry",
    tags: ["Next.js", "FastAPI", "PyTorch", "TypeScript"],
  },
  {
    title: "Stock Tracker App",
    description: "A web application that allows users to monitor their stocks in real-time.",
    image: "/images/stock.png",
    link: "https://github.com/xinhuey/stock-tracker-app",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "MIPS Compiler",
    description: "A compiler that translates a C-like programming language to MIPS assembly language.",
    image: "/images/compiler.jpg",
    link: "https://github.com/xinhuey/MIPS-Compiler-C-",
    tags: ["C++", "DFA", "Tokenization", "Parsing"],
  },
  {
    title: "Cafe Explorer",
    description: "A lightweight web app that lets users discover coffee shops nearby or in any searched city.",
    image: "/images/cafe.jpg",
    link: "https://github.com/xinhuey/local-cafe-finder",
    tags: ["HTML5", "JavaScript", "Places API"],
  },
];
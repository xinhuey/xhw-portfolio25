"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ExperienceCard from "./components/experience-card"
import Header from "./components/header"
import {useState, useEffect, useCallback} from 'react';
import TrackVisibility from 'react-on-screen';
import './globals.css';


export default function Page() {
  const toRotate = ['Software Developer', 'Computer Science student @ UWaterloo', 'Foodie', 'Photographer'];
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const[text, setText ] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 500;

    const tick = useCallback(() => {
      const toRotate = ['Software Developer', 'Computer Science student @ UWaterloo', 'Foodie', 'Photographer']; // Define inside useCallback
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => Math.max(30, prevDelta / 2)); 
      }
  
      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(100);
      }
  }, [loopNum, isDeleting, text]); // No need to include `toRotate` in dependencies
  
  useEffect(() => {
      let ticker = setInterval(tick, delta);
      return () => { clearInterval(ticker) };
  }, [tick, delta]);
  return (
    <div className="min-h-screen bg-background">
      <Header />


      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              
              <TrackVisibility>
                    {({ isVisible }) =>
                        <div className ={`${isVisible ? "animate__animated animate__fadeIn" : ""} space-y-4`}>
                        <span className="text-xl font-medium text-primary"> 
                          Welcome to my Portfolio!
                        </span>
                        <h1 className="tagline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        {`Hi, I'm Xin Huey Wong, a ... `}</h1>
                        <span className="block mt-20 wrap">{text}</span>
                        <p className="mt-4">Nice to Meet You!</p>
                        
                    </div>}   
              </TrackVisibility>
              <div className="space-x-4">
                <Link href="https://github.com/xinhuey" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/xhwong/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:xinhuey.wong@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <ExperienceCard
                title="Software Developer Intern"
                company="Imagine Communications"
                period="May 2024 - August 2024"
                description={[
                  "Ensured Versio Control application stability by testing containers in Docker environments and also updated Docker versions to maintain security and compatibility across multiple environments.",
                  "Developed an automated testing framework in Python and Selenium for Versio Control Application, resulting in a significant reduction of regression testing time by 50%.",
                  "Configured Amazon EC2 instances with the correct Amazon Machine Images (AMI) based on project requirements, ensuring that the instances were optimized for performance prior to deployment.",
                ]}
                technologies={["Python", "Selenium", "AWS", "Docker", "Kubernetes"]}
              />
              <ExperienceCard
                title="VP of Development"
                company="UW Data Science Club"
                period="Sept 2024 - Dec 2024"
                description={[
                  "Developed and integrated a QR code scanner component in a Next.js application that scans, decodes, and verifies member information, and allows for member check-in through API calls to MongoDB",
                  "Built a script to validate and cross-check member data between a CSV file and MongoDB, logging payment status discrepancies and automating data integrity checks",
                  "Participated in agile development processes and sprint planning for the term.",
                ]}
                technologies={["React", "Next.js", "MongoDB", "Python", "Bootstrap"]}
              />
              <ExperienceCard
                title="Software Test Engineer"
                company="Christie Digital Systems"
                period="September 2023 - December 2023"
                description={[
                  "Designed and executed test cases, logged 5 critical defects before MicroTiles LED latest software release.",
                  "Enhanced and debugged a testing tool, CAWS which automates web UI testing, thus achieving 95% code coverage (Python and Selenium).",
                  "Developed a Python utility tool, facilitating the efficient file format conversion for EDID files (.bin to .txt).",
                  "Pioneered a log monitoring tool in Python (PyQt5) that establishes live telnet sessions to monitor and displays the logs in a table, improving efficiency and accuracy in testing phases by 40%."
                ]}
                technologies={["Python", "Selenium", "Jenkins"]}
              />
              
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Stock Tracker App"
                description="A web application that allows users to monitor their stocks in real-time"
                image="/images/stock.png"
                link="https://github.com/xinhuey/stock-tracker-app"
                tags={["MongoDB", "Express.js", "React", "Node.js"]}
              />
              <ProjectCard
                title="LinguaStream, HawkHacks 2024"
                description="A web application that translates YouTube Video Audio to the language of your choice, and dubs it over the original video."
                image="/images/youtube2.jpg"
                link="https://github.com"
                tags={["React", "Flask", "Postman"]}
              />
              <ProjectCard
                title="MIPS Compiler"
                description="A compiler that translates a C-like programming language to MIPS assembly language."
                image="/images/compiler.jpg"
                link="https://github.com/xinhuey/MIPS-Compiler-C-"
                tags={["C++", "DFA", "Tokenization", "Parsing"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


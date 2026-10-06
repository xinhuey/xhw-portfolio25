"use client"
import { Button } from "@/app/components/ui/button"
import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ExperienceCard from "./components/experience-card"
import Header from "./components/header"
import { experiences } from "./data/experience"
import { projects } from "./data/project"
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
              {experiences.map((exp) => (
                <ExperienceCard key={`${exp.company}-${exp.title}`} {...exp} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
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


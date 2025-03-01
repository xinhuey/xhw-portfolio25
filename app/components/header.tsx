"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const openResume = () => {
    window.open('/resume-xhw.pdf', '_blank');
  };

    return (
        
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="w-full max-w-screen-xl mx-auto px-6 flex h-14 items-center">
              <div className="mr-4 hidden md:flex">
                
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/#about" className="transition-colors hover:text-foreground/80">
                    About
                  </Link>
                  <Link href="/#experience" className="transition-colors hover:text-foreground/80">
                    Experience
                  </Link>
                  <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                    Projects
                  </Link>
                  <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                    Contact
                  </Link>
                  <Link href="/gallery" className="transition-colors hover:text-foreground/80">
                    Gallery
                  </Link>
                </nav>
              </div>
              <Button 
                variant="outline" 
                className="ml-auto" 
                onClick={() => window.open('/resume-xhw.pdf', '_blank')}
              >
                Resume
              </Button>
              
              
            </div>
          </header>
        
          );





}
"use client"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 flex h-auto min-h-14 items-center gap-4 py-2">
        {/* Always visible, wraps on small screens */}
        <nav className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
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

        <Button
          variant="outline"
          className="ml-auto shrink-0"
          onClick={() => window.open('/resume-xhw.pdf', '_blank')}
        >
          Resume
        </Button>
      </div>
    </header>
  );
}
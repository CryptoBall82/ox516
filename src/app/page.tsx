// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Bot, CalendarDays, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-primary/20 text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo iconColorClassName="text-accent" textColorClassName="text-foreground" />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild className="text-foreground hover:bg-accent/10 hover:text-accent">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center">
          <ShieldCheck className="mx-auto h-20 w-20 text-accent mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-primary">Officia</span><span className="text-accent">X</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            The ultimate platform for sports officials. Streamline your schedule, access essential tools, and leverage AI for rule interpretations.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/dashboard">Go to Home</Link>{/* Changed text from "Go to Dashboard" */}
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<CalendarDays className="h-10 w-10 text-accent mb-4" />}
                title="Schedule Integration"
                description="Seamlessly sync your Google and iCloud calendars to manage game schedules effortlessly."
              />
              <FeatureCard
                icon={<Briefcase className="h-10 w-10 text-accent mb-4" />}
                title="Official's Toolbox"
                description="Access vital assigner info, weather updates, coin flip, and an umpire classroom, all in one place."
              />
              <FeatureCard
                icon={<Bot className="h-10 w-10 text-accent mb-4" />}
                title="AI Assistant"
                description="Get instant, AI-powered assistance for rule interpretations and queries based on official rulebooks."
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4 text-center">
           <Image src="https://placehold.co/1200x400.png" alt="OfficiaX platform mockup" width={1200} height={400} className="rounded-lg shadow-xl mx-auto" data-ai-hint="sports officials technology" />
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} OfficiaX. Elevate Your Game.
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

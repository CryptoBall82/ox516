// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CloudSun, HelpCircle, GraduationCap, BriefcaseBusiness } from 'lucide-react'; // Changed BriefcasePlus to BriefcaseBusiness
import { useRouter } from 'next/navigation';

// Inline SVG for Coin Toss can be kept or replaced if a suitable Lucide icon is preferred
const CoinTossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // Use currentColor to inherit text color
    width="35px"
    height="35px"
    className="text-primary group-hover:text-primary-foreground"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    <text x="12" y="14.5" fontSize="6" textAnchor="middle" fill="currentColor">?</text>
  </svg>
);


interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  actionText: string;
}

function ToolCard({ title, description, href, icon, actionText }: ToolCardProps) {
  return (
    <Card className="hover:shadow-accent/20 transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg text-accent">{icon}</div>
        <div className="flex-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={href}>{actionText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ToolboxPage() {
  const router = useRouter();

  // Navigation handlers (can be simplified if direct links are used in ToolCard)
  const navigateToWeatherPage = () => router.push('/toolbox/weather'); // Placeholder, actual page needs creation
  const navigateToCoinTossPage = () => router.push('/toolbox/cointoss'); // Placeholder
  const navigateToUmpireClassroomPage = () => router.push('/toolbox/umpireclassroom'); // Placeholder
  const navigateToAssignorInfoPage = () => router.push('/toolbox/officialroster'); // Path remains the same

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DefaultHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 pb-24"> {/* pt-24 for header, pb-24 for navbar */}
        <Card className="shadow-xl border-accent/50 mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Image
                src="https://placehold.co/100x100.png"
                alt="Toolbox Icon"
                width={100}
                height={100}
                className="rounded-lg border border-border shadow-md"
                data-ai-hint="tools wrench hammer"
              />
            </div>
            <CardTitle className="text-3xl font-bold text-accent">Official's Toolbox</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Your essential toolkit for game day and beyond.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ToolCard
            title="Weather Center"
            description="Check current and forecasted weather conditions."
            href="/toolbox/weather" // Placeholder route
            icon={<CloudSun size={36} />}
            actionText="View Weather"
          />
          <ToolCard
            title="Coin Toss"
            description="A quick and easy virtual coin toss."
            href="/toolbox/cointoss" // Placeholder route
            icon={<HelpCircle size={36} /> } // Using HelpCircle as a generic alternative
            actionText="Flip Coin"
          />
          <ToolCard
            title="Umpire Classroom"
            description="Access training materials and rule refreshers."
            href="/toolbox/umpireclassroom" // Placeholder route
            icon={<GraduationCap size={36} />}
            actionText="Enter Classroom"
          />
          <ToolCard
            title="Assignor Info"
            description="View assigner contacts and related information."
            href="/toolbox/officialroster" // Path remains /toolbox/officialroster for now
            icon={<BriefcaseBusiness size={36} />}
            actionText="View Contacts"
          />
        </div>
        
        {/* Example of how the old buttons could be mapped if needed, but ToolCard is preferred */}
        {/* <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Button onClick={navigateToWeatherPage} variant="outline" className="flex flex-col h-24 items-center justify-center p-2 group">
            <CloudSun className="h-8 w-8 mb-1 text-primary group-hover:text-primary-foreground" />
            <span className="text-center text-sm">Weather</span>
          </Button>
          <Button onClick={navigateToCoinTossPage} variant="outline" className="flex flex-col h-24 items-center justify-center p-2 group">
             <div className="mb-1"><CoinTossIcon /></div>
            <span className="text-center text-sm">Coin Toss</span>
          </Button>
          <Button onClick={navigateToUmpireClassroomPage} variant="outline" className="flex flex-col h-24 items-center justify-center p-2 group">
            <GraduationCap className="h-8 w-8 mb-1 text-primary group-hover:text-primary-foreground" />
            <span className="text-center text-sm">Ump Class</span>
          </Button>
          <Button onClick={navigateToOfficialRosterPage} variant="outline" className="flex flex-col h-24 items-center justify-center p-2 group">
            <Users className="h-8 w-8 mb-1 text-primary group-hover:text-primary-foreground" />
            <span className="text-center text-sm">Roster</span>
          </Button>
        </div> */}

      </main>
      <NavbarTools />
    </div>
  );
}


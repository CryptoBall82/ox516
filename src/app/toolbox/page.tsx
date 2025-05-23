// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CloudSun, GraduationCap, BriefcaseBusiness, HandCoins } from 'lucide-react'; // Changed HelpCircle to HandCoins
import { useRouter } from 'next/navigation';

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
  const navigateToWeatherPage = () => router.push('/toolbox/weather'); 
  const navigateToCoinTossPage = () => router.push('/toolbox/cointoss'); 
  const navigateToUmpireClassroomPage = () => router.push('/toolbox/umpireclassroom'); 
  const navigateToAssignorInfoPage = () => router.push('/toolbox/officialroster'); 

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
            href="/toolbox/weather" 
            icon={<CloudSun size={36} />}
            actionText="View Weather"
          />
          <ToolCard
            title="Coin Toss"
            description="A quick and easy virtual coin toss."
            href="/toolbox/cointoss" 
            icon={<HandCoins size={36} /> } 
            actionText="Flip Coin"
          />
          <ToolCard
            title="Umpire Classroom"
            description="Access training materials and rule refreshers."
            href="/toolbox/umpireclassroom" 
            icon={<GraduationCap size={36} />}
            actionText="Enter Classroom"
          />
          <ToolCard
            title="Assignor Info"
            description="View assigner contacts and related information."
            href="/toolbox/officialroster" 
            icon={<BriefcaseBusiness size={36} />}
            actionText="View Contacts"
          />
        </div>
        
      </main>
      <NavbarTools />
    </div>
  );
}

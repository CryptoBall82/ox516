// src/app/home/page.tsx
"use client";

import { HomeHeader } from '@/components/HomeHeader';
import { NavbarHome } from '@/components/NavbarHome';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HomeHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 pb-24"> {/* pt-24 for header, pb-24 for navbar */}
        <Card className="shadow-xl border-accent/50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-accent">Home Page</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Welcome to your OfficiaX home page!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              This is the main content area for the home page. You can add various components and information here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Quick Stats</h3>
                <p className="text-sm text-muted-foreground">Games this week: 3</p>
                <p className="text-sm text-muted-foreground">Open Assignments: 1</p>
                <p className="text-sm text-muted-foreground">Upcoming Certifications: 0</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Announcements</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Rulebook update meeting next Monday.</li>
                  <li>New training videos available in Toolbox.</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://placehold.co/600x300.png"
                alt="Home page illustration"
                width={600}
                height={300}
                className="rounded-lg shadow-lg mx-auto border border-border"
                data-ai-hint="sports stadium field"
              />
            </div>
          </CardContent>
        </Card>
      </main>
      <NavbarHome />
    </div>
  );
}

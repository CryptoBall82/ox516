// src/app/leagues/page.tsx
"use client";

import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export default function LeaguesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DefaultHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 pb-24"> {/* pt-24 for header, pb-24 for navbar */}
        <Card className="shadow-xl border-accent/50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-accent">Leagues</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Manage and view your leagues.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              This is the leagues page. Content related to leagues will be displayed here.
            </p>
            <div className="text-center">
              <Image
                src="https://placehold.co/600x300.png"
                alt="Leagues illustration"
                width={600}
                height={300}
                className="rounded-lg shadow-lg mx-auto border border-border"
                data-ai-hint="team sports group"
              />
            </div>
            <p className="text-muted-foreground">
              Further details about league standings, schedules, and teams can be added here.
            </p>
          </CardContent>
        </Card>
      </main>
      <NavbarLeagues />
    </div>
  );
}

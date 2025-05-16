// src/app/dashboard/page.tsx
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/auth-context";
import { TrendingUp, Users, FileText, MessageSquareHeart } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <Card className="shadow-xl border-accent/50">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-accent">Welcome to OfficiaX, {user?.email || 'Official'}!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Your central hub for officiating excellence. Here&apos;s a quick overview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Navigate through your schedule, access essential tools, or consult the AI assistant using the links in the header.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Upcoming Schedule"
          description="View your upcoming games and assignments."
          link="/schedule"
          icon={<Image src="https://placehold.co/80x80.png" alt="Calendar Icon" width={80} height={80} className="rounded-lg" data-ai-hint="calendar schedule" />}
          actionText="View Schedule"
        />
        <DashboardCard
          title="Official's Toolbox"
          description="Access weather, assigner info, and learning resources."
          link="/toolbox"
          icon={<Image src="https://placehold.co/80x80.png" alt="Toolbox Icon" width={80} height={80} className="rounded-lg" data-ai-hint="tools equipment" />}
          actionText="Open Toolbox"
        />
        <DashboardCard
          title="OfficiaX AI Assistant"
          description="Get instant answers to your rule-based questions."
          link="/ai-assistant"
          icon={<Image src="https://placehold.co/80x80.png" alt="AI Icon" width={80} height={80} className="rounded-lg" data-ai-hint="robot ai" />}
          actionText="Ask AI"
        />
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Placeholder for recent notifications or updates.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="text-accent font-medium">[Notification]</span> New game assigned: Team A vs Team B on 2023-10-25.</li>
            <li><span className="text-accent font-medium">[Update]</span> Rulebook 2023-24 edition now available in AI Assistant.</li>
            <li><span className="text-accent font-medium">[Reminder]</span> Pre-season meeting next Tuesday.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  actionText: string;
}

function DashboardCard({ title, description, link, icon, actionText }: DashboardCardProps) {
  return (
    <Card className="hover:shadow-accent/20 transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={link}>{actionText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
